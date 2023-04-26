import './getAllPosts.css';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
import Cookies from 'js-cookie';

const GetAllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [person, setuser] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const user = JSON.parse(Cookies.get('user'));
  const token = user.token;


  const handleLiked = ()=>{
    if(isLiked){
      setIsLiked(false);
    }
    else{
      setIsLiked(true)
    }
  }

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


  return (
    <div className='posts'>
      {posts.map((post, index) => (
        <div key={index} className='post'>
          
          


          <div className="headerPost">
            <div className="infosP">
              <img src={ person.picture? (person.picture) : 'https://cdn-icons-png.flaticon.com/512/149/149071.png' } alt="" />
              <span className="fullname">
                {
                  person.firstName +' '+ person.lastName
                }
              </span>
              <i className="fa-solid fa-ellipsis-vertical"></i>
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
               
                    <button onClick={handleLiked} className={
                      !isLiked ? 'like' : 'like liked' 
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
