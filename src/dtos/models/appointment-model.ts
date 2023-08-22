import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Appointment {
  @Field()
  startsAt: String;

  @Field()
  endsAt: String;
}
