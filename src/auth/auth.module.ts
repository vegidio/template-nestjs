import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '@src/user';
import { authOptions } from '@src/config';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategy';

@Module({
    imports: [JwtModule.register(authOptions), UserModule],
    controllers: [AuthController],
    providers: [AuthService, AuthResolver, AccessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
