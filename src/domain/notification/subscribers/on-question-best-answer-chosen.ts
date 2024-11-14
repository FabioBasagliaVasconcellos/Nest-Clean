import { DomainEvents } from "src/core/events/domain-events";
import { EventHandler } from "src/core/events/event-handler";
import { SendNotificationUseCase } from "src/domain/notification/application/use-cases/send-notification";
import { AnswersRepository } from "src/domain/forum/application/repositories/answers-repository";
import { QuestionBestAnswerChosenEvent } from "src/domain/forum/enterprise/events/question-best-answer-chosen-event";

export class OnQuestionBestAnswerChosen implements EventHandler {
  constructor(
    private answersRepository: AnswersRepository,
    private sendNotification: SendNotificationUseCase
  ) {
    this.setupSubscriptions();
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendQuestionBestAnswerNotification.bind(this),
      QuestionBestAnswerChosenEvent.name
    );
  }

  private async sendQuestionBestAnswerNotification({
    question,
    bestAnswerId,
  }: QuestionBestAnswerChosenEvent) {
    const answer = await this.answersRepository.findById(
      bestAnswerId.toString()
    );
    if (answer) {
      await this.sendNotification.execute({
        recipientId: answer.authorId.toString(),
        title: `Your answer was chosen!`,
        content: `Your answer send in "${question.title.substring(0, 20).concat("...")}" was chosen by the author!`,
      });
    }
  }
}
