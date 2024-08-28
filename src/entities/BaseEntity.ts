import { PrismaClient } from '@prisma/client';

export class BaseEntity<
  T,
  FindUniqueArgs,
  FindManyArgs,
  CreateArgs,
  UpdateArgs,
  DeleteArgs,
> {
  protected prisma: PrismaClient;
  protected modelClient: any;

  constructor(prisma: PrismaClient, modelClient: any) {
    this.prisma = prisma;
    this.modelClient = modelClient;
  }

  async findOne(params: FindUniqueArgs): Promise<T | null> {
    return this.modelClient.findUnique(params);
  }

  async findMany(params: FindManyArgs): Promise<T[]> {
    return this.modelClient.findMany(params);
  }

  async create(data: CreateArgs): Promise<T> {
    return this.modelClient.create(data);
  }

  async update(params: UpdateArgs): Promise<T> {
    return this.modelClient.update(params);
  }

  async delete(params: DeleteArgs): Promise<T> {
    return this.modelClient.delete(params);
  }
}
