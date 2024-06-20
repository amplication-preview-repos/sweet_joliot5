/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MetadataService } from "../metadata.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MetadataCreateInput } from "./MetadataCreateInput";
import { Metadata } from "./Metadata";
import { MetadataFindManyArgs } from "./MetadataFindManyArgs";
import { MetadataWhereUniqueInput } from "./MetadataWhereUniqueInput";
import { MetadataUpdateInput } from "./MetadataUpdateInput";
import { DataFindManyArgs } from "../../data/base/DataFindManyArgs";
import { Data } from "../../data/base/Data";
import { DataWhereUniqueInput } from "../../data/base/DataWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MetadataControllerBase {
  constructor(
    protected readonly service: MetadataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Metadata })
  @nestAccessControl.UseRoles({
    resource: "Metadata",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MetadataCreateInput,
  })
  async createMetadata(
    @common.Body() data: MetadataCreateInput
  ): Promise<Metadata> {
    return await this.service.createMetadata({
      data: data,
      select: {
        createdAt: true,
        id: true,
        key: true,
        metaKey: true,
        metaValue: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Metadata] })
  @ApiNestedQuery(MetadataFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Metadata",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async metadataItems(@common.Req() request: Request): Promise<Metadata[]> {
    const args = plainToClass(MetadataFindManyArgs, request.query);
    return this.service.metadataItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        key: true,
        metaKey: true,
        metaValue: true,
        updatedAt: true,
        value: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Metadata })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Metadata",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async metadata(
    @common.Param() params: MetadataWhereUniqueInput
  ): Promise<Metadata | null> {
    const result = await this.service.metadata({
      where: params,
      select: {
        createdAt: true,
        id: true,
        key: true,
        metaKey: true,
        metaValue: true,
        updatedAt: true,
        value: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Metadata })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Metadata",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: MetadataUpdateInput,
  })
  async updateMetadata(
    @common.Param() params: MetadataWhereUniqueInput,
    @common.Body() data: MetadataUpdateInput
  ): Promise<Metadata | null> {
    try {
      return await this.service.updateMetadata({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          key: true,
          metaKey: true,
          metaValue: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Metadata })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Metadata",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMetadata(
    @common.Param() params: MetadataWhereUniqueInput
  ): Promise<Metadata | null> {
    try {
      return await this.service.deleteMetadata({
        where: params,
        select: {
          createdAt: true,
          id: true,
          key: true,
          metaKey: true,
          metaValue: true,
          updatedAt: true,
          value: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/dataItems")
  @ApiNestedQuery(DataFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "read",
    possession: "any",
  })
  async findDataItems(
    @common.Req() request: Request,
    @common.Param() params: MetadataWhereUniqueInput
  ): Promise<Data[]> {
    const query = plainToClass(DataFindManyArgs, request.query);
    const results = await this.service.findDataItems(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,

        metadata: {
          select: {
            id: true,
          },
        },

        relatedMetadata: true,
        updatedAt: true,
        year: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/dataItems")
  @nestAccessControl.UseRoles({
    resource: "Metadata",
    action: "update",
    possession: "any",
  })
  async connectDataItems(
    @common.Param() params: MetadataWhereUniqueInput,
    @common.Body() body: DataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataItems: {
        connect: body,
      },
    };
    await this.service.updateMetadata({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/dataItems")
  @nestAccessControl.UseRoles({
    resource: "Metadata",
    action: "update",
    possession: "any",
  })
  async updateDataItems(
    @common.Param() params: MetadataWhereUniqueInput,
    @common.Body() body: DataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataItems: {
        set: body,
      },
    };
    await this.service.updateMetadata({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/dataItems")
  @nestAccessControl.UseRoles({
    resource: "Metadata",
    action: "update",
    possession: "any",
  })
  async disconnectDataItems(
    @common.Param() params: MetadataWhereUniqueInput,
    @common.Body() body: DataWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dataItems: {
        disconnect: body,
      },
    };
    await this.service.updateMetadata({
      where: params,
      data,
      select: { id: true },
    });
  }
}