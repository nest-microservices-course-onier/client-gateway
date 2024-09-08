import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ProductController } from './product.controller';

import { envs, PRODUCT_SERVICE } from 'src/config';

@Module({
  controllers: [ProductController],
  imports: [

    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.productMicroserviceHost,
          port: envs.productMicroservicePort,
        },
      },
    ]),

  ],
  providers: [],
})
export class ProductModule {}
