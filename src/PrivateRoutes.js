import { Outlet,Navigate } from "react-router-dom";
import {user} from './user'
import {auth} from'./authorization';
const PrivateRoutes=()=>{
console.log("im here so iam :"+auth.at(0).token);

return (auth.at(0).token==true?<Outlet/>:<Navigate to="/FormSignIn"/>);

}
export default PrivateRoutes;