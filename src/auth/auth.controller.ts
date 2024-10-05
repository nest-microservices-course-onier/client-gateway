import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { NATS_SERVICE } from '../config/index';

@Controller('auth')
export class AuthController {

  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Post('register')
  registerUser() {
    console.log('TEST: auth.register.user');
    return this.client.send('auth.register.user', {});
  }

  @Post('login')
  loginUser() {
    return this.client.send('auth.login.user', {});
  }

  @Get('verify')
  verifyToken() {
    return this.client.send('auth.verify.user', {});
  }
}
