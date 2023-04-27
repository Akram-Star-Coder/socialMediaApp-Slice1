import "./contact.css";
import Header from '../../Components/Header/header';
import { ReactComponent as LoadingIcon } from "../groups/Infinity-0.8s-176px.svg"

const Contact = () => {
  return (
    <div>
      <Header />
      <div className='groupBody'>
        <span><em> CONTACT Page Under Develope By Akram &copy; 2023  </em></span>
        <LoadingIcon className='loadingINFINITY' />
      </div>
    </div>
  )
}

export default Contact