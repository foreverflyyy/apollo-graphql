import {InputType, Field, ID} from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => ID)
  id: string;

  @Field()
  authorId: string;

  @Field()
  body: string;
}
