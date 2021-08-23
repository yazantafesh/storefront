const initialState = {
  products: [
    { name: 'TV', description: 'You can watch movies on it', category: 'Electronics', inventoryCount: 1, price: 1000, image: 'https://images.philips.com/is/image/PhilipsConsumer/50PUT6604_56-IMS-en_AE?$jpglarge$&wid=960' },
    { name: 'Fridge', description: 'Store food in it', category: 'Electronics', inventoryCount: 2, price: 500, image: 'https://static.turbosquid.com/Preview/2019/12/06__15_21_23/Image0001.png652D7C88-6F72-4C38-9E53-1920F695966CLarge.jpg' },
    { name: 'Burger', description: 'Classic Burger', category: 'Food', inventoryCount: 3, price: 5, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' },
    { name: 'Pizza', description: 'Italian Pizza', category: 'Food', inventoryCount: 4, price: 10, image: 'https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg' }
  ],
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
        if (element.name == payload.name && element.inventoryCount > 0) {
          element.inventoryCount = element.inventoryCount - 1;
        }
        if (element.inventoryCount === 0) {
          element.description = 'OUT OF STOCK'
        }
        return element;
      });
      return {
        products: afterAdd,
        activeProducts: state.activeProducts
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