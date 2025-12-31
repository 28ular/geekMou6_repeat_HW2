import {useDispatch, useSelector} from "react-redux";
import {getAllTodo} from "./reduxslice.js";
import React, {useEffect} from "react";

export const ReduxPage = () => {

    const dispatch = useDispatch()

    const {data , loading , error} = useSelector(state => state.reduxApi)

    useEffect(() => {
        dispatch(getAllTodo())
    }, [])

    return (
        <>
            {loading && <p>loading... </p>}

            <h1>redux</h1>
            <ul>
                {data.map((t) =>
                    <div key={t?.id} style={{ width: '500px' ,  border: '1px solid red' }}>
                        <p>{t.title}</p>
                        <p>completed:  {t.completed ? '✅' : '❌'}</p>
                    </div>
                )}
            </ul>

        </>
    )
}