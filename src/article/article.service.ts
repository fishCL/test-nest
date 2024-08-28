import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Article, Prisma } from '@prisma/client';
@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}
  async getArticle(
    articleWhereUniqueInput: Prisma.ArticleWhereUniqueInput,
  ): Promise<Article | null> {
    return this.prisma.article.findUnique({ where: articleWhereUniqueInput });
  }
  async createArticle(data: Prisma.ArticleCreateInput): Promise<Article> {
    return this.prisma.article.create({
      data,
    });
  }
}
