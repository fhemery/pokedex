import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { UserDetails } from './model/user-details';
import { RequestModel } from './auth.middleware';

@Injectable()
export class FakeAuthMiddleware implements NestMiddleware {
  static currentUser: UserDetails | null = null;

  static SetUser(uid: string | null, email: string | null = null): void {
    if (!uid) {
      FakeAuthMiddleware.currentUser = null;
      return;
    }
    FakeAuthMiddleware.currentUser = {
      uid,
      email: email || `${uid}@mail.com`,
    };
  }

  static Reset(): void {
    FakeAuthMiddleware.currentUser = null;
  }

  public async use(
    req: RequestModel,
    _: Response,
    next: NextFunction
  ): Promise<void> {
    req.user = FakeAuthMiddleware.currentUser;
    next();
  }
}
