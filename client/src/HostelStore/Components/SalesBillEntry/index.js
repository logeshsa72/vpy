
import React, { useEffect, useState, useRef, useCallback } from 'react';
import secureLocalStorage from 'react-secure-storage';

import FormHeader from '../../../Basic/components/FormHeader';
import { toast } from "react-toastify"
import { CheckBox, DropdownInput, DisabledInput } from "../../../Inputs"
import ReportTemplate from '../../../Basic/components/ReportTemplate';
import { useGetLeadCategoriesMasterQuery } from '../../../redux/services/LeadCategoriesMasterServices'
import {
  useGetSalesBillQuery,
  useGetSalesBillByIdQuery,
  useAddSalesBillMutation,
  useUpdateSalesBillMutation,
  useDeleteSalesBillMutation,
} from '../../../redux/services/SalesBillService'


import { dropDownListObject } from '../../../Utils/contructObject';
import { getDateFromDateTime } from '../../../Utils/helper';
import PoBillItems from './PoBillItems';
import Modal from "../../../UiComponents/Modal";
import PurchaseBillFormReport from './PurchaseBillFormReport';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { PrintFormatSalesBill } from '..';
import {
  useGetEmployeeCategoryQuery,
} from '../../../redux/services/EmployeeCategoryMasterService'
import { useGetPartyQuery } from '../../../redux/services/PartyMasterService';
import { useReactToPrint } from 'react-to-print';
const MODEL = "Sales Bill Entry";
export default function Form() {
  const today = new Date()
  const [form, setForm] = useState(true);
  const [date, setDate] = useState(getDateFromDateTime(today));
  const [docId, setDocId] = useState("");
  const [address, setAddress] = useState("");
  const [place, setPlace] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [formReport, setFormReport] = useState(false)
  const [readOnly, setReadOnly] = useState(false);
  const [id, setId] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [empId, setEmpId] = useState("")
  const [active, setActive] = useState(true);
  const [leadCategoriesId, setLeadCategoriesId] = useState("")
  const [searchValue, setSearchValue] = useState("");
  const [poBillItems, setPoBillItems] = useState([])
  const childRecord = useRef(0);
  const [isTaxBill, setIsTaxBill] = useState(false);
  const branchId = secureLocalStorage.getItem(
    sessionStorage.getItem("sessionId") + "currentBranchId"
  )
  const componentRef = useRef();
  const dispatch = useDispatch()

 
  const handlePrint = useReactToPrint({
    content: () => componentRef.current, 
    documentTitle: docId,
    pageStyle: ''
  });
  const params = { companyId: secureLocalStorage.getItem(sessionStorage.getItem("sessionId") + "userCompanyId") }
  const { data: LeadCategoriesList } =
    useGetLeadCategoriesMasterQuery({ params });
  const LeadCategories = LeadCategoriesList?.data ? LeadCategoriesList.data : []

  const { data: allData, isLoading, isFetching } = useGetSalesBillQuery({ params: { branchId, isTaxBill }, searchParams: searchValue });
  const { data: singleData, isFetching: isSingleFetching, isLoading: isSingleLoading } = useGetSalesBillByIdQuery(id, { skip: !id });
  const { data: employeeData, isFetching: isempFetching, isLoading: isempLoading } = useGetEmployeeCategoryQuery(params);

  const [addData] = useAddSalesBillMutation();
  const [updateData] = useUpdateSalesBillMutation();
  const [removeData] = useDeleteSalesBillMutation();
  const getNextDocId = useCallback(() => {
    if (id) return
    if (isLoading || isFetching) return
    if (allData?.nextDocId) {
      setDocId(allData.nextDocId)
    }
  }, [allData, isLoading, isFetching, id])



  const { data: supplierList } =
    useGetPartyQuery({ params });
  useEffect(getNextDocId, [getNextDocId])

  const syncFormWithDb = useCallback(
    (data) => {

      if (id) setReadOnly(true);
      if (data?.docId) {
        setDocId(data.docId);
      }
      if (data?.createdAt) setDate(moment.utc(data?.createdAt).format("YYYY-MM-DD"));
      setActive(id ? (data?.active ? data.active : false) : true);
      setSupplierId(data?.supplierId ? data?.supplierId : "");
      setLeadCategoriesId(data?.leadCategoriesId ? data?.leadCategoriesId : "");
      setEmpId(id ? (data?.empId ? data.empId : false) : true)
      setAddress(data?.address ? data.address : "")
      setPlace(data?.place ? data.place : "")
      setPoBillItems(data?.SalesBillItems ? data?.SalesBillItems : []);
      setDueDate(data?.dueDate ? moment.utc(data?.dueDate).format("YYYY-MM-DD") : "");
      setIsTaxBill(data?.isTaxBill ? JSON.parse(data?.isTaxBill) : false)
      childRecord.current = data?.childRecord ? data?.childRecord : 0;
    }, [id])

  useEffect(() => {
    syncFormWithDb(singleData?.data);
  }, [isSingleFetching, isSingleLoading, id, syncFormWithDb, singleData])
  // useEffect(() => {
  //   syncFormWithDb(empData?.data);
  // }, [isSingleFetching, isSingleLoading, id, syncFormWithDb, empData])
  const data = {
    branchId,
    supplierId,
    dueDate,
    address,
    place,
    salesBillItems: poBillItems.filter(item => item.qty != 0 && item.price != 0),
    companyId: secureLocalStorage.getItem(sessionStorage.getItem("sessionId") + "userCompanyId"), active, id, empId, leadCategoriesId,
    isTaxBill, docId
  }
  const validateData = (data) => {
    if (data.supplierId) {
      return true;
    }
    return false;
  }


  const handleSubmitCustom = async (callback, data, text) => {
    try {
      let returnData = await callback(data).unwrap();
      setId("")
      syncFormWithDb(undefined)
      toast.success(text + "Successfully");
      dispatch({
        type: `stock/invalidateTags`,
        payload: ['Stock'],
      });
    } catch (error) {
      console.log("handle")
    }

  }
  console.log(isTaxBill, "isTaxBill")

  const saveData = () => {
    if (!validateData(data)) {
      toast.info("Please fill all required fields...!", { position: "top-center" })
      return
    }
    if (!window.confirm("Are you sure save the details ...?")) {
      return
    }
    if (id) {
      handleSubmitCustom(updateData, data, "Updated")
    } else {
      handleSubmitCustom(addData, data, "Added")
    }
  }

  const deleteData = async () => {
    if (id) {
      if (!window.confirm("Are you sure to delete...?")) {
        return
      }
      try {
        await removeData(id).unwrap();
        setId("");
        toast.success("Deleted Successfully");
      } catch (error) {
        toast.error("something went wrong")
      }
      ;
    }
  }

  const handleKeyDown = (event) => {
    let charCode = String.fromCharCode(event.which).toLowerCase();
    if ((event.ctrlKey || event.metaKey) && charCode === 's') {
      event.preventDefault();
      saveData();
    }
  }

  const onNew = () => {
    setId("");
    getNextDocId();
    setReadOnly(false);
    setForm(true);
    setSearchValue("")
  }


  function onDataClick(id) {
    setId(id);
    setFormReport(false)
    setForm(true);
  }
  const tableHeaders = [
    "Code", "Name", "Status"
  ]
  const tableDataNames = ["dataObj.code", "dataObj.name", 'dataObj.active ? ACTIVE : INACTIVE']

  if (!form)
    return <ReportTemplate
      heading={MODEL}
      tableHeaders={tableHeaders}
      tableDataNames={tableDataNames}
      loading={
        isLoading || isFetching
      }
      setForm={setForm}
      data={allData?.data ? allData?.data : []}
      onClick={onDataClick}
      onNew={onNew}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
  const supplierData = supplierList?.data ? supplierList.data : []
  return (
    <div onKeyDown={handleKeyDown} className='md:items-start md:justify-items-center grid h-full bg-theme'>
      <Modal
        isOpen={formReport}
        onClose={() => setFormReport(false)}
        widthClass={"px-2 h-[90%] w-[90%]"}
      >
        <PurchaseBillFormReport onClick={onDataClick} />
      </Modal>
      <div className="hidden">
        <PrintFormatSalesBill id={id ? id : ""} innerRef={componentRef} />
      </div>
      <div className='flex flex-col frame w-full h-full'>
        <FormHeader
          onNew={onNew}
          model={MODEL}
          openReport={() => setFormReport(true)}
          saveData={saveData}
          setReadOnly={setReadOnly}
          deleteData={deleteData}
          onPrint={id? handlePrint : null}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className='flex-1 grid grid-cols-1 md:grid-cols-4 gap-x-2 overflow-clip'>
          <div className='col-span-4 grid md:grid-cols-1 border overflow-auto'>
            <div className='mr-1 md:ml-2'>
              <fieldset className='frame my-1'>
                <legend className='sub-heading'>Product Info</legend>
                <div className='grid grid-cols-3 my-2'>
                  {id ?
                    <DisabledInput name={"Delivery No"} value={docId} />
                    :
                    <div className="flex w-full col-span">
                      <CheckBox name={""} value={isTaxBill} setValue={setIsTaxBill} readOnly={readOnly} />
                      <DisabledInput name={"Bill No"} value={docId} />
                    </div>
                  }

                  <DisabledInput name="Bill. 
                           Date" value={date} type={"Date"} required={true} readOnly={readOnly} />

                  <DropdownInput name="Customer" options={dropDownListObject(
                    id ? supplierData : supplierData.filter(value => value.isCustomer).filter(item => item.active), "name", "id")}
                    value={supplierId} setValue={setSupplierId} required={true} readOnly={readOnly} disabled={(childRecord.current > 0)} />
                  <div>
                    <CheckBox name="Active" value={active} setValue={setActive} readOnly={readOnly} />
                  </div>
                  <DropdownInput
                    name="Employee List"
                    options={employeeData ? (dropDownListObject(
                      id ? employeeData.data : employeeData.data.filter(item => item.active),
                      "name",
                      "id")
                    ) : []}
                    value={empId}
                    setValue={setEmpId}
                    required={true}
                    readOnly={id || readOnly}
                  />


                  <DropdownInput
                    name="Lead Out Source"
                    options={dropDownListObject(
                      id ? LeadCategories : LeadCategories.filter(type => type.name).filter(type => type.id),
                      "name",
                      "id"
                    )}
                    type="data"
                    required={true}
                    readOnly={readOnly}
                    value={leadCategoriesId}
                    setValue={setLeadCategoriesId}

                  />
                </div>
              </fieldset>
          
              <fieldset className='frame rounded-tr-lg rounded-bl-lg rounded-br-lg my-1 w-full border border-gray-400 md:pb-5 flex flex-1 overflow-auto'>
                <legend className='sub-heading'>Sales-Bill-Details</legend>
                <PoBillItems date={singleData?.data?.createdAt} id={id} readOnly={readOnly} poBillItems={poBillItems} setPoBillItems={setPoBillItems} isTaxBill={isTaxBill} />
              </fieldset>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}