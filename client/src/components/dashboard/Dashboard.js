import { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Spinner from "../layout/Spinner";

export const Dashboard = () => {
    const loading = useSelector(state => state.profile.loading);
    const profile = useSelector(state => state.profile.profile);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentProfile());
    }, [dispatch]);

    return loading && profile === null ? (
        <Spinner />
    ) : (
        <>
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
                <i className="fas fa-user" /> Welcome {user && user.name}
            </p>
            {profile !== null ? (
        <>
          <div className="my-2">
            <button className="btn btn-danger">
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
        </>
    );
};
