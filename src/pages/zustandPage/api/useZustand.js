import {create} from "zustand";
import axios from "axios";


export const useZustand = create((set) => ({

    todo: [],
    loading: false,
    error: null,

    getAllTodo: async () => {
        try {
            set({loading: true, error: null});
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos")
            set({loading: false, todo: data , error: null})
        } catch {

            set({loading: false, error: 'Error fetching data'})

        }
    }

}))