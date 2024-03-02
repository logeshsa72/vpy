import React, { useEffect, useState, useRef, useCallback } from 'react';
import secureLocalStorage from 'react-secure-storage';

import FormHeader from '../../../Basic/components/FormHeader';
import FormReport from "../../../Basic/components/FormReportTemplate";
import { toast } from "react-toastify"
import { TextInput, CheckBox } from "../../../Inputs"
import ReportTemplate from '../../../Basic/components/ReportTemplate';
import {
    useGetUomQuery,
    useGetUomByIdQuery,
    useAddUomMutation,
    useUpdateUomMutation,
    useDeleteUomMutation,
} from '../../../redux/services/UomMasterService.js';

const MODEL = "Uom Master";

export default function Form() {
    const [form, setForm] = useState(false);

    const [readOnly, setReadOnly] = useState(false);
    const [id, setId] = useState("")
    const [name, setName] = useState("");
    // const [code, setCode] = useState("");
    const [active, setActive] = useState(true);

    const [searchValue, setSearchValue] = useState("");

    const childRecord = useRef(0);

    const params = { companyId: secureLocalStorage.getItem(sessionStorage.getItem("sessionId") + "userCompanyId") }

    const { data: allData, isLoading, isFetching } = useGetUomQuery({ params, searchParams: searchValue });
    const { data: singleData, isFetching: isSingleFetching, isLoading: isSingleLoading } = useGetUomByIdQuery(id, { skip: !id });

    const [addData] = useAddUomMutation();
    const [updateData] = useUpdateUomMutation();
    const [removeData] = useDeleteUomMutation();



    const syncFormWithDb = useCallback(
        (data) => {

            if (id) setReadOnly(true);
            setName(data?.name ? data.name : "");
            // setCode(data?.code ? data.code : "");
            setActive(id ? (data?.active ? data.active : false) : true);
            childRecord.current = data?.childRecord ? data?.childRecord : 0;
        }, [id])
    useEffect(() => {
        syncFormWithDb(singleData?.data);
    }, [isSingleFetching, isSingleLoading, id, syncFormWithDb, singleData])
    const data = {
        name, companyId: secureLocalStorage.getItem(sessionStorage.getItem("sessionId") + "userCompanyId"), active, id
    }
    const validateData = (data) => {
        if (data.name) {
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
        } catch (error) {
            console.log("handle")
        }
    }

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

    const onNew = () => { setId(""); setReadOnly(false); setForm(true); setSearchValue("") }

    function onDataClick(id) {
        setId(id);
        setForm(true);
    }
    const tableHeaders = [
        "Name", "Status"
    ]
    const tableDataNames = ["dataObj.name", 'dataObj.active ? ACTIVE : INACTIVE']

    if (!form)
        return <ReportTemplate
            heading={MODEL}
            tableHeaders={tableHeaders}
            tableDataNames={tableDataNames}
            loading={
                isLoading || isFetching
            }
            setForm={setForm}
            data={allData?.data}
            onClick={onDataClick}
            onNew={onNew}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

    return (
        <div onKeyDown={handleKeyDown} className='md:items-start md:justify-items-center grid h-full bg-theme'>
            <div className='flex flex-col frame w-full h-full'>
                <FormHeader
                    onNew={onNew}
                    onClose={() => {
                        setForm(false);
                        setSearchValue("");
                    }} model={MODEL}
                    saveData={saveData}
                    setReadOnly={setReadOnly}
                    deleteData={deleteData}
                // childRecord={childRecord.current}
                />
                <div className='flex-1 grid grid-cols-1 md:grid-cols-4 gap-x-2 overflow-clip'>
                    <div className='col-span-3 grid md:grid-cols-2 border overflow-auto'>
                        <div className='mr-1 md:ml-2'>
                            <fieldset className='frame my-1'>
                                <legend className='sub-heading'>UOM Info</legend>
                                <div className='grid grid-cols-1 my-2'>
                                    <TextInput name="UOM Type" type="text" value={name} setValue={setName} required={true} readOnly={readOnly} disabled={(childRecord.current > 0)} />
                                    <CheckBox name="Active" value={active} setValue={setActive} readOnly={readOnly} />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className='frame overflow-x-hidden'>
                        <FormReport
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            setId={setId}
                            tableHeaders={tableHeaders}
                            tableDataNames={tableDataNames}
                            data={allData?.data}
                            loading={
                                isLoading || isFetching
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
