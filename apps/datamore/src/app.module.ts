import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { OrganizationModule } from "./organization/organization.module";
import { WorkspaceModule } from "./workspace/workspace.module";
import { QlikIntegrationModule } from "./qlikIntegration/qlikIntegration.module";
import { UserConfigModule } from "./userConfig/userConfig.module";
import { UserVerificationCodeModule } from "./userVerificationCode/userVerificationCode.module";
import { OrganizationsWorkspaceModule } from "./organizationsWorkspace/organizationsWorkspace.module";
import { UsersWorkspaceModule } from "./usersWorkspace/usersWorkspace.module";
import { QlikWorkspaceModule } from "./qlikWorkspace/qlikWorkspace.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    OrganizationModule,
    WorkspaceModule,
    QlikIntegrationModule,
    UserConfigModule,
    UserVerificationCodeModule,
    OrganizationsWorkspaceModule,
    UsersWorkspaceModule,
    QlikWorkspaceModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
