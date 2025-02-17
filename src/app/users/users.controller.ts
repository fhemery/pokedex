import { Controller, Post, Req } from '@nestjs/common';
import { RequestWithUser } from '../modules/auth/model/request-with-user';
import { Auth } from '../modules/auth/auth.decorator';

@Controller('users')
export class UsersController {
  @Post()
  @Auth()
  create(@Req() request: RequestWithUser) {
    console.log(request.user.uid);
  }
}
