import { Module } from '@nestjs/common';

import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [

    ProductModule,
    OrderModule,
    NatsModule,

  ],
})
export class AppModule {}
