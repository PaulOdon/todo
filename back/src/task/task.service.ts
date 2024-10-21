import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: createTaskDto,
    });
  }

  findAll(
    sortBy?: string | keyof Prisma.TaskOrderByWithRelationInput,
    order: 'asc' | 'desc' = 'asc',
  ) {
    return this.prisma.task.findMany({
      orderBy: {
        [sortBy ?? 'id']: order,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.task.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
