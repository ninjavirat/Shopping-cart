import React, { useContext, useState } from 'react'
import { AppContext } from '../context-provider/AppContext'


export const Products = () => {
    const [cardText, setCardText] = useState('Add Cart')
    const { products, setUser } = useContext(AppContext)



    function handleClick(product) {
        setUser(prev => ({ ...prev, cart: [...prev.cart, product] }))
    }
    return (
        <div>
            {products.map((product, index) => (
                <div>
                    <p>{product.cost}:{product.name}<button onClick={() => handleClick(product)}>{cardText}</button></p>

                </div>

            ))}
        </div>
    );
}