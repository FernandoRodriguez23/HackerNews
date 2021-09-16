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
        // case "REMOVE_ARTICLE" :  return {
        //     ...state,
        //     hits: state.hits.filter((hit) => hit.objectID !== action.payload),
        // }
        case "HANDLE_PAGE" :  {
            if(action.payload === 'inc') {
                let newPage = state.page +1;
                if(newPage + 1 > state.nbPages){
                    newPage = 0;
                }
                return {...state, page: newPage}
            } else if (action.payload === 'dec') {
                let newPage = state.page -1;
                if(newPage < 0){
                    newPage = state.nbPages -1;
                }
                return {...state, page: newPage}
            }
        }
        // case "NEXT_PAGE" : return {
        //     ...state,
        //     page: page == nbPages ? page++ : page == nbPages
        //     // const nextPage = (page, nbPages) => {
        //     //     if(page < nbPages){
        //     //         page++;
        //     //     }
        //     // }
        //     // return {...state, nextPage}
        // }
        // case "PREV_PAGE" : {
        //     const prevPage = (page) => {
        //         if(page !== 0) {
        //             page--;
        //         }
        //     }
        //     return {...state, prevPage}
        // }
        default:
            throw new Error(`No Matching ${action.type} action type`);
    }
}