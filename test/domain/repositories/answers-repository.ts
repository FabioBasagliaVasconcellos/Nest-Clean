import { Answer } from "../forum/enterprise/entities/answer";

export interface AnswersRepository {
  findById(arg0: string): unknown;
  create(answer: Answer): Promise<void>;
}
