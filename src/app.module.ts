import { Module } from '@nestjs/common';
import { FirebaseAuthStrategy } from './firebase/firebase-auth.strategy';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, AuthController],
  providers: [FirebaseAuthStrategy, PrismaService, AppService, UserService],
})
export class AppModule {}
