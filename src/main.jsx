import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider} from "react-router-dom";
import {router} from "./comppnents/router.jsx";
import {Provider} from "react-redux";
import {store} from "./comppnents/store.js";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
    </Provider>,
)
