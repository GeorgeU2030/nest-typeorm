import { Controller, Get, Post, Body } from '@nestjs/common';
import { createUserDTO } from './dto/user-create.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    createUser(@Body() user: createUserDTO) {
        return this.usersService.createUser(user);
    }
}
