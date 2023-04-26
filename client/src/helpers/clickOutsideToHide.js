import { useEffect } from "react"


const useClickOutsideToHideElement = (ref, fct )=>{
    useEffect(()=>{

        const listner = (e)=>{
            if(!ref.current || ref.current.contains(e.target)){
                //if the element doesn't exist OR we are inside the element 
                //===>we won't hide the element 
                return;//we return nothing ++++> we do nothing ..
            }
            
                fct();
            
        }

        document.addEventListener('mousedown', listner);
        document.addEventListener('touchstart', listner);

        return ()=>{
            document.removeEventListener('mousedown', listner);
            document.removeEventListener('touchstart', listner);
        }

    }, [ref, fct])
    //[] empty ==> run once when page loads 
    //[ with Dependencies ]===> run every single time when the dependencie change
}


export default useClickOutsideToHideElement;