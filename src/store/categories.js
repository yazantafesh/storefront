const initialState = {
  
  categories: [{ name: 'electronics', description: 'Here you can find a variety of our electronic devices', displayName: 'ELECTRONICS' }, { name: 'mobile', description: 'Here you can find all kinds of mobile phones', displayName: 'MOBILE PHONES' }],
  activeCategory: {},
}

export default function categoriesReducer(state = initialState, action) {

  const { payload, type } = action;

  switch (type) {
    case 'CHANGE_ACTIVE':
      let modified = {};

      state.categories.forEach(item => {
        if (item.name === payload) {
          modified = item;
        }
      });
      return {
        categories: state.categories,
        activeCategory: modified
      };
    default:
      return state;
  }
}


export function changeActive(name) {
  return {
    type: 'CHANGE_ACTIVE',
    payload: name
  }
}


