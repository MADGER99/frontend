import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const {currency,delivery_fee,getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div>
            <Title text1={'CART'} text2={'TOTALS'} />
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{getCartAmount()}.00 {currency}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{delivery_fee}.00 {currency}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00 {currency}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal
