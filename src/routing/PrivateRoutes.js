import { Navigate } from "react-router-dom";
export const PrivateRoutes = ({children})=>{
    const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"))
    return getTokenFromLocalStorage?.token!==null ? children :(
        <Navigate to='/login' replace={true}></Navigate>
    )
}