import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@blend-ed/blendx-ui';
import { Icon } from '@blend-ed/blendx-ui/dist/KeyComponents';
import { deletePost, addPost } from '../../redux/actions/postActions';

function Progress() {
    const dispatch = useDispatch();

    const { postData, loading, error } = useSelector((state) => ({
        postData: state.post.data,
        loading: state.post.loading,
        error: state.post.error
    }));

    const handleDelete = (postId) => {
        dispatch(deletePost(postId));
    }

    const addNewPost = () => {
        const post = {
            "title": `post ${Math.floor(Math.random() * 1000000) + 1}`,
            "views": Math.floor(Math.random() * 1000) + 1,
            "thumbnail": `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/150/150`
        }
        dispatch(addPost(post));
    }



    if (loading) return <div>Loading...</div>;

    return (
        <main>
            <div className='d-flex justify-content-between'>
                <h4>posts</h4>
                <Button size="sm" onClick={() => addNewPost()}>new post</Button>

            </div>
            <div className="col-md-12 d-flex flex-wrap">
                {postData?.map((post, index) => (
                    <div key={index} className="card m-2" style={{ width: "250px" }}>
                        <div className="card-body">
                            <img src={post.thumbnail} alt="" />
                            <h6 className="card-title">{post.title}</h6>
                            <Icon icon="delete-bin" type='line' onClick={() => handleDelete(post.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Progress