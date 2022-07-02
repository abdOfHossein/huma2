import {  IsNotEmpty } from 'class-validator';

export class CreatUserDto {
 
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  phoneNumber: number;
}