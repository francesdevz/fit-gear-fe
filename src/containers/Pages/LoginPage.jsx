import "./pages.css"
import login_page_img from '../../constants/images/login_page_img.jpg'
import LoginAccount from "../../constants/components/LoginAccount"

const LoginPage = () => {
    return (
        <div className='login-container'>
            <LoginAccount/>
             <img src={login_page_img}/>
        </div>
    )
}   

export default LoginPage