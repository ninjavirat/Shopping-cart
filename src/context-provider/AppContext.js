import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

const fetchedUser = {
    name: 'Pika',
    cart: []
}
const fetchedProducts = [
    {
        id: 1,
        name: 'Mouse',
        cost: 10000
    },
    {
        id: 2,
        name: 'Book',
        cost: 20000
    },
    {
        id: 3,
        name: 'Keyboard',
        cost: 30000
    }
]

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', cart: [] })
    const [products, setProducts] = useState([])

    useEffect(() => {
        // fetch logics
        setUser(prev => ({ ...prev, ...fetchedUser }))
        setProducts(prev => ([...prev, ...fetchedProducts]))
    }, [])


    return <AppContext.Provider value={{
        user,
        products,
        setUser
    }}>{children}</AppContext.Provider>
}
