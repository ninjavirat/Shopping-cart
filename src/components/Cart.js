import React, { useContext } from 'react';
import { AppContext } from '../context-provider/AppContext'

export function Cart() {
    const { user, setUser } = useContext(AppContext)
    console.log('pika data', user)

    function removeProduct(id) {

        setUser(prev => ({ ...prev, cart: prev.cart.filter(product => product.id !== id) }))


    }
    return (
        <div>
            {user.cart.map((product, index) => (
                <div>
                    <p>{product.cost}:{product.name}<button onClick={() => removeProduct(product.id)}>Remove Cart</button></p>

                </div>

            ))}

        </div>
    );
}
