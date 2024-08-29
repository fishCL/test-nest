import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article as ArticleModel } from '@prisma/client';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

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
  @Patch(':id')
  async updateArticle(
    @Body()
    articleData: {
      title?: string;
      content?: string;
      subTitle?: string;
      published?: boolean;
    },
    @Param('id') id: number,
  ): Promise<ArticleModel> {
    return this.articleService.updateArticle(articleData, id);
  }

  @Get('list')
  async getArticleList(): Promise<ArticleModel[]> {
    return this.articleService.getArticles({
      where: { published: true },
    });
  }
  @Get(':id')
  async getArticle(@Param('id') id: string): Promise<ArticleModel> {
    return this.articleService.getArticle({ id: Number(id) });
  }
}
