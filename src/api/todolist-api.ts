import axios from 'axios'
import {CreateTodolist, DeleteTodolist, GetTodolists} from "../stories/todolist-api.stories";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd8167f84-ee50-4314-a87a-bf1eeed700cf',
    },
})

export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put<TodolistType[]>(
            `todo-lists/${todolistId}`,
            {title: title},

        )
        return promise
    },
    deleteTodolist(todoID: string) {
        const promise = instance.delete<TodolistType[]>(
            `todo-lists/${todoID}`,
        )
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<TodolistType[]>('todo-lists', {title})
        return promise
    },
    getTodolists() {
        const promise = instance.get<TodolistType[]>('todo-lists')
        return promise
    }
}

type TodolistType = {
    id: string
    title: string
    addedData: string
    order: number
}