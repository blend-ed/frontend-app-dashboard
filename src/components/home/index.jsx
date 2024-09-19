import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostData } from '../../redux/actions/postActions';

const Home = () => {
    const dispatch = useDispatch();

    const { postData, loading, error } = useSelector((state) => ({
        postData: state.post.data,
        loading: state.post.loading,
        error: state.post.error
    }));




    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <main>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Welcome to the Student Dashboard</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p className="text-center">This is a simple example of a student dashboard. It is built using React, React Router, and the Material Kit React template.</p>
                </div>
                <div className="col-md-12 d-flex flex-wrap">
                    {postData?.map((post, index) => (
                        <div key={index} className="card m-2" style={{ width: "250px" }}>
                            <div className="card-body">
                                <img src={post.thumbnail} alt="" />
                                <h6 className="card-title">{post.title}</h6>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}

export default Home;