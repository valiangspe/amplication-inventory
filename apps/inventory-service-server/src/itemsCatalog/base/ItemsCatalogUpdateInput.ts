/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TransactionsUpdateManyWithoutItemsCatalogsInput } from "./TransactionsUpdateManyWithoutItemsCatalogsInput";
import { Type } from "class-transformer";

@InputType()
class ItemsCatalogUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sku?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionsUpdateManyWithoutItemsCatalogsInput,
  })
  @ValidateNested()
  @Type(() => TransactionsUpdateManyWithoutItemsCatalogsInput)
  @IsOptional()
  @Field(() => TransactionsUpdateManyWithoutItemsCatalogsInput, {
    nullable: true,
  })
  transactionsItems?: TransactionsUpdateManyWithoutItemsCatalogsInput;
}

export { ItemsCatalogUpdateInput as ItemsCatalogUpdateInput };