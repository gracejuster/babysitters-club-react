
const Search = (state = {parents: {}}, action) => {
  switch(action.type){
    case 'SEARCH_PARENTS':
      return Object.assign({}, state, {
        parents: action.payload.data

      })
    default:
      return state
  }
}

export default Search
