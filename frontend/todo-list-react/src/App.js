import React from 'react';
import AddTodo from './components/addTodo'
import TodoFeed from './components/todoFeed'
import { useState, useEffect } from 'react'


export default function App() {
    let [shouldRefresh, setShouldRefresh] = useState(false)

    useEffect(() => {
        if (shouldRefresh === true) {
            setShouldRefresh(false)
        }
    }, [shouldRefresh])

    // console.log(`shouldRefresh: ${shouldRefresh}`)

    return <div>
        <AddTodo onSuccess={() => { setShouldRefresh(true) }} />
        < TodoFeed shouldRefresh={shouldRefresh} />
    </div>
}