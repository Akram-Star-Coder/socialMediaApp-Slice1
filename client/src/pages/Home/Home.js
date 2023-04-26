import './Home.css';
import Header from '../../Components/Header/header';
import Cookies from 'js-cookie';
import Rightbar from '../../Components/RightSideBar/rightbar';
import Leftbar from '../../Components/leftSideBar/leftbar';
import MiddleBar from '../../Components/middleBar/middlebar';


const Home =() => {
  
  const user = JSON.parse(Cookies.get('user'));

  return (
    <div className='home'>
      <Header user={user} />
    <div className="body">  
      <Leftbar user={user}  />
      <MiddleBar  user={user} />
      <Rightbar  user={user} />
    </div> 
    </div>
  )
}

export default Home
