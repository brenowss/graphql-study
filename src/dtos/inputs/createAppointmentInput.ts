import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateAppointmentInput {
  @Field()
  customerId: string;

  @Field()
  startsAt: string;

  @Field()
  endsAt: string;
}
