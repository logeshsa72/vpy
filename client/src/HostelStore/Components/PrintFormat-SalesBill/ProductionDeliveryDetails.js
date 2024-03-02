import React from 'react';
import { sumArray } from '../../../Utils/helper';

const ProductionDeliveryDetails = ({ readOnly, productionDeliveryDetails }) => {
  console.log(productionDeliveryDetails, "productionDeliveryDetails")
  return (
    <fieldset disabled={readOnly} className=''>
      <div className={`relative w-full overflow-y-auto p-2`}>
        <table className="table-data border border-gray-500 text-xs table-auto w-full">
          <thead className='border border-gray-500 top-0'>
            <tr className='border border-gray-500'>

              <th className="table-data  w-2 text-center p-0.5">S.no</th>
              <th className="table-data  w-32">Item & Description<span className="text-red-500 p-2"></span></th>
              <th className="table-data ">HSN/SAC<span className="text-red-500 p-2"></span></th>
              {productionDeliveryDetails.some(item => item?.simNo) && (
                <th className="table-data">simNo<span className="text-red-500 p-2"></span></th>
              )}
              {productionDeliveryDetails.some(item => item?.imeiNo) && (
                <th className="table-data">imeiNo<span className="text-red-500 p-2"></span></th>
              )}
              {productionDeliveryDetails.some(item => item?.vehicleNo) && (
                <th className="table-data">VehicleNo<span className="text-red-500 p-2"></span></th>
              )}

              <th className="table-data ">Qty<span className="text-red-500 p-2"></span></th>
              <th className="table-data ">Price<span className="text-red-500 p-2"></span></th>
              {productionDeliveryDetails.some(item => item.tax > 0) && (
                <th className="table-data w-28">CGST<span className="text-red-500 p-0.5"></span></th>
              )}
              {productionDeliveryDetails.some(item => item.tax > 0) && (
                <th className="table-data w-28">SGST<span className="text-red-500 p-0.5"></span></th>
              )}
              <th className="table-data w-24 p-0.5">Amount</th>


            </tr>
          </thead>
          <tbody className='overflow-y-auto table-data h-full w-full'>
            {productionDeliveryDetails.map((row, index) => (
              <tr key={index} className="w-full">
                <td className='table-data'>{index + 1}</td>
                <td className='table-data font-semibold'>
                  <div className='text-center'>{row.Product.name}</div>
                  <div className='text-xs font-thin overflow-hidden w-40 text-wrap'>
                    {row.Product.description ? row.Product.description : ""}
                  </div>
                </td>

                <td className='table-data p-2'>
                  {(!row.Product.hsn) ? "*" : (row.Product.hsn)}

                </td>
                {productionDeliveryDetails.some(item => item.simNo) && (<td className='table-data p-2'>{row.simNo}</td>)}
                {productionDeliveryDetails.some(item => item.imeiNo) && (<td className='table-data p-2'>{row.imeiNo}</td>)}
                {productionDeliveryDetails.some(item => item.vehicleNo) && (<td className='table-data p-2'>{row.vehicleNo}</td>)}

                <td className='table-data p-2'>
                  {row.qty}
                </td>
                <td className='table-data p-2'>
                  {parseFloat((!row.price) ? 0 : row.price).toFixed(3)}
                </td>

                {productionDeliveryDetails.some(item => item.tax > 0) && (<td className='table-data p-2 relative '>
                  <span className='absolute left-0 top-0'>{(!row.tax) ? 0 : ((((row.price * row.qty) * row.tax) / 100) / 2).toFixed(2)}</span>
                  <span className='absolute right-0 bottom-0'>{row.tax / 2}%</span>
                </td>)}
                {productionDeliveryDetails.some(item => item.tax > 0) && (<td className='table-data p-2 relative'>
                  <span className='absolute left-0 top-0'>{(!row.tax) ? 0 : ((((row.price * row.qty) * row.tax) / 100) / 2).toFixed(2)}</span>
                  <span className='absolute right-0 bottom-0'>{row.tax / 2}%</span>
                </td>)}

                <td className='table-data p-2'>
                  {row.tax ? (
                    ((row.price * row.qty) * row.tax / 100) + row.price * row.qty
                  ) : (
                    row.price * row.qty
                  )}
                </td>

              </tr>
            ))}
            <tr className='border  border-gray-500'>
              <th className='table-data text-center px-1  font-bold text-xs' colSpan={productionDeliveryDetails.some(item => item.tax > 0) ? 8 : 5}>TOTAL</th>
              {
                productionDeliveryDetails.some(item => item.tax > 0) ? (
                  <td className='px-1 h-8 text-right font-semibold'>{parseFloat(
                    productionDeliveryDetails.reduce(
                      (a, c) =>
                        a + (parseFloat(c.price) * parseFloat(c.qty) * parseFloat(c.tax) / 100) + (parseFloat(c.price) * parseFloat(c.qty)),
                      0
                    )
                  ).toFixed(3)}
                  </td>
                ) : (
                  <td className='px-1 h-8 text-right font-semibold'>
                    {parseFloat(
                      productionDeliveryDetails.reduce((a, c) => a + (parseFloat(c.price) * parseFloat(c.qty)), 0)
                    ).toFixed(3)}
                  </td>
                )
              }

            </tr>
          </tbody>
        </table>
      </div>
    </fieldset>
  )
}

export default ProductionDeliveryDetails