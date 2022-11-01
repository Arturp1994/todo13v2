import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY' : 'd8167f84-ee50-4314-a87a-bf1eeed700cf'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/todo-lists', settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "React"
        axios.post('https://social-network.samuraijs.com/api/1.0/todo-lists',{title}, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = '27e9deea-1b52-442b-b3f8-9eb8b724376c'
        axios.delete(`https://social-network.samuraijs.com/api/1.0/todo-lists/${todoID}`, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = 'd898a33f-91e6-4106-a7c1-6e937c7798a1'
        const title = "NEST_JS"
        axios.put(`https://social-network.samuraijs.com/api/1.0/todo-lists/${todoID}`, {title},settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}