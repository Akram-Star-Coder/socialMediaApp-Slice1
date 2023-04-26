import  './middlebar.css'
import CreatePost from '../CreatePost/CreatePost';
import GetAllPosts from '../getAll/getAllPosts';

const MiddleBar = () => {
  return (
    <div className='MiddleBar'>
        <CreatePost  />
        <GetAllPosts />
    </div>
  )
}

export default MiddleBar
