const initialState = {
    loading: false,
    data: null,
    error: null
}

function reducer(state = initialState, action){
    switch(action.type) {
        case 'FETCH_STARTED':
            return {...state, loading: true}
        case 'FETCH_SUCCESS':
            return {...state, data: action.payload, loading: false, error: null}
        case 'FETCH_ERROR':
            return {...state, data: null, loading: false, error: action.payload}
        default:
            return state;
    }
}

const thunk = (store) => (next) => (action) => {
    if(typeof action === 'function') {
        return action(store.dispatch);
    }
    console.log(action)
    return next(action);
}

const { compose, applyMiddleware } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = Redux.createStore(reducer, enhancer);

function fetchUrl( url) { 
    return async (dispatch) => {
        dispatch({type: 'FETCH_STARTED'})
        try {
            const data = await fetch(url).then(r => r.json());
            dispatch({type: 'FETCH_SUCCESS', payload: data})
        } catch (error) {
            dispatch({type: 'FETCH_ERROR', payload: error.message})
        }
    }
}

store.dispatch(fetchUrl('https://dogsapi.origamid.dev/json/api/photo'))