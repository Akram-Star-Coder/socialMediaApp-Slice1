import './Profile.css';
import { useState, useEffect } from "react";
import { ReactComponent as LoadingIcon } from './Dual Ring-0.8s-389px.svg';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import { Link } from 'react-router-dom';
import useClickOutsideToHideElement from '../../helpers/clickOutsideToHide';
import { useRef } from 'react';



const Post = (postX) => {

    
    
    

    const [postUnique, setPostunique] = useState(postX.post)
    const [user, setuser] = useState({})

    const currentUser = JSON.parse(Cookies.get('user'));
    const idUser = postUnique.user;
    const idCurrentUser = currentUser._id;
    



    useEffect(()=>{
        const getUser = async()=>{
          try{
            const resp = await axios.get(`http://localhost:3001/user/getU/${idUser}`, {
              headers : {
                Authorization : `Bearer ${currentUser.token}`
              }
            });
            if(resp){
              setuser(resp.data);
              console.log(resp.data);
              
            }
          }
          catch(e){
            console.log(e.message);
          }
        }
        getUser();
        
     
      }, [currentUser.token, idUser]);
    

      const getPostTimeAgo = (createdAt) => {
        const currentDate = moment();
        const postDate = moment(createdAt);
        const diffSeconds = currentDate.diff(postDate, "seconds");
        const diffMinutes = currentDate.diff(postDate, "minutes");
        const diffHours = currentDate.diff(postDate, "hours");
        const diffDays = currentDate.diff(postDate, "days");
        if (diffSeconds < 60) {
          return `${diffSeconds} sec ago`;
        } else if (diffMinutes < 60) {
          return `${diffMinutes} min ago`;
        } else if (diffHours < 24) {
          return `${diffHours} hours ago`;
        } else if (diffDays < 7) {
          return `${diffDays} days ago`;
        } else {
          return postDate.format("MMM DD, YYYY");
        }
      };
      

    const [isLiked, setIsLiked] = useState(false);
    const toggleLike = () => {
        if(isLiked){
            setIsLiked(false);
        }
        else{
            setIsLiked(true);
        }
    };




    const [menu, setMenuClicked] = useState(false);
    const handleMENUClick = ()=>{
        if(menu){
            setMenuClicked(false)
        }
        else{
            setMenuClicked(true)
        }
    }

    const [deletePost, setDeleteClicke] = useState(false);
    const [editPost, setEditClicke] = useState(false);


    const handleDeleteClick = ()=>{
        if(deletePost){
            setDeleteClicke(false);
        }
        else{
            setEditClicke(false);
            setDeleteClicke(true);
        }
    }

    const handleEditClick = ()=>{
        if(editPost){
            setEditClicke(false);
        }
        else{
            setDeleteClicke(false);
            setEditClicke(true);
        }
    }





    






  return (
    <>
    {
        (!postUnique) ? 
        (<div className="Loadinin">
            <LoadingIcon className="lodinin"/>
        </div>)
        :
        
        <>
        
        <div className={postUnique.image? "poststst" : "postststXXX"}>
            
            
            
            
            <div className="imageProfileUserx">
                <img src={user.picture ? user.picture : 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="" />
                <div className="fullnamepos">
                    <span className="jijiSpanos">
                    { user.firstName+' '+user.lastName }
                    </span>
                    <div className='postuniquecreatedAt'>
                        <em> {getPostTimeAgo(postUnique.createdAt)}
                        </em>
                    </div>
                    {
                menu ? (<div className='menuPost'    >
                

                <Link to="/" className="row1savePost">
                 <div className="btnSave">
               
                    <i className="fa-solid fa-sd-card"></i>

                  </div>
                  <div className="infosSave">
                    <span className='span31'>Save Post</span>
                    <span className='span32'>Add this to your saved items</span>
                  </div>
                </Link>

                <Link  to="/contact" className="row1savePost">
                  <div className="btnSave">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  </div>
                  <div className="infosSave">
                    <span className='span31'>Report Post</span>
                    <span className='span32'>I'm concerned about this post</span>
                  </div>
                </Link>
                
              </div>)
              :
                null
            }
                </div>
                
                {
                (idCurrentUser === postUnique.user)&& 
                <div className="btnOptionsDelete">
                    <button className='deletePost' onClick={handleDeleteClick} >Delete Post</button>
                    {
                        deletePost && ( 
                        <div className='deletePostPOPUP' >
                            <div className="dangerZone">
                                <span>Danger Zone</span>
                            </div>
                            <div className="areusure">
                                <span>Are you sure ?</span>
                            </div> 
                            <div className="deletedefinitely">
                                <button>Delete definitely</button>
                            </div>
                        </div> )
                    }
                    <button className='editPost' onClick={handleEditClick}>Edit Post</button>
                    {
                        editPost && ( 
                        <div className='editPostPOPUP' >

                        </div> )
                    }
                </div>
                
                }
                {
                (!(idCurrentUser === postUnique.user))&& 
                <button className='fa-ellipsis-verticalBTN' onClick={handleMENUClick} >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                
                </button>
                
                }

            </div>
            
                {
                    postUnique.text &&
                    <div className="context">
                        {
                            postUnique.text
                        }
                    </div>
                }
            
            {
                postUnique.image 
                && 
                <div className="imagePUnsui">
                    <img src={postUnique.image} alt="" />
                </div>
            }
            <div className="footerPo">
            <div className="fot1">
              <div className="likesNmbers">
                <i></i>
                <span>6  &nbsp;</span>
                <i className="fa-solid fa-thumbs-up"></i>
              </div>
              <div className="commentsNumber">
                <span>8 </span> comments
              </div>
            </div>
            <div className="fot2">
               
                    <button onClick={
                      toggleLike
                    } className={
                      !isLiked? 'like' : 'like liked' 
                    } ><i className="fa-regular fa-thumbs-up"></i> Like</button>
            
               
                    <button className='comment'><i className="fa-solid fa-message"></i> Comment</button>
              
            </div>
          </div>
        
        </div>
        </>
    }
    </>
  )
}

export default Post



