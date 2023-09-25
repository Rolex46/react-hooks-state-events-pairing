import react,{useState} from "react";
import video from "../data/video";
import CommentList from "./CommentList";

function Interactions(){
 const [view, setView] = useState(video.views)
 const [likes, setLikes] = useState(video.upvotes)
 const [disLikes, setDisLikes] = useState(video.downvotes)
 const [isOn, setIsOn] = useState(true)


 function handleLikes(){
    setLikes((likes)=> likes + 1)
 }

 function handledisLikes(){
    setDisLikes((disLikes)=> disLikes + 1)
 }

 function handleComments(){
    setIsOn((isOn)=> !isOn)
    
 }
    return (
     <div>
        {view} views | Uploaded Oct 26, 2018
        <div>
        <button onClick={handleLikes}>{likes} 👍</button>
        <button onClick={handledisLikes}>{disLikes} 👎</button>
        </div> 
        <button onClick={handleComments}>{isOn ? "Hide Comments":"Show Comments"}</button>
        <div>_____________________________________________</div>
        {isOn && <CommentList />}
    </div>
    )
}
export default Interactions;