import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserInput } from './users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() dto: CreateUserInput) {
    return this.usersService.createUsers(dto);
  }
}
