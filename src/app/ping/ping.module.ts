import { Module } from '@nestjs/common';
import { PingController } from './ping.controller';
import { VersionRepositoryService } from './version-repository.service';

@Module({
  controllers: [PingController],
  providers: [VersionRepositoryService],
})
export class PingModule {}
