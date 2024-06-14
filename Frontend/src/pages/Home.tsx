import React, { useEffect, useState } from "react";
import axios from "axios";
import { response } from "express";
import { Link } from "react-router-dom";

let feedbackList = ""

const Home = () =>{
const [loading, setLoading] = useState(false);
useEffect(()=>{
    setLoading(true);
    axios
    .get('http://localhost:5000/feedback')
    .then((response)=>{
        if (response.data.length > 0)
            {
                feedbackList = response.data.map((item: { id: string, name: string, feedback_desc: string }) => {
                    return (
                        <div className="bg-teal-300 w-[600px] rounded-md mt-[10px] p-2" 
                        key={item.id}> 
                            <p>Name: {item.name}</p>
                            <p>Feedback: {item.feedback_desc}</p>
                        </div>
                    )
                })
                console.log(feedbackList);
            }
        
        setLoading(false);
    })
    .catch((error)=>{
        console.log(error)
        setLoading(false);
    })
},[])


return (
    
<div className="p-5 flex flex-col ">
    <span className="font-semibold"> FEEDBACKS </span>
    <div className="h-[400px] w-[640px] overflow-scroll">
    {feedbackList}
    </div>
    <Link to = "/CreateFeedback"
    className="p-3 mt-4 w-[150px] rounded-md bg-teal-500">
    Create Feedback
    </Link>
</div>

)}

export default Home;