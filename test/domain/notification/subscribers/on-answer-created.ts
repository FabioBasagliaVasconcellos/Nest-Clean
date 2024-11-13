import { DomainEvents } from "src/core/events/domain-events";
import { EventHandler } from "src/core/events/event-handler";
import { AnswerCreatedEvent } from "../../forum/enterprise/events/answer-created-event";
import { QuestionsRepository } from "../../forum/application/repositories/questions-repository";
import { SendNotificationUseCase } from "src/domain/notification/application/use-cases/send-notification";

export class OnAnswerCreated implements EventHandler {
  constructor(
    private questionsRepository: QuestionsRepository,
    private sendNotification: SendNotificationUseCase
  ) {
    this.setupSubscriptions();
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewAnswerNotification.bind(this),
      AnswerCreatedEvent.name
    );
  }

  private async sendNewAnswerNotification({ answer }: AnswerCreatedEvent) {
    const question = await this.questionsRepository.findById(
      answer.questionId.toString()
    );

    if (question) {
      await this.sendNotification.execute({
        recipientId: question.authorId.toString(),
        title: `New Answer in "${question.title.substring(0, 40).concat("...")}"`,
        content: answer.excerpt,
      });
    }
  }
}
