// maybe not will be used
export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'load':
      return action.payload
    case 'add':
      return [...state, { ...action.payload }]
    case 'remove':
      return state.filter(r=>r.id != action.payload)
    default:
      return state;
  }
}