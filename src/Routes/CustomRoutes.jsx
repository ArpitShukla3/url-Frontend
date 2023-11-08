import { Route, Routes } from "react-router-dom";
import Navbar from "../HomePage/Navbar/Navbar";
import Login from "../Signing/Login/Login";
import ShortLink from "../HomePage/ShortLink/ShortLink";
import LinkList from "../HomePage/LinkList/LinkList";
import Signup from "../Signing/Signup/Signup";
function CustomRoutes()
{
    return (
        <Routes>
            <Route path="/" element={<><Navbar/><ShortLink/><LinkList/></>}/>
            <Route path="/login" element={<><Navbar/><Login/></>}/>
            <Route path={`/signup`} element={<><Navbar/>  <Signup/>  </>}/>
        </Routes>
    )
}
export default CustomRoutes;