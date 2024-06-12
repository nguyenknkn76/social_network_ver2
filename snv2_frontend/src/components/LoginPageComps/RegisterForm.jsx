import React from "react";

const RegisterForm = ({newName, newUsername, newPassword,newPassword2, handleRegister, newNameOnChange, newUsernameOnChange, newPasswordOnChange, newPassword2OnChange}) => {
    
    return(
        <div>
            <h2>RegisterForm</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="newname">name :</label>
                    <input type="text" id = "newname" value={newName} name="newname" onChange={newNameOnChange}/>
                </div>
                <div>
                    <label htmlFor="newusername">username: </label>
                    <input type="text" id = "newusername" value={newUsername} name="newusername" onChange={newUsernameOnChange}/>
                </div>
                <div>
                    <label htmlFor="newpassword">password: </label>
                    <input type="password" id = "newpassword" value={newPassword} name="newpassword" onChange={newPasswordOnChange}/>
                </div>
                <div>
                    <label htmlFor="newpassword">confirm password: </label>
                    <input type="password" id = "newpassword" value={newPassword2} name="newpassword" onChange={newPassword2OnChange}/>
                </div>
                <button type="submit">register</button>
            </form>
        </div>
    )
}

export default RegisterForm