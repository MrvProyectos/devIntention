import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { RequestHeader } from './decorators/headers/request-header.decorator';
import { BodyDTO } from './dto/body.dto';
import { HeadersDTO } from './dto/headers.request';
import { LoggerService } from './services/logger/logger.service';

@Controller()
export class AppController {
  constructor(private readonly logger: LoggerService) {}

  @Get('healthy')
  @HttpCode(HttpStatus.OK)
  async healthy(@Req() req: Request, @RequestHeader(HeadersDTO) headers: HeadersDTO) {
    const start = process.hrtime();
    this.logger.info(headers, `START: ${start[1]}`);
    this.logger.info(headers, { headers });
    const finish = process.hrtime(start);
    this.logger.info(headers, `FINISH ${start[1]} on ${finish[0]}s ${String(Math.floor((finish[1]) / (1000 * 1000))).padStart(3, '0')}ms`);
    return { status: HttpStatus.OK, statusDescription: 'OK', url: req.url };
  }

  @Post('/stro/pose/v1/devintention/intention-message')
  @HttpCode(HttpStatus.ACCEPTED)
  async intentionMessage(@Body() body: BodyDTO, @RequestHeader(HeadersDTO) headers: HeadersDTO) {
    const start = process.hrtime();
    this.logger.info(headers, `START: ${start[1]}`);
    //CODE
    this.logger.info(headers, { body, headers });

    const finish = process.hrtime(start);
    this.logger.info(headers, `FINISH ${start[1]} on ${finish[0]}s ${String(Math.floor((finish[1]) / (1000 * 1000))).padStart(3, '0')}ms`);
    return { status: HttpStatus.OK, statusDescription: body };
  }
}
