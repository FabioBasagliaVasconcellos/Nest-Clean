import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  Param,
} from "@nestjs/common";
import { DeleteQuestionUseCase } from "src/domain/forum/application/use-cases/delete-question";
import { CurrentUser } from "src/infra/http/auth/current-user-decorator";
import { UserPayload } from "src/infra/http/auth/jwt.strategy";

@Controller("/questions/:id")
export class DeleteQuestionController {
  constructor(private deleteQuestion: DeleteQuestionUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(
    @CurrentUser() user: UserPayload,
    @Param("id") questionId: string
  ) {
    const userId = user.sub;

    const result = await this.deleteQuestion.execute({
      questionId,
      authorId: userId,
    });

    if (result.isLeft()) {
      throw new BadRequestException();
    }
  }
}
