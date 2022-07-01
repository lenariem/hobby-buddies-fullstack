import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import { getProfileById } from "../../actions/profile";

export const Profile = () => {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile.profile);
    const auth = useSelector(state => state.auth);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProfileById(id));
    }, [dispatch, id]);

    return (
        <section className="container">
            {profile === null ? (
                <Spinner />
            ) : (
                <>
                    <Link to="/profiles" className="btn btn-light">
                        Back To Profiles
                    </Link>
                    {auth.isAuthenticated &&
                        auth.loading === false &&
                        auth.user._id === profile.user._id && (
                            <Link to="/edit-profile" className="btn btn-dark">
                                Edit Profile
                            </Link>
                        )}
                    <div className="profile-grid my-1">
                       
                        <div className="profile-exp bg-white p-2">
                            <h2 className="text-primary">Experience</h2>
                           
                               
                        </div>

                        <div className="profile-edu bg-white p-2">
                            <h2 className="text-primary">Education</h2>
                
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};


