import { PrismaClient, User, Prisma } from '@prisma/client';
import { BaseEntity } from './BaseEntity';

class UserEntity extends BaseEntity<
  User,
  Prisma.UserFindUniqueArgs,
  Prisma.UserFindManyArgs,
  Prisma.UserCreateArgs,
  Prisma.UserUpdateArgs,
  Prisma.UserDeleteArgs
> {
  constructor(prisma: PrismaClient) {
    super(prisma, prisma.user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({
      where: { email },
    });
  }
}

export const userEntity = new UserEntity(new PrismaClient());
