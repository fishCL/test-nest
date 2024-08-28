import { PrismaClient, Article, Prisma } from '@prisma/client';
import { BaseEntity } from './BaseEntity';

class ArticleEntity extends BaseEntity<
  Article,
  Prisma.UserFindUniqueArgs,
  Prisma.UserFindManyArgs,
  Prisma.UserCreateArgs,
  Prisma.UserUpdateArgs,
  Prisma.UserDeleteArgs
> {
  constructor(prisma: PrismaClient) {
    super(prisma, prisma.user);
  }

  async findByEmail(id: number): Promise<Article | null> {
    return this.findOne({
      where: { id },
    });
  }
}

export const userEntity = new ArticleEntity(new PrismaClient());
