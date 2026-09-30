import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, ItemsModule],
})
export class AppModule {}
