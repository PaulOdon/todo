import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
@ApiTags('api')
export class AppService {
  getHello(): string {
    return 'Task API';
  }
}
