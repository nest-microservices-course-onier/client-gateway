import { Module } from '@nestjs/common';

import { NatsModule } from 'src/transports/nats.module';
import { OrderController } from './order.controller';

@Module({
  controllers: [OrderController],
  imports: [

    // Using TCP
    // ClientsModule.register([
    //   {
    //     name: ORDER_SERVICE,
    //     transport: Transport.TCP,
    //     options: {
    //       host: envs.orderMicroserviceHost,
    //       port: envs.orderMicroservicePort,
    //     },
    //   },
    // ]),

    // NOW using NATS
    NatsModule,

  ],
})
export class OrderModule {}
