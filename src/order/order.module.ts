import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { OrderController } from './order.controller';

import { envs, ORDER_SERVICE } from 'src/config';

@Module({
  controllers: [OrderController],
  imports: [

    ClientsModule.register([
      {
        name: ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.orderMicroserviceHost,
          port: envs.orderMicroservicePort,
        },
      },
    ]),

  ],
})
export class OrderModule {}
