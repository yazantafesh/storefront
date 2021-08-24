const initialState = {
  products: [],
  activeProducts: []
}

export default function getItems(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'CHANGE_ACTIVE':
      const modified = state.products.filter(item => {
        return item.category === payload
      })
      return {
        products: state.products,
        activeProducts: modified
      }

    case 'DECREASE_INVENTORY':
      const afterAdd = state.products.map((element) => {
        if (element.name == payload.name && element.inStock > 0) {
          element.inStock = element.inStock - 1;
        }

        return element;
      });
      return {
        products: afterAdd,
        activeProducts: state.activeProducts
      }

    case 'LOAD_PRODUCTS':
      return {
        products: payload,
        activeProducts: state.activeProducts,
      }

    default:
      return state;
  }

}

export function getCategoryItems(name) {
  return {
    type: 'CHANGE_ACTIVE',
    payload: name
  }
}

export function reduceInventory(product) {
  return {
    type: 'DECREASE_INVENTORY',
    payload: product
  }
}