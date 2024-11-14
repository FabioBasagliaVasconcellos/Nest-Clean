import { Injectable } from "@nestjs/common";
import { AnswersRepository } from "src/domain/forum/application/repositories/answers-repository";
import { Answer } from "src/domain/forum/enterprise/entities/answer";

@Injectable()
export class PrismaAnswersRepository implements AnswersRepository {
  findById(id: string): Promise<Answer | null>;
  findById(arg0: string): unknown;
  findById(arg0: unknown): unknown {
    throw new Error("Method not implemented.");
  }
  findManyByQuestionId(
    questionId: string,
    options: { page: number }
  ): Promise<Answer[]> {
    throw new Error("Method not implemented.");
  }
  create(answer: Answer): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(answer: Answer): Promise<void> {
    throw new Error("Method not implemented.");
  }
  save(answer: Answer): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
