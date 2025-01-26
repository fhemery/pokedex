import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingModule } from './ping/ping.module';

@Module({
  imports: [PingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
