import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

export const Dashboard = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentProfile());
    })
    
    
    return <div>Dashboard</div>;
};
