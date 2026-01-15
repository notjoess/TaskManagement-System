
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body) {
    return {
      message: 'Login successful',
      token: 'SAMPLE_JWT_TOKEN'
    };
  }
}
