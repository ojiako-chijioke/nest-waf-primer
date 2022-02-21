import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
    ){}

  async create(createUserDto: CreateUserDto) {
    const newUser: User = this.usersRepository.create(createUserDto)
    return this.usersRepository.save(newUser);
    //return 'This action adds a new user';
  }

  async findAll() {
    return await this.usersRepository.find();
    //return `This action returns all users`;
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne(id);
    //return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.usersRepository.update(id, updateUserDto);
    //return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
    //return `This action removes a #${id} user`;
  }
}
