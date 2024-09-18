import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/reducers/counterReducer';
import { fetchHomeData } from '../../redux/actions/homeActions';

const Home = () => {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const homeData = useSelector((state) => state.home.data);
    const loading = useSelector((state) => state.home.loading);
    const error = useSelector((state) => state.home.error);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    useEffect(() => {
        console.log(homeData);
    }, [homeData]);

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
                <div className="col-md-12">
                    <h5>redux counter:{count}</h5>
                    <button onClick={() => dispatch(increment())}>Increment</button>
                    <button onClick={() => dispatch(decrement())}>Decrement</button>
                </div>

            </div>
        </main>
    )
}

export default Home;