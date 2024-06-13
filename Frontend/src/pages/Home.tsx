import React, { useEffect, useState } from "react";
import axios from "axios";
import { response } from "express";
import { Link } from "react-router-dom";
interface feedbackI {
    id: string,
    name: string,
    feedback_desc: string
}
let a: Array<feedbackI> = [];
const Home = () =>{
const [feedbacks, setFeedbacks] = useState<feedbackI[]>([]);
const [loading, setLoading] = useState(false);
useEffect(()=>{
    setLoading(true);
    axios
    .get('http://localhost:5000/feedback')
    .then((response)=>{
        response.data.forEach(element=> {
            let feedbackObj: feedbackI = {
                id: element.id,
                name: element.name,
                feedback_desc: element.feedback_desc
            }
        });
        setFeedbacks(a);
        setLoading(false);
    })
    .catch((error)=>{
        console.log(error)
        setLoading(false);
    })
},[])

let feedbackHtml = a.filter((feedback) => {
    return `<div>${feedback.id}</div>`
})

return (
<div className="p-4">
    <button className="rounded-md bg-red-100">
    <Link to = "/CreateFeedback">
    Create Feedback
    </Link>
    </button>
    
</div>

)}

export default Home;