const initialState = {
    data: [],
    loading: false,
    error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POST_DATA_REQUEST':
            return { ...state, loading: true, error: null };
        case 'FETCH_POST_DATA_SUCCESS':
            return { ...state, loading: false, data: action.payload };
        case 'FETCH_POST_DATA_FAILURE':
            return { ...state, loading: false, error: action.payload };

        case 'DELETE_POST_REQUEST':
            return { ...state, loading: true };
        case 'DELETE_POST_SUCCESS':
            return {
                ...state,
                loading: false,
                data: state.data.filter((post) => post.id !== action.payload),
            };
        case 'DELETE_POST_FAILURE':
            return { ...state, loading: false, error: action.payload };

        case 'ADD_POST_REQUEST':
            return { ...state, loading: true };
        case 'ADD_POST_SUCCESS':
            return { ...state, loading: false, data: [...state.data, action.payload] };
        case 'ADD_POST_FAILURE':
            return { ...state, loading: false, error: action.payload };


        default:
            return state;
    }
};

export default postReducer;