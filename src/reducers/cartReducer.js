const DICTIONARY = {
  CART_INIT_STORED: 'CART_INIT_STORED',
  CART_ADD_OR_REST: 'CART_ADD_OR_REST',
  CART_REMOVE: 'CART_REMOVE',
  CART_UPDATE: 'CART_UPDATE',
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case DICTIONARY.CART_INIT_STORED: {
      return payload
    }
    case DICTIONARY.CART_ADD_OR_REST: {
      const { product, isAdd } = payload
      const { id } = product
      const productInCartIndex = state.findIndex((item) => item.id === id)
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)

        if (isAdd) newState[productInCartIndex].quantity += 1
        else newState[productInCartIndex].quantity -= 1

        // SI LA CANTIDA ES CERO QUE LO ELIMINE DEL CARRITO
        if (newState[productInCartIndex].quantity <= 0)
          return newState.filter((item, index) => index !== productInCartIndex)

        return newState
      }

      return [
        ...state,
        {
          ...product,
          quantity: 1,
        },
      ]
    }
    case DICTIONARY.CART_REMOVE: {
      const { id } = payload
      return state.filter((item) => item.id !== id)
    }
    default:
      return state
  }
}

export { reducer }
