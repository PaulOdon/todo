import { ApiProperty } from '@nestjs/swagger';
import { EnumTaskStatus } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ enum: EnumTaskStatus })
  status: EnumTaskStatus;
}
