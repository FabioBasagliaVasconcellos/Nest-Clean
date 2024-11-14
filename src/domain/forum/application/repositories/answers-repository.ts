import { Answer } from "../../enterprise/entities/answer";

export interface AnswersRepository {
  findById(id: string): Promise<Answer | null>;
  findById(arg0: string): unknown;
  findManyByQuestionId(
    questionId: string,
    options: { page: number }
  ): Promise<Answer[]>;
  create(answer: Answer): Promise<void>;
  delete(answer: Answer): Promise<void>;
  save(answer: Answer): Promise<void>;
}
