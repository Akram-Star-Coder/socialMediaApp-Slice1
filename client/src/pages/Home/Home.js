import './Home.css';
import Header from '../../Components/Header/header';
import Body from '../../Components/Body/body';
import Cookies from 'js-cookie';

const Home =() => {
  
  const user = JSON.parse(Cookies.get('user'));

  return (
    <div>
      <Header user={user} />
      <Body  user={user}  />
    </div>
  )
}

export default Home
