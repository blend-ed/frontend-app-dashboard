export const fetchHomeData = () => async (dispatch) => {
    dispatch({ type: 'FETCH_HOME_DATA_REQUEST' });
    try {
        // Fetch data from the API (adjust the URL accordingly)
        const response = await fetch('http://localhost:3030/posts');
        const data = await response.json();
        dispatch({ type: 'FETCH_HOME_DATA_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_HOME_DATA_FAILURE', payload: error.message });
    }
};
