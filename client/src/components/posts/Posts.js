import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post";
import Spinner from "../layout/Spinner";

export const Posts = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.profile.loading);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <section className="container">
            <h1 className="large text-primary">Posts</h1>
            <p className="lead">
                <i className="fas fa-user" /> Welcome to the community
            </p>
            <form />
            <div className="posts">Posts</div>
        </section>
    );
};
