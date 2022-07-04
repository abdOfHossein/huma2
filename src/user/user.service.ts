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
      console.log(user);

      if (!user) {
        return { msg: 'id is wrong !!!' };
      }
      return user;
    } catch (error) {
      console.log(`err of findOne in service-a:${error}`);
    }
  }

  async findAll() {
    try {
      const users = await this.userRepository.find({});
      console.log(users);

      if (!users || users.length==0) {
        return { msg: 'there is not any user...' };
      }
      return users;
    } catch (error) {
      console.log(`err of findOne in service-a:${error}`);
    }
  }
  async addUser(userInfo: IUserInfo) {
    try {
      console.log(JSON.stringify(userInfo));

      const user = await this.userRepository.save(userInfo);
      console.log(user);
      console.log(JSON.stringify(user));

      return { msg: 'user created successfully' };
    } catch (error) {
      console.log(`err of addUser in service-a`);
    }
  }
}
