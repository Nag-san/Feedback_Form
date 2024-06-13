import { Feedback } from "./feedback.model";
export declare class FeedbackService {
    feedbacks: Feedback[];
    insertFeedback(name: string, feedback_desc: string): string;
    allFeedback(): Feedback[];
}
