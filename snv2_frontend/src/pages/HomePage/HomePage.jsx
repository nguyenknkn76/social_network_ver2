import { Link } from 'react-router-dom'

const HomePage = () =>{
    return(
        <div>
            <div>
                <button><Link to="/login">Login</Link></button>
            </div>
            <div>
                <button><Link to="/userhomepage">UserHomePage</Link></button>
            </div>
        </div>
    )
}
export default HomePage