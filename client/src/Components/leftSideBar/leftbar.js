import './leftbar.css'
import friend from './friends.png'
import {Link} from 'react-router-dom'
import groups from './groups.png';
import saved from './saved.png'
import pages from './pages.png'
import event from './event.png'
import memory from './memory.png'

import friend1 from './christophe.webp';
import friend2 from "./jackelin.jpg";
import friend3 from './mark.avif';
import friend4 from './sulivian.avif';
import friend5 from './aymane.webp';

const Leftbar = () => {
  return (
    <div className='Leftbar'>
        
        
      
      <div className="slice1">
      <div className="titleK">
          <span>Discover</span>
        </div>
        <Link to='/' className="slice">
          <div className="im">
            <img src={friend} alt="" />
          </div>
          <div className="titleXs">
            <span>Find Friends</span>
          </div>
        </Link>

        <Link to='/' className="slice">
          <div className="im">
            <img src={groups} alt="" />
          </div>
          <div className="titleXs">
            <span>Groups</span>
          </div>
        </Link>

        <Link to='/' className="slice">
          <div className="im">
            <img src={pages} alt="" />
          </div>
          <div className="titleXs">
            <span>Pages</span>
          </div>
        </Link>

        <Link to='/' className="slice">
          <div className="im">
            <img src={saved} alt="" />
          </div>
          <div className="titleXs">
            <span>Saved</span>
          </div>
        </Link>

        <Link to='/' className="slice">
          <div className="im">
            <img src={event} alt="" />
          </div>
          <div className="titleXs">
            <span>Events</span>
          </div>
        </Link>

        <Link to='/' className="slice">
          <div className="im">
            <img src={memory} alt="" />
          </div>
          <div className="titleXs">
            <span>Memories</span>
          </div>
        </Link>

      </div>

      <hr className="hrhrhr" />

      <div className="slice2">
        <div className="titleK">
          <span>Friends List</span>
        </div>
        <div className="friendsContainer">
          <Link to='/' className='friend'>
            <div className='imgaeFriends'>
              <img src={friend1} alt="" />
            </div>
            <div className="FULLNAME">
              Christopher Julian
            </div>
          </Link>

          <Link to='/' className='friend'>
            <div className='imgaeFriends'>
              <img src={friend2} alt="" />
            </div>
            <div className="FULLNAME">
              Jackelin Moro
            </div>
          </Link>

          <Link to='/' className='friend'>
            <div className='imgaeFriends'>
              <img src={friend3} alt="" />
            </div>
            <div className="FULLNAME">
              Mark Son
            </div>
          </Link>

          <Link to='/' className='friend'>
            <div className='imgaeFriends'>
              <img src={friend4} alt="" />
            </div>
            <div className="FULLNAME">
              Jon Jones
            </div>
          </Link>

          <Link to='/' className='friend'>
            <div className='imgaeFriends'>
              <img src={friend5} alt="" />
            </div>
            <div className="FULLNAME">
              Aymane Elbasri
            </div>
          </Link>


        </div>
      </div>
    </div>
  )
} 

export default Leftbar
