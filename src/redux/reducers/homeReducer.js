const initialState = {
    data: null,
    loading: false,
    error: null,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_HOME_DATA_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_HOME_DATA_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_HOME_DATA_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default homeReducer;
