import React, { Fragment, useRef } from 'react'
import { useEffect, useState } from "react";
import { Loader } from "../../../Basic/components";
import { getDateFromDateTimeToDisplay, substract, sumArray } from "../../../Utils/helper";
import { showEntries } from '../../../Utils/DropdownData';
import secureLocalStorage from 'react-secure-storage';
import {
    useGetStockQuery,
    useGetStockByIdQuery,
    useAddStockMutation,
    useUpdateStockMutation,
    useDeleteStockMutation,
    useGetPcsStockQuery
} from '../../../redux/services/StockService'
import { pageNumberToReactPaginateIndex, reactPaginateIndexToPageNumber } from '../../../Utils/helper';
import ReactPaginate from 'react-paginate';



const SalesRegister = () => {
    const [totalNetBillValue, setTotalNetBillValue] = useState('')
    const [currentOpenNumber, setCurrentOpenNumber] = useState("");
    const [partyId, setPartyId] = useState("");
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [parameter, setParameter] = useState(false);

    const [excelData, setExcelData] = useState([]);


    const [filterParties, setFilterParties] = useState([])
    const [filterPoTypes, setFilterPoTypes] = useState([])

    const branchId = secureLocalStorage.getItem(
        sessionStorage.getItem("sessionId") + "currentBranchId"
    )
    const [poNo, setPoNo] = useState("");
    const [searchPoDate, setPoDate] = useState("");
    const [searchDueDate, setDueDate] = useState("");
    const [searchPoType, setSearchPoType] = useState("");
    const [supplier, setSupplier] = useState("");
    const [dataPerPage, setDataPerPage] = useState("10");
    const [totalCount, setTotalCount] = useState(0);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);


    const [id, setId] = useState("")
    const [currentSelectedPoDetail, setCurrentSelectedPoDetail] = useState("");

    const handleOnclick = (e) => {
        setCurrentPageNumber(reactPaginateIndexToPageNumber(e.selected));
    }
    const searchFields = { searchDocId: poNo, searchPoDate, searchSupplierAliasName: supplier, searchPoType, searchDueDate }

    const companyId = secureLocalStorage.getItem(
        sessionStorage.getItem("sessionId") + "userCompanyId"
    )
    const params = {
        branchId, companyId, stockData: true
    };

    const { data, isLoading, isFetching } = useGetStockQuery({ params });
    const purData = data?.data ? data.data : []
    console.log(purData, ' purData');
    const { data: singleData, isFetching: isSingleFetching, isLoading: isSingleLoading } = useGetStockByIdQuery(id, { skip: !id });
    console.log(singleData, 'singleData');
    useEffect(() => {
        if (purData.length > 0) {
            const totalNetBill = purData.reduce((total, dataObj) => {
                return total + (dataObj.netBillValue || 0);
            }, 0);

            setTotalNetBillValue(totalNetBill);
        }
    }, [purData]);

    // const { data: paginatedData, isLoading, isFetching } = ({
    //   params: {
    //     branchId, ...searchFields, pagination: true, dataPerPage, pageNumber: currentPageNumber, supplierId: partyId, startDate, endDate,
    //     filterParties: filterParties.map(item => item.value),
    //     filterPoTypes: filterPoTypes.map(item => item.value)
    //   }
    // });

    // const { data: allData, isLoading: isAllDataLoading, isFetching: isAllDataFetching } = ({
    //   params: {
    //     branchId, ...searchFields,
    //     supplierId: partyId, startDate, endDate,
    //     filterParties: filterParties.map(item => item.value),
    //     filterPoTypes: filterPoTypes.map(item => item.value)
    //   }
    // })

    // useEffect(() => {
    //   if (paginatedData?.totalCount) {
    //     setTotalCount(paginatedData?.totalCount)
    //   } else {
    //     setTotalCount(0)
    //   }
    // }, [paginatedData, isLoading, isFetching])

    useEffect(() => {
        setCurrentPageNumber(1)
    }, [poNo, searchPoDate, supplier, searchPoType, searchDueDate])


    const tableRef = useRef(null);

    // const { data: poDetails, isLoading: isLoadingPoDetails, isFetching: isFetchingPoDetails } = (currentSelectedPoDetail, { skip: !currentSelectedPoDetail });
    // useEffect(() => {
    //   if (!poDetails?.data || !currentSelectedPoDetail) return
    //   let excelPoItems = poDetails.data.PoItems.map(poItem => {
    //     let poQty = parseFloat(poItem.qty).toFixed(3)
    //     let cancelQty = poItem.alreadyCancelData?._sum.qty ? poItem.alreadyCancelData._sum.qty : "0.000";
    //     let alreadyInwardedQty = poItem.alreadyInwardedData?._sum?.qty ? parseFloat(poItem.alreadyInwardedData._sum.qty).toFixed(3) : "0.000";
    //     let alreadyReturnedQty = poItem.alreadyReturnedData?._sum?.qty ? parseFloat(poItem.alreadyReturnedData._sum.qty).toFixed(3) : "0.000";
    //     let balanceQty = substract(substract(poQty, cancelQty), substract(alreadyInwardedQty, alreadyReturnedQty)).toFixed(3)
    //     let poBags = poItem.noOfBags
    //     let cancelBags = poItem.alreadyCancelData?._sum.noOfBags ? poItem.alreadyCancelData._sum.noOfBags : 0.000;
    //     let alreadyInwardedBags = poItem.alreadyInwardedData?._sum?.noOfBags ? poItem.alreadyInwardedData._sum.noOfBags : 0.000;
    //     let alreadyReturnedBags = poItem.alreadyReturnedData?._sum?.noOfBags ? parseFloat(poItem.alreadyReturnedData._sum.noOfBags).toFixed(3) : "0.000";
    //     let balanceBags = substract(substract(poBags, cancelBags), substract(alreadyInwardedBags, alreadyReturnedBags))

    //     let alreadyBillQty = poItem?.alreadyBillData?._sum?.qty ? poItem?.alreadyBillData._sum.qty : 0;
    //     let balBillQty = substract(poQty, alreadyBillQty);
    //     balBillQty = balBillQty > 0 ? balBillQty : 0

    //     let newItem = {}
    //     if (poDetails.data.transType === "GreyYarn" || poDetails.data.transType === "DyedYarn") {
    //       newItem["Item"] = poItem.Yarn.aliasName;
    //       newItem["Po Bags"] = poBags;
    //       newItem["Cancel Bags"] = cancelBags;
    //       newItem["Inward Bags"] = alreadyInwardedBags;
    //       newItem["Return Bags"] = alreadyReturnedBags;
    //       newItem["Balance Bags"] = balanceBags;
    //     } else if (poDetails.data.transType === "GreyFabric" || poDetails.data.transType === "DyedFabric") {
    //       newItem["Item"] = poItem.Fabric.aliasName;
    //       newItem["Design"] = poItem.Design.name;
    //       newItem["Gauge"] = poItem.Gauge.name;
    //       newItem["K-Dia"] = poItem.KDia.name;
    //       newItem["F-Dia"] = poItem.FDia.name;
    //     } else {
    //       newItem["Item"] = poItem.Accessory.aliasName;
    //       newItem["Accessory Item"] = poItem.Accessory.accessoryItem.name;
    //       newItem["Accessory Group"] = poItem.Accessory.accessoryItem.AccessoryGroup.name
    //     }
    //     newItem["Uom"] = poItem.Uom.name
    //     newItem["Color"] = poItem.Color.name
    //     newItem["Po Qty"] = poQty;
    //     newItem["Cancel Qty"] = cancelQty;
    //     newItem["Inward Qty"] = alreadyInwardedQty;
    //     newItem["Return Qty"] = alreadyReturnedQty;
    //     newItem["Balance Qty"] = balanceQty;
    //     newItem["Bill Qty"] = alreadyBillQty;
    //     newItem["Bal. Bill Qty"] = balBillQty;
    //     return newItem
    //   })

    //   setCurrentSelectedPoDetail("");
    // }, [isLoadingPoDetails, poDetails, isFetchingPoDetails, currentSelectedPoDetail])

    // useEffect(() => {
    //   if (allData?.data) {
    //     setExcelData(allData.data.map(item => {
    //       let newItem = {};
    //       newItem["Po. No"] = item?.docId;
    //       newItem["Po. Date"] = getDateFromDateTimeToDisplay(item?.createdAt);
    //       newItem["Supplier"] = item?.supplier?.aliasName;
    //       newItem["Po Type"] = item?.transType;
    //       newItem["Due Date"] = getDateFromDateTimeToDisplay(item?.dueDate);
    //       newItem["Po Qty"] = item?.poQty ? item?.poQty : 0;
    //       return newItem
    //     }))
    //   }
    // }, [allData, isAllDataLoading, isAllDataFetching])

    if (isLoading || isFetching) return <Loader />

    const isLoadingIndicator = isLoading || isFetching
    return (
        <>

            <div className="flex flex-col w-full h-[95%] overflow-auto">
                <div className="flex items-center justify-between w-full page-heading p-1 text-black">
                    <div className="heading text-center whitespace-nowrap">Stock Register</div>
                    <span className='flex gap-4'>

                        <div className=" sub-heading justify-center md:justify-start items-center w-72 flex">
                            <p className="text-white text-sm rounded-md m-1  border-none">Show Entries</p>
                            {/* <select value={dataPerPage}
                onChange={(e) => setDataPerPage(e.target.value)} className='h-6 w-40 border border-gray-500 rounded mr-9'>
                {showEntries.map((option, index) => <option key={index} value={option.value} >{option.show}</option>)}
              </select> */}
                        </div>
                    </span>
                </div>
                <>
                    <div
                        className="h-[500px] overflow-auto"
                    >
                        <table ref={tableRef} id="table-to-xls" className="table-fixed text-center w-full">
                            <thead className=" table-header">
                                <tr className='h-2'>
                                    <th
                                        className="  top-0 stick-bg w-10">
                                        S. no.
                                    </th>

                                    <th className="  top-0 stick-bg table-data">
                                        product name
                                    </th>
                                    <th className="  top-0 stick-bg table-data">
                                        UOM Type
                                    </th>
                                    <th className="  top-0 stick-bg table-data">
                                        <label>Stock Qty</label>

                                    </th>
                                </tr>
                            </thead>
                            {isLoadingIndicator ?
                                <tbody>
                                    <tr>
                                        <td>
                                            <Loader />
                                        </td>
                                    </tr>
                                </tbody>
                                :
                                <tbody className="">
                                    {purData.map((dataObj, index) => (
                                        <Fragment key={index}>{console.log(purData, 'pdata')}
                                            <tr
                                                className={` table-row py-1 border-2 border-gray-400 ${(currentOpenNumber === index) ? "border-2 border-black" : ""}`}
                                                onClick={() => {
                                                    if (index === currentOpenNumber) {
                                                        setCurrentOpenNumber("")
                                                    } else {
                                                        setCurrentOpenNumber(index)
                                                        setId(dataObj.id)
                                                    }
                                                }}>
                                                <td className='py-1 border-2 border-gray-400'> {(index + 1) + (currentPageNumber - 1)}</td>

                                                <td className='py-1 text-left border-2 border-gray-400'>{dataObj.name
                                                }</td>
                                                <td className='py-1 text-right border-2 border-gray-400'>{dataObj.uom}
                                                </td>
                                                <td className='py-1 text-right border-2 border-gray-400'>{dataObj.sum}
                                                </td>

                                            </tr>


                                        </Fragment>
                                    ))}
                                </tbody>

                            }
                        </table>

                    </div>
                </>
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    forcePage={pageNumberToReactPaginateIndex(currentPageNumber)}
                    pageCount={Math.ceil(totalCount)}
                    marginPagesDisplayed={1}
                    onPageChange={handleOnclick}
                    containerClassName={"flex justify-center m-2 gap-5 items-center"}
                    pageClassName={"border custom-circle text-center"}
                    disabledClassName={"p-1 bg-gray-200"}
                    previousLinkClassName={"border p-1 text-center"}
                    nextLinkClassName={"border p-1"}
                    activeClassName={"bg-blue-900 text-white px-2"} />
            </div >
        </>
    )
}

export default SalesRegister



