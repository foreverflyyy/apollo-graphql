import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloGatewayDriver, ApolloGatewayDriverConfig} from "@nestjs/apollo";
import {IntrospectAndCompose} from "@apollo/gateway";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        /*cors: true,*/
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: 'users',
              url: 'http://localhost:3001/graphql'
            },
            {
              name: 'posts',
              url: 'http://localhost:3002/graphql'
            },
          ]
        }),
      }
    }),
    AuthModule,
  ],
})
export class AppModule {}