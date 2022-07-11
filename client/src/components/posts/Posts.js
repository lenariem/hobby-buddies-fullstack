import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post";
import { PostItem } from "./PostItem";
import Spinner from "../layout/Spinner";

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post.posts);
    console.log("posts" + posts)
    const loading = useSelector(state => state.post.loading);

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
            {loading && <Spinner />}
            <div className="posts">
                {posts.map(post => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </section>
    );
};
