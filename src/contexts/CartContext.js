'use client'

import React, { useEffect, useReducer } from 'react'
import { reducer } from '@/reducers/cartReducer'

const Context = React.createContext({})
const KEY_LOCALSTORAGE = 'CART'
const INITIAL_STATE = []

export default function CartContext({ children }) {
  const [products, dispatch] = useReducer(reducer, INITIAL_STATE)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE))) {
      const productsInStorage = JSON.parse(
        localStorage.getItem(KEY_LOCALSTORAGE)
      )
      initStorage(productsInStorage)
    }
  }, [])

  useEffect(() => {
    if (products !== INITIAL_STATE) {
      localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(products))
    }
  }, [products])

  const initStorage = (products) => {
    dispatch({
      type: 'CART_INIT_STORED',
      payload: products,
    })
  }

  const addOrRestToCart = ({ product, isAdd }) => {
    dispatch({
      type: 'CART_ADD_OR_REST',
      payload: { product, isAdd },
    })
  }

  const removeOfCart = ({ idProduct }) => {
    dispatch({
      type: 'CART_REMOVE',
      payload: {
        id: idProduct,
      },
    })
  }

  const cleanCart = () => {
    dispatch({
      type: 'CART_CLEAN',
      payload: {},
    })
  }

  return (
    <Context.Provider
      value={{ products, addOrRestToCart, removeOfCart, cleanCart }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context as CartContext }
