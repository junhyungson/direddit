import { Entity, PrimaryKey, Property, OptionalProps } from '@mikro-orm/core';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int)
  @PrimaryKey()
  _id!: number;

  [OptionalProps]?: 'updatedAt' | 'createdAt';
  @Field(() => String)
  @Property({ type: 'date' })
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property({ type: 'text' })
  title!: string;
}

// field exposes the mikro-orm property into type-graphql schema where
// this entity will be converted to type-graphql objecttype
