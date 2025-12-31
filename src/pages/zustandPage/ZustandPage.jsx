import {useZustand} from "./api/useZustand.js";
import {useEffect} from "react";
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

export const ZustandPage = () => {

    const { todo , error , getAllTodo , loading } = useZustand()

    useEffect(() => {
        getAllTodo()
    },[])

    console.log(todo)
    return (
        <>
        {loading &&  <Flex align="center" gap="middle">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        </Flex>}

            {!loading && todo.length === 0 && <p>тут пусто 😡</p>}


        <h1>ZustandPage</h1>
         <span style={{ fontSize: '20px'}}>всего задачь <strong>{todo.length}</strong></span>
            <ul>
                {todo.map((t) => <div  style={{ width: '500px' ,  border: '1px solid red' }} key={t?.id}>
                    <h3>todo:  {t.id}</h3>
                    <p>{t.title}</p>
                    <p>completed:  {t.completed ? '✅' : '❌'}</p>
                </div>)}
            </ul>
        </>
    )
}