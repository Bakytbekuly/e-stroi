import React from 'react'
import { useDispatch } from 'react-redux';
import { setNavigation } from '../store/slice/stroi';
// import svg from "../utils/no-content.svg"


const NotFoundPage = ({ message = "Error  404", navigationName }) => {
    console.log(navigationName);
    const dispatch = useDispatch()
    dispatch(setNavigation(navigationName))
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "#8A8A8A", marginTop: "50px" }}>{message}</h1>
            {/* <img src="svg.svg" style={{ marginLeft: "90px", marginRight: "200px" }} /> */}
        </div>
    )
}

export default NotFoundPage