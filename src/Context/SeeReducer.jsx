/* eslint-disable no-case-declarations */

function SeeReducer(state, action) {
  switch (action.type) {
    case "add":
      const itemIsExist = state.find((item) => item.id === action.products.id);
      if (itemIsExist) {
        return state;
      }
      return [...state, action.products];
    case "remove":
      return state.filter((p) => p.id !== action.id);
    default:
      state;
  }
}

export default SeeReducer