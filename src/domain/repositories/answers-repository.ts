import { Answer } from "../forum/enterprise/entities/answer";

export interface AnswersRepository {
  findById(id: string): Promise<Answer | null>;
  findById(arg0: string): unknown;
  create(answer: Answer): Promise<void>;
}
