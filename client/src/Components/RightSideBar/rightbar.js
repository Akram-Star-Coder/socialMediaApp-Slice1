import './rightbar.css'
import pizza from './pizzaAds.png';
import {Link} from 'react-router-dom' 

const Rightbar = () => {
  return (
    <div className='rightBar'>
        
        <div className="wrapperX">
            <span>Sponsored</span>
        </div>

        <Link to="/" className="wrapperR wrpT"> 
            <img src={pizza} alt="" />
        </Link>
         
        <div className="wrapperR">
            <div className="titleR">
                <h2>Create</h2>
            </div>
            <div className="btnContainerR">

                <div className="element">
                    <button className='btnReleme'>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <span className="titleRBtn">
                        Post
                    </span>
                </div>

                <div className="element">
                    <button className='btnReleme'>
                        <i className="fa-solid fa-book-open"></i>
                    </button>
                    <span className="titleRBtn">
                        Story
                    </span>
                </div>

                <div className="element">
                    <button className='btnReleme'>
                        <i className="fa-solid fa-video"></i>
                    </button>
                    <span className="titleRBtn">
                        Room
                    </span>
                </div>

                <div className="element">
                    <button className='btnReleme'>
                        <i className="fa-solid fa-flag"></i>
                    </button>
                    <span className="titleRBtn">
                        Page
                    </span>
                </div>

                <div className="element">
                    <button className='btnReleme'>
                        <i className="fa-solid fa-bullhorn"></i>                    
                    </button>
                    <span className="titleRBtn">
                        Ad
                    </span>
                </div>

                <div className="element">
                    <button className='btnReleme'>
                    <i className="fa-solid fa-user-group"></i>
                    </button>
                    <span className="titleRBtn">
                        Group
                    </span>
                </div>

                <div className="element">
                    <button className='btnReleme'>
                    <i className="fa-solid fa-calendar-days"></i>
                    </button>
                    <span className="titleRBtn">
                        Event
                    </span>
                </div>

                <div className="element">
                    <button className='btnReleme'>
                    <i className="fa-solid fa-sack-dollar"></i>
                    </button>
                    <span className="titleRBtn">
                        Job
                    </span>
                </div>

            </div>
        </div>



        



    </div>
  )
}

export default Rightbar
