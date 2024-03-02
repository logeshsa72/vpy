import React, { useEffect, useState } from 'react';
import { useGetProductQuery } from '../../../redux/services/ProductMasterService';
import { useGetProductCategoryQuery } from '../../../redux/services/ProductCategoryServices';
import { useGetPartyQuery } from '../../../redux/services/PartyMasterService';
import { useGetProductBrandQuery } from '../../../redux/services/ProductBrandService';
import { Loader } from '../../../Basic/components';
import secureLocalStorage from 'react-secure-storage';
import { findFromList } from '../../../Utils/helper';

const PoBillItems = ({ id, readOnly, setPoBillItems, poBillItems, isTaxBill }) => {
    console.log(isTaxBill, "isTaxBill23414")

    const params = { companyId: secureLocalStorage.getItem(sessionStorage.getItem("sessionId") + "userCompanyId") }
    const { data: productBrandList } =
        useGetProductBrandQuery({ params });

    const { data: productCategoryList } =
        useGetProductCategoryQuery({ params });

    const { data: productList } = useGetProductQuery({ params });

    function handleInputChange(value, index, field) {


        const newBlend = structuredClone(poBillItems);
        newBlend[index][field] = value;

        setPoBillItems(newBlend);
    };

    useEffect(() => {
        if (poBillItems.length >= 10) return
        setPoBillItems(prev => {
            let newArray = Array.from({ length: 10 - prev.length }, i => {
                return { productCategoryId: "", productBrandId: "", productId: "", stockQty: "0", qty: "0", price: "0.00", amount: "0.000" }
            })
            return [...prev, ...newArray]
        }
        )
    }, [setPoBillItems, poBillItems])
    function getTotal(field1, field2, field3) {
        const total = poBillItems.reduce((accumulator, current) => {

            return accumulator + parseFloat(current[field1] && current[field2] && current[field3] ? (current[field1] * current[field2]) + ((current[field1] * current[field2]) * current[field3]) / 100 : 0)
        }, 0)
        return parseFloat(total)
    }
    function getTotal1(field1, field2) {
        const total = poBillItems.reduce((accumulator, current) => {

            return accumulator + parseFloat(current[field1] && current[field2] ? (current[field1] * current[field2]) :0)
        }, 0)
        return parseFloat(total)
    }



    if (!productBrandList || !productCategoryList || !productList) return <Loader />

    return (
        <>{console.log(poBillItems, 'pobill')}

            <div className={` relative w-full overflow-y-auto py-1`}>
                <table className=" border border-gray-500 text-xs table-auto  w-full">
                    <thead className='bg-teal-100 top-0 border-b border-gray-500'>
                        <tr className=''>
                            <th className="table-data  w-2 text-center p-0.5">S.no</th>



                            <th className="table-data ">Product Name<span className="text-red-500 p-1">*</span></th>
                            <th className="table-data ">Vehicle No<span className="text-red-500 p-1">*</span></th>
                            <th className="table-data ">IMEI.No<span className="text-red-500 p-1">*</span></th>
                            <th className="table-data ">SIM.No<span className="text-red-500 p-1">*</span></th>




                            <th className="table-data  w-28">Qty<span className="text-red-500 p-0.5">*</span></th>
                            <th className="table-data  w-32">Price<span className="text-red-500 p-0.5">*</span></th>
                            {isTaxBill ? <th className="table-data w-24 p-0.5">Tax</th> : null}
                            {isTaxBill ? <th className="table-data w-24 p-0.5">Tax Rate</th> : null}
                            <th className="table-data  w-24 p-0.5">Tax Amount</th>


                        </tr>
                    </thead>
                    <tbody className='overflow-y-auto h-full w-full'>


                        {(poBillItems ? poBillItems : []).map((item, index) =>

                            <tr key={index} className="w-full table-row">
                                <td className="table-data w-2 text-left px-1 py-1">
                                    {index + 1}
                                </td>


                                <td className='table-data'>
                                    <select
                                        onKeyDown={e => { if (e.key === "Delete") { handleInputChange("", index, "productId") } }}
                                        className='text-left w-full rounded py-1 table-data-input'
                                        value={item.productId}
                                        onChange={(e) => handleInputChange(e.target.value, index, "productId")}
                                        onBlur={(e) => {
                                            handleInputChange((e.target.value), index, "productId")
                                        }
                                        }
                                    >
                                        <option hidden>
                                        </option>
                                        {(id ? productList.data : productList.data.filter(item => item.active)).map((brand) =>
                                            <option value={brand.id} key={brand.id}>
                                                {brand.name}
                                            </option>)}
                                    </select>
                                </td>
                                <td className='table-data'>
                                    <input
                                        type="text"
                                        className="text-right w-full rounded py-1 px-1  table-data-input"

                                        value={(!item.vehicleNo) ? "" : item.vehicleNo}
                                        disabled={readOnly}
                                        onChange={(e) =>
                                            handleInputChange(e.target.value, index, "vehicleNo")
                                        }
                                        onBlur={(e) => {

                                            handleInputChange(e.target.value, index, "vehicleNo");

                                        }
                                        }
                                    />
                                </td>
                                <td className='table-data'>
                                    <input
                                        type="text"
                                        className="text-right w-full rounded py-1 px-1  table-data-input"

                                        value={(!item.imeiNo) ? "" : item.imeiNo}
                                        disabled={readOnly}
                                        onChange={(e) =>
                                            handleInputChange(e.target.value, index, "imeiNo")
                                        }
                                        onBlur={(e) => {

                                            handleInputChange(e.target.value, index, "imeiNo");

                                        }
                                        }
                                    />
                                </td>
                                <td className='table-data'>
                                    <input
                                        type="text"
                                        className="text-right w-full rounded py-1 px-1  table-data-input"

                                        value={(!item.simNo) ? "" : item.simNo}
                                        disabled={readOnly}
                                        onChange={(e) =>
                                            handleInputChange(e.target.value, index, "simNo")
                                        }
                                        onBlur={(e) => {

                                            handleInputChange(e.target.value, index, "simNo");

                                        }
                                        }
                                    />
                                </td>


                                <td className='table-data'>
                                    <input
                                        type="number"
                                        className="text-right rounded py-1 px-1  table-data-input"

                                        value={(!item.qty) ? 0 : item.qty}
                                        disabled={readOnly}
                                        onChange={(e) =>
                                            handleInputChange(e.target.value, index, "qty")
                                        }
                                        onBlur={(e) => {

                                            handleInputChange(parseFloat(e.target.value).toFixed(2), index, "qty");

                                        }
                                        }
                                    />
                                </td>
                                <td className='table-data'>

                                    <input
                                        type="number"
                                        className="text-right rounded py-1 px-1  table-data-input"

                                        value={item.price ? item.price : 0.000}
                                        disabled={readOnly}
                                        onChange={(e) =>
                                            handleInputChange(e.target.value, index, "price")
                                        }
                                        onBlur={(e) => {

                                            handleInputChange(parseFloat(e.target.value).toFixed(3), index, "price");

                                        }
                                        }
                                    />
                                </td>
                                {isTaxBill ? (<td className='table-data'>
                                    <input
                                        type="number"
                                        className="text-right rounded py-1 px-1 table-data-input"
                                        value={(item.tax !== 0) ? item.tax : 0}
                                        disabled={readOnly}
                                        onChange={(e) => handleInputChange(e.target.value ? (e.target.value) : 0, index, "tax")}

                                        onBlur={(e) => {
                                            handleInputChange(parseFloat(e.target.value), index, "tax");
                                        }}
                                    />
                                </td>) : null}

                                {isTaxBill ? (<td className='table-data'>
                                    <input
                                        type="number"
                                        className="text-right rounded py-1 px-1  table-data-input"

                                        value={((parseFloat((parseFloat(item.qty) * parseFloat(item.price)).toFixed(2)) * parseFloat(item.tax)) / 100).toFixed(2)}
                                        disabled={readOnly}

                                    />
                                </td>) : null}

                                {isTaxBill ? (<td className='table-data'>
                                    <input
                                        type="number"
                                        className="text-right rounded py-1 px-1  table-data-input"

                                        value={(parseFloat((parseFloat(item.qty) * parseFloat(item.price)).toFixed(2)) + (parseFloat((parseFloat(item.qty) * parseFloat(item.price))) * parseFloat(item.tax)) / 100).toFixed(2)}
                                        disabled={readOnly}

                                    />
                                </td>
                                ) : <td className='table-data'>
                                    <input
                                        type="number"
                                        className="text-right rounded py-1 px-1  table-data-input"

                                        value={parseFloat((parseFloat(item.qty) * parseFloat(item.price)).toFixed(2))}
                                        disabled={readOnly}

                                    />
                                </td>}



                            </tr>
                        )}
                        <tr className='bg-teal-100 w-full border border-gray-400 h-7 font-bold'>
                            <td className="table-data text-center w-10 font-bold" colSpan={isTaxBill ? 9 : 7}>  
                                Total
                            </td>
                            <td className="table-data w-10 text-right pr-1">
                                {isTaxBill ? getTotal("qty", "price", "tax").toFixed(2) : getTotal1("qty", "price").toFixed(2)}
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PoBillItems