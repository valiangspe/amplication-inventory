/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Transactions } from "./Transactions";
import { TransactionsCountArgs } from "./TransactionsCountArgs";
import { TransactionsFindManyArgs } from "./TransactionsFindManyArgs";
import { TransactionsFindUniqueArgs } from "./TransactionsFindUniqueArgs";
import { CreateTransactionsArgs } from "./CreateTransactionsArgs";
import { UpdateTransactionsArgs } from "./UpdateTransactionsArgs";
import { DeleteTransactionsArgs } from "./DeleteTransactionsArgs";
import { ItemsCatalog } from "../../itemsCatalog/base/ItemsCatalog";
import { Warehouse } from "../../warehouse/base/Warehouse";
import { TransactionsService } from "../transactions.service";
@graphql.Resolver(() => Transactions)
export class TransactionsResolverBase {
  constructor(protected readonly service: TransactionsService) {}

  async _transactionsItemsMeta(
    @graphql.Args() args: TransactionsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Transactions])
  async transactionsItems(
    @graphql.Args() args: TransactionsFindManyArgs
  ): Promise<Transactions[]> {
    return this.service.transactionsItems(args);
  }

  @graphql.Query(() => Transactions, { nullable: true })
  async transactions(
    @graphql.Args() args: TransactionsFindUniqueArgs
  ): Promise<Transactions | null> {
    const result = await this.service.transactions(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Transactions)
  async createTransactions(
    @graphql.Args() args: CreateTransactionsArgs
  ): Promise<Transactions> {
    return await this.service.createTransactions({
      ...args,
      data: {
        ...args.data,

        itemsCatalog: args.data.itemsCatalog
          ? {
              connect: args.data.itemsCatalog,
            }
          : undefined,

        warehouse: args.data.warehouse
          ? {
              connect: args.data.warehouse,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Transactions)
  async updateTransactions(
    @graphql.Args() args: UpdateTransactionsArgs
  ): Promise<Transactions | null> {
    try {
      return await this.service.updateTransactions({
        ...args,
        data: {
          ...args.data,

          itemsCatalog: args.data.itemsCatalog
            ? {
                connect: args.data.itemsCatalog,
              }
            : undefined,

          warehouse: args.data.warehouse
            ? {
                connect: args.data.warehouse,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Transactions)
  async deleteTransactions(
    @graphql.Args() args: DeleteTransactionsArgs
  ): Promise<Transactions | null> {
    try {
      return await this.service.deleteTransactions(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => ItemsCatalog, {
    nullable: true,
    name: "itemsCatalog",
  })
  async getItemsCatalog(
    @graphql.Parent() parent: Transactions
  ): Promise<ItemsCatalog | null> {
    const result = await this.service.getItemsCatalog(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Warehouse, {
    nullable: true,
    name: "warehouse",
  })
  async getWarehouse(
    @graphql.Parent() parent: Transactions
  ): Promise<Warehouse | null> {
    const result = await this.service.getWarehouse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}