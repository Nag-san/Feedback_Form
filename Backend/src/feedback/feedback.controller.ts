import { Controller, Post, Body, Get } from '@nestjs/common';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  addFeedback(
    @Body('name') Name: string,
    @Body('feedback_desc') Feedback_desc: string,
  ): any {
    const generatedid = this.feedbackService.insertFeedback(
      Name,
      Feedback_desc,
    );
    return { id: generatedid };
  }

  @Get()
  allFeedbacks() : any {
    const feedback_json = this.feedbackService.allFeedback()
    return feedback_json;
  }
}
