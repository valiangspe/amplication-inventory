/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ItemsCatalogWhereUniqueInput } from "./ItemsCatalogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ItemsCatalogUpdateInput } from "./ItemsCatalogUpdateInput";

@ArgsType()
class UpdateItemsCatalogArgs {
  @ApiProperty({
    required: true,
    type: () => ItemsCatalogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItemsCatalogWhereUniqueInput)
  @Field(() => ItemsCatalogWhereUniqueInput, { nullable: false })
  where!: ItemsCatalogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ItemsCatalogUpdateInput,
  })
  @ValidateNested()
  @Type(() => ItemsCatalogUpdateInput)
  @Field(() => ItemsCatalogUpdateInput, { nullable: false })
  data!: ItemsCatalogUpdateInput;
}

export { UpdateItemsCatalogArgs as UpdateItemsCatalogArgs };
