import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('login')
  login() {
    return { message: 'Login endpoint' };
  }

  @Get('register')
  register() {
    return { message: 'Register endpoint' };
  }
}
