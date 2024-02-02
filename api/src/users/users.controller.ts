import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { createUserDTO } from './dto/user-create.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post()
    createUser(@Body() user: createUserDTO) {
        return this.usersService.createUser(user);
    }

    @Get()
    getUsers() : Promise<User[]> {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) : Promise<User> {
        return this.usersService.getUser(id);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }
}
