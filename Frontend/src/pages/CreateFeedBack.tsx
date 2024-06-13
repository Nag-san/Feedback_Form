import axios from "axios";
import React, { useState } from "react";

const CreateFeedback = () =>{
const [name, setName] = useState("");
const [feedback_desc, setFeedback_desc] = useState("");

const saveFeedback = () => {
    const data = {
        "name": name,
        "feedback_desc": feedback_desc
    };
    axios
    .post('http://localhost:5000/feedback',data)
    .then(()=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
    
}

return (
<div className="p-4">
    <label className="text-black-200"> Enter Name: </label>
    <input type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}/>

<label className="text-black-200"> Enter Feedback description </label>
    <input type="text"
    value={feedback_desc}
    onChange={(e)=> setFeedback_desc(e.target.value)}/>

    <button className="border-red-300"
    onClick={saveFeedback}>
        Create Feedback
    </button>
</div>
)}

export default CreateFeedback;