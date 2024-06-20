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
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Data } from "./Data";
import { DataCountArgs } from "./DataCountArgs";
import { DataFindManyArgs } from "./DataFindManyArgs";
import { DataFindUniqueArgs } from "./DataFindUniqueArgs";
import { CreateDataArgs } from "./CreateDataArgs";
import { UpdateDataArgs } from "./UpdateDataArgs";
import { DeleteDataArgs } from "./DeleteDataArgs";
import { Metadata } from "../../metadata/base/Metadata";
import { DataService } from "../data.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Data)
export class DataResolverBase {
  constructor(
    protected readonly service: DataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "read",
    possession: "any",
  })
  async _dataItemsMeta(
    @graphql.Args() args: DataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Data])
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "read",
    possession: "any",
  })
  async dataItems(@graphql.Args() args: DataFindManyArgs): Promise<Data[]> {
    return this.service.dataItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Data, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "read",
    possession: "own",
  })
  async data(@graphql.Args() args: DataFindUniqueArgs): Promise<Data | null> {
    const result = await this.service.data(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Data)
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "create",
    possession: "any",
  })
  async createData(@graphql.Args() args: CreateDataArgs): Promise<Data> {
    return await this.service.createData({
      ...args,
      data: {
        ...args.data,

        metadata: args.data.metadata
          ? {
              connect: args.data.metadata,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Data)
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "update",
    possession: "any",
  })
  async updateData(@graphql.Args() args: UpdateDataArgs): Promise<Data | null> {
    try {
      return await this.service.updateData({
        ...args,
        data: {
          ...args.data,

          metadata: args.data.metadata
            ? {
                connect: args.data.metadata,
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

  @graphql.Mutation(() => Data)
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "delete",
    possession: "any",
  })
  async deleteData(@graphql.Args() args: DeleteDataArgs): Promise<Data | null> {
    try {
      return await this.service.deleteData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Metadata, {
    nullable: true,
    name: "metadata",
  })
  @nestAccessControl.UseRoles({
    resource: "Metadata",
    action: "read",
    possession: "any",
  })
  async getMetadata(@graphql.Parent() parent: Data): Promise<Metadata | null> {
    const result = await this.service.getMetadata(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
