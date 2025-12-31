import {useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer , toast} from "react-toastify";



export const Header = () => {

    const navigate = useNavigate();



    return (
        <>
        <ToastContainer/>

            <ul className="list">

                <li onClick={() => {
                    navigate('/redux')
                    const not = toast.success('welcome you in redux')
                }}>Redux</li>
                <li onClick={() => {
                    navigate('/')
                    const notyy = toast.success('welcome you in zustand')
                }}>Zustand</li>

            </ul>


        </>
    )
}