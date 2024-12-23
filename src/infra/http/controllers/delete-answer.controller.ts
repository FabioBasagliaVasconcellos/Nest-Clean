import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  Param,
} from "@nestjs/common";
import { DeleteAnswerUseCase } from "src/domain/forum/application/use-cases/delete-answer";
import { CurrentUser } from "src/infra/http/auth/current-user-decorator";
import { UserPayload } from "src/infra/http/auth/jwt.strategy";

@Controller("/answers/:id")
export class DeleteAnswerController {
  constructor(private deleteAnswer: DeleteAnswerUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(
    @CurrentUser() user: UserPayload,
    @Param("id") answerId: string
  ) {
    const userId = user.sub;

    const result = await this.deleteAnswer.execute({
      answerId,
      authorId: userId,
    });

    if (result.isLeft()) {
      throw new BadRequestException();
    }
  }
}
