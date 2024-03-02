import React, { useEffect } from 'react'
import { useGetStockByIdQuery } from '../../../redux/services/StockService';

const StockItem = ({ id, date, item, readOnly, productId, index, setPoReturnItems, poReturnItems, uomId }) => {

console.log(poReturnItems,'po retunr items');

  const { data: singleProduct, isFetching: isSingleProductFetching,
    isLoading: isSingleProductLoading } = useGetStockByIdQuery({
      params: {
        productId: productId,
        uomId,
        createdAt: id ? date : undefined
      }
    }, { skip: !(productId && uomId) });


  useEffect(() => {
    if(id) return
    const stockQty = singleProduct?.data?._sum?.qty
    setPoReturnItems(prev => {
     
      let newItem = structuredClone(prev)
      if (!newItem[index]) return prev
      newItem[index]["stockQty"] = stockQty
      return newItem
    })

  }, [singleProduct, isSingleProductFetching, isSingleProductLoading, productId, index, setPoReturnItems])


  return (
    <div>
      <input
        type="number"
        className="text-right rounded py-1 px-1 w-16 table-data-input"
        value={item.stockQty ? parseFloat(item?.stockQty).toFixed(2) : 0.00}
        disabled
      />
    </div>
  )
}

export default StockItem