import { Controller, Get, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';



interface IUserInfo {
  firstName: string;
  lastName: string;
  phoneNumber: number;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id });
      return user;
    } catch (error) {
      console.log(`err of findOne in service-a`);
    }
  }

  async addUser(userInfo: IUserInfo) {
    try {
      const user = await this.userRepository.save(userInfo);
      return 'user created successfully';
    } catch (error) {
      console.log(`err of addUser in service-a`);
    }
  }
}
