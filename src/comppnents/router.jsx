import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./Layout.jsx";
import {ZustandPage} from "../pages/zustandPage/ZustandPage.jsx";
import {ReduxPage} from "../pages/reduxPage/ReduxPage.jsx";

export const router = createBrowserRouter([{
    element: <Layout/>,
    path: '/',
    children: [
        {index: true , element: <ZustandPage/> },
        {path: '/redux' , element: <ReduxPage/> },
    ]
}])