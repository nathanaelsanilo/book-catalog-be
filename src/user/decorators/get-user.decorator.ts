import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) => {
  const req: Express.Request = ctx.switchToHttp().getRequest();
  return req.user;
});
