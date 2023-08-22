import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import { CreateAppointmentInput } from '../dtos/inputs/createAppointmentInput';
import { Appointment } from '../dtos/models/appointment-model';
import { Customer } from '../dtos/models/customer-mode';

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: '2021-01-01T00:00:00.000Z',
        endsAt: '2021-01-01T00:00:00.000Z',
      },
    ];
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appointment: Appointment) {
    return {
      name: 'Customer 1',
    };
  }
}
