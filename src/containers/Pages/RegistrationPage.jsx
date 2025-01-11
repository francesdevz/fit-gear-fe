import RegisterAccount from "../../constants/components/RegisterAccount"
import registarion_page_img from '../../constants/utils/images/registarion_page_img.jpg'

const RegistrationPage = () => {
    return (
       <div className='login-container'>
            <RegisterAccount/>
            <img src={registarion_page_img}/>
        </div>
    )
}
export default RegistrationPage