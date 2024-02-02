import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDTO } from './dto/user-create.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    createUser(user: createUserDTO) {
        const newuser = this.userRepository.create(user);
        this.userRepository.save(newuser);
    }
}
