import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [ProductController],
  imports: [
    NatsModule,
  ],
  providers: [],
})
export class ProductModule {}
