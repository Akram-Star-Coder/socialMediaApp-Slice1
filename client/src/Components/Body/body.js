import './body.css'
import Rightbar from '../RightSideBar/rightbar';
import Leftbar from '../leftSideBar/leftbar';
import MiddleBar from '../middleBar/middlebar';

const Body = () => {
  return (
    <div className='body'>
       
        <Leftbar />
        <MiddleBar/>
        <Rightbar/>

        
    </div>
  )
}

export default Body
