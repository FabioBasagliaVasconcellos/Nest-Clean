import { Answer } from "../../enterprise/entities/answer";

export abstract class AnswersRepository {
  abstract findById(id: string): Promise<Answer | null>;
  abstract findById(arg0: string): unknown;
  abstract findManyByQuestionId(
    questionId: string,
    options: { page: number }
  ): Promise<Answer[]>;
  abstract create(answer: Answer): Promise<void>;
  abstract delete(answer: Answer): Promise<void>;
  abstract save(answer: Answer): Promise<void>;
}
