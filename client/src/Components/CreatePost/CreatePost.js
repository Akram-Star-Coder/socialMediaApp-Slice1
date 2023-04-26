import "./CreatePost.css";
import live from './live.png'
import photo from './photo.png';
import happy  from './happy.png'
import akram from './akram.jfif';
import {useRef, useState} from "react";
import useClickOutsideToHideElement from '../../helpers/clickOutsideToHide';

const CreatePost = () => {
 
    const [popUp, setPopUp] = useState();
    //referencing the element so that we hide it when we click outside it 
    const element = useRef(null);
    useClickOutsideToHideElement(element,()=>{
    if(popUp){
        setPopUp(false)
    }
    else{
        setPopUp(true)
    }
    })

    const handleClickInputToShowPopupWindow = ()=>{
        if(popUp){
            setPopUp(false)
        }
        else{
            setPopUp(true)
        }
    }
    const handleclick = ()=>{
        if(popUp){
            setPopUp(false)
        }
        else{
            setPopUp(true)
        }
    }
 
 
    return (
    <div className='createContainer'>
        {
            popUp && (
            <div className="popupC">
                <div className="createInp" ref={element}>
                    <div className="headerSlice">
                        <h2>Create post</h2>
                        <button onClick={handleclick}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="bodySlice">
                        
                        <div className="bodySlice2">
                            <div className="imggg">
                                <img src={akram} alt="" />
                            </div>
                            <span>Akram Elbasri</span>
                        </div>
                        <div className="bodySlice3">
                            <textarea placeholder="What's on your mind, Akram" name="woum" id="" cols="30" rows="10" ></textarea>
                         </div>
                         <div className="opop">
                        <div className="options gh1">
                            <img src={live} alt="" />
                            <div className="spansis">
                            <span>Live Video</span>
                             </div>
                        </div>
                        <div className="options gh1">
                            <img src={photo} alt="" />
                            <div className="spansis">
                            <span>Photo/video</span>
                            </div>
                        </div>
                        <div className="options gh1">
                            <img src={happy} alt="" />
                            <div className="spansis">
                                <span>Feeling/activity</span>
                            </div>
                        </div>
                        </div>
                        <div className="butt">
                        <button>Create</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            )
        }
        <div className="createc2">
            <div className="slice1Create" onClick={handleClickInputToShowPopupWindow} >
                <img  src="https://media.licdn.com/dms/image/D4E03AQHDKXFWtgSO1Q/profile-displayphoto-shrink_400_400/0/1675566442061?e=1687392000&v=beta&t=qBAucY6YH3tYd1H57Ye7WO8rtfrcV8ZkjPIOvP-LJ1I" alt="" />
                <input disabled  type="text" placeholder="What's on your mind, Akram " />
            </div>
            <hr />
            <div className="slice2create">
                
                <div className="gh1" onClick={handleClickInputToShowPopupWindow}>
                    <img src={live} alt="" />
                    <div className="spansis">
                    <span>Live Video</span>
                    </div>
                </div>
                <div className="gh1" onClick={handleClickInputToShowPopupWindow}>
                    <img src={photo} alt="" />
                    <div className="spansis">
                    <span>Photo/video</span>
                    </div>
                </div>
                <div className="gh1" onClick={handleClickInputToShowPopupWindow}>
                    <img src={happy} alt="" />
                    <div className="spansis">
                    <span>Feeling/activity</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CreatePost





