import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { PrismaQuestionsRepository } from "./repositories/prisma-questions-repository";
import { PrismaQuestionCommentsRepository } from "./repositories/prisma-question-comments-repository";
import { PrismaQuestionAttachmentsRepository } from "./repositories/prisma-question-attachments-repository";
import { PrismaAnswersRepository } from "./repositories/prisma-answers-repository";
import { PrismaAnswerCommentsRepository } from "./repositories/prisma-answer-comments-repository";
import { PrismaAnswerAttachmentsRepository } from "./repositories/prisma-answer-attachments-repository";
import { QuestionsRepository } from "src/domain/forum/application/repositories/questions-repository";
import { StudentsRepository } from "src/domain/forum/application/repositories/students-repository";
import { PrismaStudentsRepository } from "./repositories/prisma-students-repository";
import { AnswerAttachmentsRepository } from "src/domain/forum/application/repositories/answer-attachments-repository";
import { AnswerCommentsRepository } from "src/domain/forum/application/repositories/answer-comments-repository";
import { AnswersRepository } from "src/domain/forum/application/repositories/answers-repository";
import { QuestionAttachmentsRepository } from "src/domain/forum/application/repositories/question-attachments-repository";
import { QuestionCommentsRepository } from "src/domain/forum/application/repositories/question-comments-repository";
import { AttachmentsRepository } from "src/domain/forum/application/repositories/attachments-repository";
import { PrismaAttachmentsRepository } from "./repositories/prisma-attachments-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: QuestionsRepository,
      useClass: PrismaQuestionsRepository,
    },
    {
      provide: StudentsRepository,
      useClass: PrismaStudentsRepository,
    },
    {
      provide: QuestionCommentsRepository,
      useClass: PrismaQuestionCommentsRepository,
    },
    {
      provide: QuestionAttachmentsRepository,
      useClass: PrismaQuestionAttachmentsRepository,
    },
    {
      provide: AnswersRepository,
      useClass: PrismaAnswersRepository,
    },
    {
      provide: AnswerCommentsRepository,
      useClass: PrismaAnswerCommentsRepository,
    },
    {
      provide: AnswerAttachmentsRepository,
      useClass: PrismaAnswerAttachmentsRepository,
    },
    {
      provide: AttachmentsRepository,
      useClass: PrismaAttachmentsRepository,
    },
  ],
  exports: [
    PrismaService,
    QuestionsRepository,
    StudentsRepository,
    QuestionCommentsRepository,
    QuestionAttachmentsRepository,
    AnswersRepository,
    AnswerCommentsRepository,
    AnswerAttachmentsRepository,
    AttachmentsRepository,
  ],
})
export class DatabaseModule {}
