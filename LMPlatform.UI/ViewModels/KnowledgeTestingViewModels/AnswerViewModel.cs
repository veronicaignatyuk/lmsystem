﻿using LMPlatform.Models.KnowledgeTesting;

namespace LMPlatform.UI.ViewModels.KnowledgeTestingViewModels
{
    public class AnswerViewModel
    {
        public int Id
        {
            get;
            set;
        }

        public int QuestionId
        {
            get;
            set;
        }

        public string Content
        {
            get;
            set;
        }

        public int СorrectnessIndicator
        {
            get;
            set;
        }

        public Answer ToAnswer()
        {
            return new Answer
            {
                Id = Id,
                QuestionId = QuestionId,
                Content = Content,
                СorrectnessIndicator = СorrectnessIndicator
            };
        }

        public static AnswerViewModel FromAnswer(Answer answer)
        {
            return new AnswerViewModel
            {
                Id = answer.Id,
                QuestionId = answer.QuestionId,
                Content = answer.Content,
                СorrectnessIndicator = answer.СorrectnessIndicator
            };
        }
    }
}