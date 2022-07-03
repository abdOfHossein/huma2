import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreatUserDto } from './userDto';
interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
}
interface IUserInfo {
  firstName: string;
  lastName: string;
  phoneNumber: number;
}

@Controller('user')
// @UseInterceptors(ClassSerializerInterceptor)
export default class UserController {
  constructor(private userService: UserService) {}

  @GrpcMethod()
  async findOne(id: string): Promise<IUserInfo | object> {
    try {
      console.log(`param in postqrSql service is===>${id}`);
      console.log(id['id']);
      const result = await this.userService.findOne(id['id']);
      console.log(result);

      return result;
    } catch (error) {
      console.log(`err of findOne in api-gateway controller:${error}`);
    }
  }

  @GrpcMethod()
  async addUser(userInfo: CreatUserDto): Promise<object> {
    try {
      console.log(`userInfo addUser postqrSql:${userInfo}`);

      return this.userService.addUser(userInfo);
    } catch (error) {
      console.log(`err of findOne in api-gateway controller:${error}`);
    }
  }
}
