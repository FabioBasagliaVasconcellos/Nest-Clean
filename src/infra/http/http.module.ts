import { Module } from "@nestjs/common";
import { AuthenticateController } from "./controllers/authenticate.controller";
import { CreateAccountController } from "./controllers/create-account.controller";
import { CreateQuestionController } from "./controllers/create-question.controller";
import { FetchRecentQuestionsController } from "./controllers/fetch-recent-questions-controller";
import { DatabaseModule } from "../database/prisma/database.module";
import { CreateQuestionUseCase } from "src/domain/forum/application/use-cases/create-question";
import { FetchRecentQuestionsUseCase } from "src/domain/forum/application/use-cases/fetch-recent-questions";
import { RegisterStudentUseCase } from "src/domain/forum/application/use-cases/register-student";
import { AuthenticateStudentUseCase } from "src/domain/forum/application/use-cases/authenticate-student";
import { CryptographyModule } from "../cryptography/cryptography.module";
import { GetQuestionBySlugController } from "./controllers/get-question-by-slug.controller";
import { GetQuestionBySlugUseCase } from "src/domain/forum/application/use-cases/get-question-by-slug";
import { EditQuestionController } from "./controllers/edit-question.controller";
import { EditQuestionUseCase } from "src/domain/forum/application/use-cases/edit-question";
import { DeleteQuestionController } from "./controllers/delete-question.controller";
import { DeleteQuestionUseCase } from "src/domain/forum/application/use-cases/delete-question";
import { AnswerQuestionController } from "./controllers/answer-question.controller";
import { AnswerQuestionUseCase } from "src/domain/forum/application/use-cases/answer-question";
import { EditAnswerController } from "./controllers/edit-answer.controller";
import { EditAnswerUseCase } from "src/domain/forum/application/use-cases/edit-answer";
import { DeleteAnswerController } from "./controllers/delete-answer.controller";
import { DeleteAnswerUseCase } from "src/domain/forum/application/use-cases/delete-answer";
import { FetchQuestionAnswersController } from "./controllers/fetch-question-answers.controller";
import { FetchQuestionAnswersUseCase } from "src/domain/forum/application/use-cases/fetch-question-answers";
import { ChooseQuestionBestAnswerController } from "./controllers/choose-question-best-answer.controller";
import { ChooseQuestionBestAnswerUseCase } from "src/domain/forum/application/use-cases/choose-question-best-answer";
import { CommentOnQuestionController } from "./controllers/comment-on-question.controller";
import { CommentOnQuestionUseCase } from "src/domain/forum/application/use-cases/comment-on-question";
import { DeleteQuestionCommentController } from "./controllers/delete-question-comment.controller";
import { DeleteQuestionCommentUseCase } from "src/domain/forum/application/use-cases/delete-question-comment";

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
    EditQuestionController,
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionAnswersController,
    ChooseQuestionBestAnswerController,
    CommentOnQuestionController,
    DeleteQuestionCommentController,
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentUseCase,
    AuthenticateStudentUseCase,
    GetQuestionBySlugUseCase,
    EditQuestionUseCase,
    DeleteQuestionUseCase,
    AnswerQuestionUseCase,
    EditAnswerUseCase,
    DeleteAnswerUseCase,
    FetchQuestionAnswersUseCase,
    ChooseQuestionBestAnswerUseCase,
    CommentOnQuestionUseCase,
    DeleteQuestionCommentUseCase,
  ],
})
export class HttpModule {}
