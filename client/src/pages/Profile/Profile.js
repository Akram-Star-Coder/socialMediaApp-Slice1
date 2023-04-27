import "./Profile.css";
import Header from '../../Components/Header/header';
import LeftSideBar from '../../Components/leftSideBar/leftbar';
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { ReactComponent as LoadingIcon } from './Dual Ring-0.8s-389px.svg';

const Profile = () => {

  const [userProfile, setUser]  =useState();
  const [userPosts, setUserPosts] = useState([{}]);
  const [current, setCurrent] = useState(false);

  const currentUser = JSON.parse(Cookies.get('user'));
  const idCookie = currentUser._id;

  const { id } = useParams();
  const idUrl = id;


  

  
  useEffect(()=>{
    const getUser = async()=>{
      try{
        const resp = await axios.get(`http://localhost:3001/user/getU/${idUrl}`, {
          headers : {
            Authorization : `Bearer ${currentUser.token}`
          }
        });
        if(resp){
          setUser(resp.data)
          
        }
      }
      catch(e){
        console.log(e.message);
      }
    }
    getUser();
    
 
  }, [currentUser.token, idUrl]);
  

    console.log(userProfile)
  



  const fctCheck = ()=>{
    if(idCookie === idUrl){ 
      setCurrent(true)
    }
    else{
      setCurrent(false)
    }
  }
  
  
  useEffect(() => {
    fctCheck();
  }, [idCookie, idUrl])
  

  return (
    <>
    
    <div className="bodyprincipleProfile">
      <Header /> 
      
      <div className="profile">
        <>
        <LeftSideBar/>
        {userProfile ?
        <div className="profileInfos">
            <div className="coverP">
              <div className="pictureUser">
                <img src={userProfile.picture ? userProfile.picture : "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" />
              </div>
            </div>
            <div className="fullnamePROFILE">
                <span className="fullnamePSpan">{userProfile.firstName +" "+ userProfile.lastName}</span>
                <hr className="hrProfile" />

                <span className="descriptioNprofile">
                  <em>I just love javascript !</em> 
                </span>
                {
                  current && (
                    <>
                    <div className="editProfile">
                      <button>Edit Account</button>
                    </div>
                    <div className="deleteProfile">
                    <button>Delete Account</button>
                  </div>
                  </>
                  )
                }
            </div>
        </div>
        :
        <div className="loading">
          <LoadingIcon className='loadingIconProfile' />
        </div>
        
        }
      </>
      
      </div>
    
    </div>
    
    
   </>
  )
  
}

export default Profile
