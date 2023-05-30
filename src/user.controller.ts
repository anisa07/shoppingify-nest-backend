import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { FirebaseAuthGuard } from './firebase/firebase-auth.guard';
import { UserService } from './user.service';

export class CreateUserDto {
  name: string;
  uid: string;
}

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(FirebaseAuthGuard)
  @Get(':userId')
  async getUser(@Param('userId') userId) {
    const user = await this.userService.getUser(userId);
    if (user && user.length > 0) {
      return user[0];
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  @UseGuards(FirebaseAuthGuard)
  @Post()
  async createdUser(@Body() createUserDto: CreateUserDto) {
    Logger.debug('createUserDto', createUserDto);
    const user = await this.userService.createdUser(createUserDto);
    return user;
  }

  @UseGuards(FirebaseAuthGuard)
  @Put(':userId')
  async updateUser(
    @Param('userId') userId,
    @Body() updateUserDto: { name: string },
  ) {
    await this.userService.updateUser(userId, updateUserDto);
    return;
  }
}
