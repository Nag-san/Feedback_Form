import { FeedbackService } from './feedback.service';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    addFeedback(Name: string, Feedback_desc: string): any;
    allFeedbacks(): any;
}
