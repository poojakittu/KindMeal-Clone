import {Route,Routes} from "react-router-dom"
import Home from "../Page/Home"
import Help from "../Page/Help"
import Meal from "../Page/Meal"
import Recipes from "../Page/Recipes"
import Directory from "../Page/Directory"
import Articles from "../Page/Articles"
import Hotpics from "../Page/Hotpics"
import Signup1 from "../Page/Signup1"
import PrivateRoute from "../Page/PrivateRoute"
import Login from "../Page/Login"
const Allroutes=()=>{
    return(
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Help" element={<Help/>}></Route>
        <Route path="/Meal" element={<PrivateRoute><Meal/></PrivateRoute>}></Route>
        <Route path="/Recipes" element={<Recipes/>}></Route>
        <Route path="/Directory" element={<Directory/>}></Route>
        <Route path="/Articles" element={<Articles/>}></Route>
        <Route path="/Hotpics" element={<Hotpics/>}></Route>
        <Route path="/Signup1" element={<Signup1/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        </Routes>

    )
}
export default Allroutes