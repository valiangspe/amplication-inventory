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
import { ItemsCatalog } from "./ItemsCatalog";
import { ItemsCatalogCountArgs } from "./ItemsCatalogCountArgs";
import { ItemsCatalogFindManyArgs } from "./ItemsCatalogFindManyArgs";
import { ItemsCatalogFindUniqueArgs } from "./ItemsCatalogFindUniqueArgs";
import { CreateItemsCatalogArgs } from "./CreateItemsCatalogArgs";
import { UpdateItemsCatalogArgs } from "./UpdateItemsCatalogArgs";
import { DeleteItemsCatalogArgs } from "./DeleteItemsCatalogArgs";
import { TransactionsFindManyArgs } from "../../transactions/base/TransactionsFindManyArgs";
import { Transactions } from "../../transactions/base/Transactions";
import { ItemsCatalogService } from "../itemsCatalog.service";
@graphql.Resolver(() => ItemsCatalog)
export class ItemsCatalogResolverBase {
  constructor(protected readonly service: ItemsCatalogService) {}

  async _itemsCatalogsMeta(
    @graphql.Args() args: ItemsCatalogCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ItemsCatalog])
  async itemsCatalogs(
    @graphql.Args() args: ItemsCatalogFindManyArgs
  ): Promise<ItemsCatalog[]> {
    return this.service.itemsCatalogs(args);
  }

  @graphql.Query(() => ItemsCatalog, { nullable: true })
  async itemsCatalog(
    @graphql.Args() args: ItemsCatalogFindUniqueArgs
  ): Promise<ItemsCatalog | null> {
    const result = await this.service.itemsCatalog(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ItemsCatalog)
  async createItemsCatalog(
    @graphql.Args() args: CreateItemsCatalogArgs
  ): Promise<ItemsCatalog> {
    return await this.service.createItemsCatalog({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ItemsCatalog)
  async updateItemsCatalog(
    @graphql.Args() args: UpdateItemsCatalogArgs
  ): Promise<ItemsCatalog | null> {
    try {
      return await this.service.updateItemsCatalog({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => ItemsCatalog)
  async deleteItemsCatalog(
    @graphql.Args() args: DeleteItemsCatalogArgs
  ): Promise<ItemsCatalog | null> {
    try {
      return await this.service.deleteItemsCatalog(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Transactions], { name: "transactionsItems" })
  async findTransactionsItems(
    @graphql.Parent() parent: ItemsCatalog,
    @graphql.Args() args: TransactionsFindManyArgs
  ): Promise<Transactions[]> {
    const results = await this.service.findTransactionsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
