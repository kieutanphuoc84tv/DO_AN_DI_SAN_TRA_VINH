/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Site extends Document {
  @Prop({ required: true, unique: true })
  declare id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop()
  description: string;

  @Prop()
  location: string;

  @Prop()
  established: string;

  @Prop()
  recognition: string;

  @Prop({ type: Object })
  details: Record<string, any>;
}

export const SiteSchema = SchemaFactory.createForClass(Site);
