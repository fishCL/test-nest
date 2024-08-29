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
  async updateArticle(
    data: Prisma.ArticleUpdateInput,
    id: number,
  ): Promise<Article> {
    return this.prisma.article.update({
      where: { id: Number(id) },
      data,
    });
  }
  async getArticles(params: {
    where?: Prisma.ArticleWhereInput;
  }): Promise<Article[]> {
    const { where } = params;
    console.log('getArticles-----', where);
    return this.prisma.article.findMany({
      where,
    });
  }
}
