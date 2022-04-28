// import { useContext } from "react"
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext"


// export const PrivetRoute = ({ children }) => {
//     const { token } = useContext(AuthContext);

//     if(!token) {
//         return <Navigate to={"/login"} />;
//     }

//     return children;
// }