import { AnswerAttachmentList } from "./answer-attachment-list";
import { AnswerCreatedEvent } from "../events/answer-created-event";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";
import { AggregateRoot } from "src/core/entities/aggregate-root";
import { Optional } from "src/core/types/optional";

export interface AnswerProps {
  authorId: UniqueEntityID;
  questionId: UniqueEntityID;
  content: string;
  attachments: AnswerAttachmentList;
  createdAt: Date;
  updatedAt?: Date | null;
}

export class Answer extends AggregateRoot<AnswerProps> {
  get authorId() {
    return this.props.authorId;
  }

  get questionId() {
    return this.props.questionId;
  }

  get content() {
    return this.props.content;
  }

  set content(content: string) {
    this.props.content = content;
    this.touch();
  }

  get attachments() {
    return this.props.attachments;
  }

  set attachments(attachments: AnswerAttachmentList) {
    this.props.attachments = attachments;
    this.touch();
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  get excerpt() {
    return this.content.substring(0, 120).trimEnd().concat("...");
  }

  private touch() {
    this.props.updatedAt = new Date();
  }

  static create(
    props: Optional<AnswerProps, "createdAt" | "attachments">,
    id?: UniqueEntityID
  ) {
    const answer = new Answer(
      {
        ...props,
        attachments: props.attachments ?? new AnswerAttachmentList(),
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    const isNewAnswer = !id;

    if (isNewAnswer) {
      answer.addDomainEvent(new AnswerCreatedEvent(answer));
    }

    return answer;
  }
}
