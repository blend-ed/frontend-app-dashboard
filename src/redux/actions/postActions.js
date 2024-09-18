// Action to fetch posts
export const fetchPostData = (refetch = false) => async (dispatch, getState) => {
    const { post } = getState();
    console.log('state:', getState());

    // Check if data already exists in the Redux store
    if (refetch === false && post.data && post.data.length > 0) {
        console.log('Data already exists in the store');
        return; // Data is already cached, no need to fetch again
    }

    dispatch({ type: 'FETCH_POST_DATA_REQUEST' });
    try {
        // Fetch data from the API (adjust the URL accordingly)
        const response = await fetch('http://localhost:3030/posts');
        const data = await response.json();
        dispatch({ type: 'FETCH_POST_DATA_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_POST_DATA_FAILURE', payload: error.message });
    }
};

// Action to delete a post by ID
export const deletePost = (postId) => async (dispatch) => {
    dispatch({ type: 'DELETE_POST_REQUEST', payload: postId });

    try {
        // Make the DELETE request to the API
        const response = await fetch(`http://localhost:3030/posts/${postId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Dispatch success action and update the state by removing the post
            dispatch({ type: 'DELETE_POST_SUCCESS', payload: postId });
        } else {
            throw new Error('Failed to delete post');
        }
    } catch (error) {
        // Dispatch failure action with error message
        dispatch({ type: 'DELETE_POST_FAILURE', payload: error.message });
    }
};


export const addPost = (post) => async (dispatch) => {
    dispatch({ type: 'ADD_POST_REQUEST' });

    try {
        // Make the POST request to the API
        const response = await fetch('http://localhost:3030/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });

        if (response.ok) {
            // Dispatch success action and update the state by adding the new post
            const data = await response.json();
            dispatch({ type: 'ADD_POST_SUCCESS', payload: data });
        } else {
            throw new Error('Failed to add post');
        }
    } catch (error) {
        // Dispatch failure action with error message
        dispatch({ type: 'ADD_POST_FAILURE', payload: error.message });
    }
}