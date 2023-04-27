import './groups.css';
import Header from '../../Components/Header/header';
import { ReactComponent as LoadingIcon } from "./Infinity-0.8s-176px.svg"

const Groups = () => {
  return (
    <div>
      <Header />
      <div className='groupBody'>
        <span><em> GROUPS &nbsp; Page Under Develope By Akram &copy; 2023  </em></span>
        <LoadingIcon className='loadingINFINITY' />
      </div>
    </div>
  )
}

export default Groups
