import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateFeedback = () =>{
const [name, setName] = useState("");
const [feedback_desc, setFeedback_desc] = useState("");

const saveFeedback = () => {
    if (!name || !feedback_desc) {
        alert("Enter both name and feedback descriptions!")
        return
    }
    const data = {
        "name": name,
        "feedback_desc": feedback_desc
    };
    axios
    .post('http://localhost:5000/feedback',data)
    .then(()=>{
        console.log(data);
        alert("Feedback succesfull!");

    })
    .catch((error)=>{
        console.log(error);
    })
    
}

return (
<div className="p-4">
    <div className="border bg-gray-200 p-5 w-[400px] rounded-md">
    <div className=" flex flex-col gap-3">
    <label className="text-black-100"> Enter Name: </label>
    <input type="text"
    id="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-[200px] p-2 rounded-md"/>
<label className="text-black-100"> Enter Feedback description: </label>
    {/* <input type="textarea"
   
    className="w-[300px] rounded-md h-[100px]"/> */}
    <textarea name="desc" cols ={40} rows={4}
     value={feedback_desc}
     onChange={(e)=> setFeedback_desc(e.target.value)}
     className="rounded-md p-2 "> </textarea>
</div>
<div className="flex flex-row gap-4">
    <button className="mt-4 p-2 rounded-lg bg-teal-400"
    onClick={saveFeedback}>
        Create Feedback
    </button>
    <Link to='/' className="mt-4 p-2 rounded-lg bg-teal-400">
        Back to Home
    </Link>
    </div>
    </div>
</div>
)}

export default CreateFeedback;