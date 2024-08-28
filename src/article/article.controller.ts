import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article as ArticleModel } from '@prisma/client';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Get(':id')
  async getArticle(@Param('id') id: string): Promise<ArticleModel> {
    return this.articleService.getArticle({ id: Number(id) });
  }

  @Post()
  async createArticle(
    @Body() articleData: { title: string; content?: string; subTitle?: string },
  ): Promise<ArticleModel> {
    const { title, content, subTitle } = articleData;
    return this.articleService.createArticle({
      title,
      content,
      subTitle,
    });
  }
}
