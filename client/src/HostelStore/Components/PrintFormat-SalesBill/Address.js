import React from 'react'

const Address = ({ productionDeliveryDetails }) => {
  const ShippingCharge = { pay: "50" }

  return <></>
    
{/* <div className="p-4">
  <div className="bg-white rounded-lg shadow-md p-6 absolute right-0 m-5">

    {productionDeliveryDetails.map((row, index) => (
      <div key={index} className="text-sm mb-4">
        <div className="font-bold mb-2">Sub Total: <span className='pl-3'>{parseFloat((!row.price) ? 0 : row.price).toFixed(3)}</span></div>

        <div className="flex items-center">
          <div className="w-1/2">CGST{row.tax}%):(</div>
          <span className='pl-3'>{(!row.tax) ? 0 : (row.price * row.tax) / 100}</span>
        </div>
        
        <div className="flex items-center">
          <div className="w-1/2">SGST({row.tax}%):</div>
          <span className='pl-3'>{(!row.tax) ? 0 : (row.price * row.tax) / 100}</span>
        </div>

        <div className="font-bold mt-4">Shipping Charge: <span className='pl-3'>{ShippingCharge.pay}</span></div>

        <div className="font-bold mt-4">Total: <span className='pl-3'>{((parseFloat((!row.price) ? 0 : row.price) + ((!row.tax) ? 0 : (row.price * row.tax) / 100))+50).toFixed(2)}</span></div>

        <div className="font-bold mt-4">Payment Made: <span className='pl-3'>{""}</span></div>
      </div>
    ))}

  </div>
</div> */}

  



}


export default Address