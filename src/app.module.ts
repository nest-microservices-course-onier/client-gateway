import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { NatsModule } from './transports/nats.module';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({
  imports: [

    AuthModule,
    ProductModule,
    OrderModule,
    NatsModule,
    HealthCheckModule,

  ],
})
export class AppModule {}
