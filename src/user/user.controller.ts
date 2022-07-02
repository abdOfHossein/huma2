import { Body, Controller, Get, Post, Param } from '@nestjs/common';

import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';

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
  @Get(':id')
  async findOne(@Param() id: number): Promise<IUser> {
    try {
      console.log(`param in postqrSql service is===>${id}`);

      return this.userService.findOne(id);
    } catch (error) {
      console.log(`err of findOne in api-gateway controller:${error}`);
    }
  }

  @GrpcMethod()
  @Post('creat')
  async addUser(@Body() userInfo: IUserInfo): Promise<string> {
    try {
      return this.userService.addUser(userInfo);
    } catch (error) {
      console.log(`err of findOne in api-gateway controller:${error}`);
    }
  }
}
