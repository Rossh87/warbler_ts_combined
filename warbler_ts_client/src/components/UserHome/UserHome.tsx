import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";

// Action creators
import { fetchUserAction } from "../../store/user/userActions";

const UserHome: FunctionComponent = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserAction());
    }, []);

    return <p>Here's User page!</p>;
};

export default UserHome;
