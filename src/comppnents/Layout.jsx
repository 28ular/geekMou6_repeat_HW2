import {Outlet} from "react-router-dom";
import {Header} from "./Header.jsx";

export const Layout = () => {
    return (
        <>
            <Header/>

            <div className="main">
                <Outlet/>
            </div>

            <footer>made by ular</footer>


        </>
    )
}