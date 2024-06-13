import { Injectable } from "@nestjs/common";
import { Feedback } from "./feedback.model";

@Injectable()
export class FeedbackService {
    feedbacks: Feedback[] = [];

    insertFeedback(name: string, feedback_desc: string) {
        const id = new Date().toString();
        const newFeedback = new Feedback(id , name, feedback_desc);
        this.feedbacks.push(newFeedback);
        return id;
    }

    allFeedback() {
        return this.feedbacks;
    }
}