import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export const RequestHeader = createParamDecorator(
  async (value: any, ctx: ExecutionContext) => {

    const headers = ctx.switchToHttp().getRequest().headers;
    const dto = plainToClass(value, headers);
    const validation = await validate(dto);
    if (validation.length > 0) throw new BadRequestException(validation.map((error) => error.constraints));
    return dto;

  },
);