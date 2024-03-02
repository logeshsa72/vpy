import React from 'react'
import Address from './Address';
import RainDot from "../../../assets/visionGroup.webp"
import QRCode from "react-qr-code";
import secureLocalStorage from 'react-secure-storage';
import { getDateFromDateTimeToDisplay } from '../../../Utils/helper';
import { useGetSalesBillByIdQuery } from '../../../redux/services/SalesBillService';
import ProductionDeliveryDetails from './ProductionDeliveryDetails';
import { useGetProductByIdQuery } from '../../../redux/services/ProductMasterService';
require('number-to-text/converters/en-in');

export default function PrintFormatSalesBill({ innerRef, id }) {

  
  const branchId = secureLocalStorage.getItem(
    sessionStorage.getItem("sessionId") + "currentBranchId"
  )
  const userId = secureLocalStorage.getItem(
    sessionStorage.getItem("sessionId") + "userId"
  )
  const companyId = secureLocalStorage.getItem(
    sessionStorage.getItem("sessionId") + "userCompanyId"
  )
 console.log(id,"id")
  const { data: singleData, isFetching: isSingleFetching, isLoading: isSingleLoading } = useGetSalesBillByIdQuery(   id , { skip: !id });
  console.log(singleData,"sss")
  console.log(singleData?.data?.SalesBillItems,"singleData")


  // const { data: supplierDetails } = useGetSalesBillByIdQuery(singleData?.data?.supplierId ?? null, { skip: !singleData?.data?.supplierId });
  //  console.log(supplierDetails,"supplierDetails")

  const from = {
    aliasName: "VISION GROUPS",
    name: "VISION GROUPS",
    address: "No 470 1 st floor opp h.p petrol bunk pn road pushpa Theader",
    near: " Near Richman hotel",
    pinCode: "641603",
    mobile: "India",
    gstNo: "GSTIN 33HAPPS7637H1ZZ",
    PlaceofSupply: "Tamilnadu(33)",
  }

  const fromAddress = {
    aliasName: "VISION GROUPS",
    name: "VISION GROUPS",
    address: "No 470 1 st floor opp h.p petrol bunk pn road near Richman hotel pushpa",
    gstNo: "Theader tirupur 641603",
    panNo: "641603",
    mobile: "India",
    gstNo: "GSTIN 33HAPPS7637H1ZZ",
    PlaceofSupply: "Tamilnadu(33)",
  }
  
  if (!singleData) {
    return <div ref={innerRef}>No Data</div>;
  }
  return <div className="h-screen flex flex-col justify-between border-2 m-0 border-black" id='poPrint' ref={innerRef}>

      <div>
        <div className='flex'>
          <div className='w-1/4 flex items-center justify-center'>
          <img src={RainDot} alt='raindot-logo' className="h-12 w-12 pl-2" />

            <h1 className='font-bold text-md text-green-700'>{from.aliasName}</h1>
          </div>
          <div className='text-start p-2 w-full'>
            <div className=' w-full text-center p-1 '>
              <h1 className='font-bold text-green-700 text-md '>{from.name}</h1>
              <h1 className='text-xs'>{from.address}--</h1>
              <h1 className='text-xs'>{from.near}</h1>
              <h1 className='text-xs'>{from.pinCode}</h1>
              <h1 className='text-xs'>GSTNO: {from.gstNo}</h1>
              <h1 className='text-xs'>Place of Supply: {from.PlaceofSupply}</h1>
            </div>
          </div>
        </div>
        <div className='text-center p-1 flex items-center justify-center font-bold text-green-700 w-full'> 
        </div>
        <div className=''>
          <table className="text-xs border border-gray-500 w-full table-auto ">
            <tbody>
              <tr className='text-xs'>
                <td >Doc. Id: {singleData?.data?.docId}</td>
                <td> Del. Date : {getDateFromDateTimeToDisplay(singleData?.data?.createdAt)}</td>
                <td className='table-data px-14 py-1 w-1/6'>
                <QRCode value={singleData?.data?.docId} size={80} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      
        <ProductionDeliveryDetails productionDeliveryDetails={singleData?.data?.SalesBillItems || []} />
        <Address productionDeliveryDetails={singleData?.data?.SalesBillItems || []} />

      </div>
  
    </div>
  
}

