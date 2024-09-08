import { Controller, Get, Post, Body, Patch, Param, Inject, ParseUUIDPipe, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

import { ORDER_SERVICE } from 'src/config';

import { PaginationDto } from 'src/common';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderPaginationDto } from './dto/order-pagination.dto';
import { StatusDto } from './dto/status.dto';


@Controller('order')
export class OrderController {

  constructor(
    @Inject(ORDER_SERVICE) private readonly orderClient: ClientProxy,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderClient.send('createOrder', createOrderDto)
      .pipe(
        catchError(err => { throw new RpcException(err) } ),
      );
  }

  @Get()
  findAll(@Query() orderPaginationDto: OrderPaginationDto) {
    return this.orderClient.send('findAllOrders', orderPaginationDto)
      .pipe(
        catchError(err => { throw new RpcException(err) } ),
      );
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.orderClient.send('findOneOrder', { id })
      .pipe(
        catchError(err => { throw new RpcException(err) } ),
      );
  }

  @Patch(':id')
  changeStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() statusDto: StatusDto,
  ) {
    // ONE SOLUTION
    // return this.orderClient.send('changeOrderStatus', { id, ...statusDto })
    //   .pipe(
    //     catchError(err => { throw new RpcException(err) } ),
    //   );

    // SECOND SOLUTION
    try {
      
      return this.orderClient.send('changeOrderStatus', { id, ...statusDto });
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
