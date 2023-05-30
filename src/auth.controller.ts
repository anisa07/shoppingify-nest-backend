import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor() {}

  @Get('login')
  @Render('login') // todo temp; will be done on fe
  login() {
    return;
  }

  @Get('signup')
  @Render('signup') // todo temp; will be done on fe
  signup() {
    return;
  }
}
