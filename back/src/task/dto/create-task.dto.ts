import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

enum EnumTaskStatus {
  EN_COURS = 'EN_COURS',
  FAIT = 'FAIT',
}

export class CreateTaskDto {
  @ApiProperty()
  id: number;

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
