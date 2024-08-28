import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleService } from './article/article.service';
import { ArticleController } from './article/article.controller';
import { ArticleModule } from './article/article.module';
import { PrismaService } from './prisma/prisma.service';
@Module({
  imports: [ArticleModule],
  controllers: [AppController, ArticleController],
  providers: [AppService, ArticleService, PrismaService],
})
export class AppModule {}
