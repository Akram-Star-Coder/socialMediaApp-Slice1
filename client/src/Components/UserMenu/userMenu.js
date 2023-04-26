import './userMenu.css'
import {Link, useNavigate} from 'react-router-dom';
import useClickOutsideToHideElement from '../../helpers/clickOutsideToHide';
import { useRef } from 'react';
import Cookies from 'js-cookie';
import men from './userpicture.png';
 
    const UserMenu = ({user}) => {

    const element = useRef(null);
    //function to fide an element
    useClickOutsideToHideElement(element, ()=>{
        element.current.style.display = "none";
    })
    
    const nav = useNavigate();
    const LOGOUT = () => {
        Cookies.remove('user');
        nav(0);
    };

    return (  
        <>
              
            
            <div className='Usermenu' ref={element}>
                
            <i className="kaka fa-solid fa-caret-up"></i>
                    <div className="nameUser">
                        <Link to='/profile' className='nameUser XXn'>
                            <div className="imageProfile">
                                {
                                    user.picture? <img src={user.picture} alt="" />
                                    :
                                    <img src={
                                       men
                                    } alt="" />
                                }
                            </div>
                            <span className='firstNameUser'>
                                {
                                    user.firstName
                                }
                            </span>
                            <span  className='lastNameUser'>
                                {
                                    user.lastName
                                } 
                            </span>
                        </Link>
                        <div className="see">
                            <span>
                                See your profile
                            </span>
                        </div>
                    </div>
                        
                    <div className="hrhr cll">
                            <hr className="lineHRCustomized akak" />
                            </div>                
                        <div className="menuMAIN">
                            
                            <Link to='/' className="feedback">
                                <button><i className="fa-solid fa-flag"></i></button>
                                <div className="spans">
                                <span>Give Feedback</span>
                                <span className='helpus'>Help us improve VerHub</span>
                                </div>
                            </Link>
                            

                            <Link to='/' className="feedback settignAndPrivacy">
                                <button><i className="fa-solid fa-gear"></i></button>
                                <div className="spans">
                                <span>Settings & Privacy</span>
                                <span className='helpus'>Update your profile</span>
                                </div>
                            </Link>                    
                            
                            <Link to='/auth'  onClick={LOGOUT}  className="feedback settignAndPrivacy">
                                <button ><i className="fa-solid fa-door-open"></i></button>
                                <div className="spans">
                                <span>Logout</span>
                                </div>
                            </Link>                    
                            
                                
                        </div>
                        
                        

            </div>
        </>
    )
}

export default UserMenu;
