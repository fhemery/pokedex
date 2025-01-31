import { Controller, Get } from '@nestjs/common';

@Controller('ping')
export class PingController {
  @Get()
  ping() {
    console.log('Received ping request');
    return { response: 'pong' };
  }
}
