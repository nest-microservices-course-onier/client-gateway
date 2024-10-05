import { Module } from '@nestjs/common';

import { NatsModule } from '../../../payments-ms/src/transports/nats.module';

import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    NatsModule,
  ],
})
export class AuthModule {}
