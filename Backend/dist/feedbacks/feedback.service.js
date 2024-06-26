"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackService = void 0;
const common_1 = require("@nestjs/common");
const feedback_model_1 = require("./feedback.model");
let FeedbackService = class FeedbackService {
    constructor() {
        this.feedbacks = [];
    }
    insertFeedback(name, feedback_desc) {
        const id = new Date().toString();
        const newFeedback = new feedback_model_1.Feedback(id, name, feedback_desc);
        this.feedbacks.push(newFeedback);
        return id;
    }
    allFeedback() {
        return this.feedbacks;
    }
};
exports.FeedbackService = FeedbackService;
exports.FeedbackService = FeedbackService = __decorate([
    (0, common_1.Injectable)()
], FeedbackService);
//# sourceMappingURL=feedback.service.js.map