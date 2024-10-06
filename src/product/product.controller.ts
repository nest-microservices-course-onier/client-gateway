import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';

import { NATS_SERVICE } from 'src/config';

import { PaginationDto } from '../common/dto/pagination.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Controller('product')
export class ProductController {

  constructor(
    // @Inject(PRODUCT_SERVICE) private readonly client: ClientProxy,
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.client.send({cmd: 'create_product'}, createProductDto)
      .pipe(
        catchError(err => { throw new RpcException(err) } ),
      );
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.client.send({ cmd: 'find_all_products' }, paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {

    // FIRST SOLUTION
    return this.client.send({ cmd: 'find_one_product' }, { id })
      .pipe(
        catchError(err => { throw new RpcException(err) } ),
      );

    // SECOND SOLUTION
    // try {

    //   return firstValueFrom(
    //     this.client.send({ cmd: 'find_one_product' }, { id })
    //   );

    // } catch (error) {
    //   throw new RpcException(error);
    // }
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.client.send(
      {cmd: 'update_product'},
      {id, ...updateProductDto}
    )
      .pipe(
        catchError(err => { throw new RpcException(err) } ),
      );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'remove_product' }, { id })
      .pipe(
        catchError(err => { throw new RpcException(err) } ),
      );
  }
}
