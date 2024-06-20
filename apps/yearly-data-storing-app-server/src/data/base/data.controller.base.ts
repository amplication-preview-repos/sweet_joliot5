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
import { DataService } from "../data.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DataCreateInput } from "./DataCreateInput";
import { Data } from "./Data";
import { DataFindManyArgs } from "./DataFindManyArgs";
import { DataWhereUniqueInput } from "./DataWhereUniqueInput";
import { DataUpdateInput } from "./DataUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DataControllerBase {
  constructor(
    protected readonly service: DataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Data })
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: DataCreateInput,
  })
  async createData(@common.Body() data: DataCreateInput): Promise<Data> {
    return await this.service.createData({
      data: {
        ...data,

        metadata: data.metadata
          ? {
              connect: data.metadata,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Data] })
  @ApiNestedQuery(DataFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dataItems(@common.Req() request: Request): Promise<Data[]> {
    const args = plainToClass(DataFindManyArgs, request.query);
    return this.service.dataItems({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Data })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async data(
    @common.Param() params: DataWhereUniqueInput
  ): Promise<Data | null> {
    const result = await this.service.data({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Data })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: DataUpdateInput,
  })
  async updateData(
    @common.Param() params: DataWhereUniqueInput,
    @common.Body() data: DataUpdateInput
  ): Promise<Data | null> {
    try {
      return await this.service.updateData({
        where: params,
        data: {
          ...data,

          metadata: data.metadata
            ? {
                connect: data.metadata,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Data })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Data",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteData(
    @common.Param() params: DataWhereUniqueInput
  ): Promise<Data | null> {
    try {
      return await this.service.deleteData({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
