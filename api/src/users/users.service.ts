import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { createUserDTO } from './dto/user-create.dto';
import { updateUserDTO } from './dto/user-update.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    createUser(user: createUserDTO) {
        const newuser = this.userRepository.create(user);
        return this.userRepository.save(newuser);
    }

    getUsers() {
        return this.userRepository.find();
    }

    getUser(id: number) {
        return this.userRepository.findOne({
            where: {
                id
            }
        });
    }

    deleteUser(id: number) {
        return this.userRepository.delete({id});
    }

    updateUser(id: number, user: updateUserDTO ) {
        return this.userRepository.update({id}, user);
    }
}
