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
import { ItemsCatalogWhereInput } from "./ItemsCatalogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ItemsCatalogOrderByInput } from "./ItemsCatalogOrderByInput";

@ArgsType()
class ItemsCatalogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ItemsCatalogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ItemsCatalogWhereInput, { nullable: true })
  @Type(() => ItemsCatalogWhereInput)
  where?: ItemsCatalogWhereInput;

  @ApiProperty({
    required: false,
    type: [ItemsCatalogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ItemsCatalogOrderByInput], { nullable: true })
  @Type(() => ItemsCatalogOrderByInput)
  orderBy?: Array<ItemsCatalogOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ItemsCatalogFindManyArgs as ItemsCatalogFindManyArgs };
