import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
@ApiTags('task-api')
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
