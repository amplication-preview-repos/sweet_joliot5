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
import { DataCreateNestedManyWithoutMetadataItemsInput } from "./DataCreateNestedManyWithoutMetadataItemsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MetadataCreateInput {
  @ApiProperty({
    required: false,
    type: () => DataCreateNestedManyWithoutMetadataItemsInput,
  })
  @ValidateNested()
  @Type(() => DataCreateNestedManyWithoutMetadataItemsInput)
  @IsOptional()
  @Field(() => DataCreateNestedManyWithoutMetadataItemsInput, {
    nullable: true,
  })
  dataItems?: DataCreateNestedManyWithoutMetadataItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  key?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  metaKey?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  metaValue?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  value?: string | null;
}

export { MetadataCreateInput as MetadataCreateInput };
