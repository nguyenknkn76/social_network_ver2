import React from "react"
const LoginForm = ({username, password, handleLogin, usernameOnChange, passwordOnChange}) => {
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">username: </label>
                    <input type="text" id = "username" value={username} name="username" onChange={usernameOnChange}/>
                </div>
                <div>
                    <label htmlFor="password">password: </label>
                    <input type="password" id = "password" value={password} name="password" onChange={passwordOnChange}/>
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}
export default LoginForm