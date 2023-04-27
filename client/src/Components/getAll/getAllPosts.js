import './getAllPosts.css';
import { useEffect, useState} from 'react'; 
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import {Link} from 'react-router-dom';

const GetAllPosts = () => {


  const [posts, setPosts] = useState([{}]);
  
  const [person, setuser] = useState([]);

  const user = JSON.parse(Cookies.get('user'));
  const token = user.token;

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await axios.get("http://localhost:3001/post/getAll", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPosts(resp.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    getData();
  }, [token]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const resp = await axios.get("http://localhost:3001/user/getUser", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setuser(resp.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    getUser();
  }, [token]);

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


  const [isLiked, setIsLiked] = useState({});
  const toggleLike = (index) => {
    setIsLiked({
      ...isLiked,
      [index]: !isLiked[index]
    });
  };



  const [menuStates, setMenuStates] = useState({});
  const toggleMenu = (index) => {
    setMenuStates({
      ...menuStates,
      [index]: !menuStates[index]
    });
  };
 



  return (
    <div className='posts'>
      {posts.map((post, index) => (
        <div key={index} className='post'>

          

          <div className="headerPost">
            {
            
            menuStates[index] ?
              <div className='menuPost'  >
                

                <Link to="/" className="row1savePost">
                 <div className="btnSave">
               
                    <i className="fa-solid fa-sd-card"></i>

                  </div>
                  <div className="infosSave">
                    <span className='span31'>Save Post</span>
                    <span className='span32'>Add this to your saved items</span>
                  </div>
                </Link>

                <Link  to="/" className="row1savePost">
                  <div className="btnSave">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  </div>
                  <div className="infosSave">
                    <span className='span31'>Report Post</span>
                    <span className='span32'>I'm concerned about this post</span>
                  </div>
                </Link>
                
              </div>
              :
              null
            }
            
            <div className="infosP">
              <img src={ person.picture? (person.picture) : 'https://cdn-icons-png.flaticon.com/512/149/149071.png' } alt="" />
              <span className="fullname">
                {
                  person.firstName +' '+ person.lastName
                }
              </span>
              <div className="createdAt"> <em>{getPostTimeAgo(post.createdAt)} </em></div>
             
              <button className='fa-ellipsis-verticalBTN' onClick={() => toggleMenu(index)}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>

              </div>
          </div>



          <div className="bodyPost">
            {
              post.text && (
                <div className="textPost">
                  {post.text}
                </div>
              )
            }
            {
              post.image && (
                <div className="imagePost">
                  <img src={post.image} alt="" />
                </div>
              )
            }
          </div>
          <div className="footerPo">
            <div className="fot1">
              <div className="likesNmbers">
                <i></i>
                <span>6 </span>
                <i className="fa-solid fa-thumbs-up"></i>
              </div>
              <div className="commentsNumber">
                <span>2</span> comments
              </div>
            </div>
            <div className="fot2">
               
                    <button onClick={()=>{
                      toggleLike(index)
                    }} className={
                      !isLiked[index] ? 'like' : 'like liked' 
                    } ><i className="fa-regular fa-thumbs-up"></i> Like</button>
            
               
                    <button className='comment'><i className="fa-solid fa-message"></i> Comment</button>
              
            </div>
          </div>


        </div>
      ))}
    </div>
  )
}

export default GetAllPosts;
