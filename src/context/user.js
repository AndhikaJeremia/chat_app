import axios from 'axios'
import React from 'react'

const Context = React.createContext()

const userContext = ({children}) => {
    const [user, setUser] = React.useState({
        username: '',
        email: '',
        _id: null
    })

    const LoginFun = (username, password) => {
        axios.post('localhost:2000/login', {username, password})

    }

    return(
        
            <Context.Provider>
                {children}
            </Context.Provider>
    )
}
