import React, { useEffect } from 'react'
import { useGetStockByIdQuery } from '../../../redux/services/StockService';

const StockItem = ({ id, date, item, readOnly, productId, index, setPoReturnItems, poReturnItems, uomId }) => {



  const { data: singleProduct, isFetching: isSingleProductFetching, isLoading: isSingleProductLoading } = useGetStockByIdQuery({
    params: {
      productId: productId,
      uomId,
      createdAt: id ? date : undefined
    }
  }, { skip: !productId });



  useEffect(() => {
    const stockQty = singleProduct?.data?._sum?.qty
    setPoReturnItems(prev => {
      let newItem = structuredClone(prev)
      if (!newItem[index]) return prev
      newItem[index]["stockQty"] = stockQty
      return newItem
    })

  }, [singleProduct, isSingleProductFetching, isSingleProductLoading, productId])


  return (
    <div>
      {item.stockQty ? parseFloat(item?.stockQty).toFixed(2) : 0.00}


    </div>
  )
}

export default StockItem