'use client'

import { useId } from 'react'
// import ProductsInCart from '../products/ProductsInCart'
import { useCart } from '@/hooks/useCart'
import { useAuth } from '@/hooks/useAuth'
import ButtonLogout from '../button/ButtonLogout'
import Button from '@/components/button'

export default function Cart() {
  const cartCheckboxId = useId()
  const { products } = useCart()
  const { isLogged } = useAuth()
  const lengthProducts = products.length || 0

  if (isLogged) {
    return (
      <div className="d-flex md-gap">
        <Button label={'Home'} location="/account" />
        <ButtonLogout />
      </div>
    )
  }

  return (
    <>
      <label className="cart-modal__button" htmlFor={cartCheckboxId}>
        <span className="cart-modal__button-count">{lengthProducts}</span>
        <img src="/storage/shopping-cart.svg" alt="cart" />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart-modal">
        <div className="cart-modal__header">
          <h2 className="h4 cart-modal__title">Tu carrito</h2>
          <label
            className="cart-modal__button-close"
            htmlFor={cartCheckboxId}
          ></label>
        </div>
        {/* <ProductsInCart products={products} addToCart={addToCart} /> */}
      </aside>

      <style jsx>{`
        .cart-modal__button {
          padding: 0.5rem 1rem;
          position: relative;
          cursor: pointer;
          margin: 0;
        }
        .cart-modal__button-count {
          --size-count: 17px;
          width: var(--size-count);
          height: var(--size-count);
          position: absolute;
          top: 3px;
          right: 7px;
          border-radius: 50%;
          background: var(--dark);
          color: var(--white);
          display: grid;
          place-items: center;
          font-size: 8px;
        }
        .cart-modal {
          background: var(--white);
          padding: 1.5em;
          position: fixed;
          top: 0px;
          right: 0px;
          max-width: 600px;
          width: 100%;
          height: 100vh;
          display: none;
          overflow: scroll;
          box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.3);
        }

        .cart-modal img {
          aspect-ratio: 16/9;
          width: 100%;
        }

        .cart-modal li {
          border-bottom: 1px solid #444;
          padding-bottom: 16px;
        }

        .cart-modal footer {
          display: flex;
          gap: 8px;
          justify-content: center;
          align-items: center;
        }
        .cart-modal__button ~ input:checked ~ .cart-modal {
          display: block;
        }

        .cart-modal__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--primary);
          padding-bottom: 1em;
        }

        .cart-modal__title {
          color: var(--secondary);
        }

        .cart-modal__button-close {
          position: relative;
          font-size: 10px;
          width: 30px;
          height: 30px;
        }

        .cart-modal__button-close:before {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          content: 'x';
          font-size: 20px;
          line-height: 20px;
          color: var(--secondary);
          background: var(--white);
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
          display: grid;
          border-radius: 50%;
          place-items: center;
          cursor: pointer;
          transition: 0.3s ease-in-out all;
        }
        .cart-modal__button-close:hover:before {
          color: var(--white);
          background: var(--secondary);
        }
      `}</style>
    </>
  )
}
