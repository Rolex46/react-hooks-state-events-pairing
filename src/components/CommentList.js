import React,{useState} from "react";
import video from "../data/video";

function CommentList({}){
    const commentCount = video.comments.length;

    const [count, setCount] = useState(commentCount)
    return (
     <div>
        <h3>{count} Comments</h3>
        <ul>
        {video.comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user}:</strong> {comment.comment}
          </li>
        ))}
      </ul>
     </div>
    )
}
export default CommentList;