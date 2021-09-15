export const reducer = (state, action) => {
    switch (action.type){
        case "SET_LOADING": return {
            ...state,
            loading: true
        }
        case "SET_HITS": return {
            ...state,
            loading: false,
            hits: action.payload.hits,
            nbPages: action.payload.nbPages,
        }
        case "HANDLE_SEARCH" : return {
            ...state,
            page: 0,
            query: action.payload,
        }
        case "REMOVE_ARTICLE" :  {
            const newHits = state.hits.filter((hit) => hit.objectID !== action.payload);
            return {...state, newHits}
        }
        default:
            throw new Error(`No Matching ${action.type} action type`);
    }
}