import { Document, model, Schema } from 'mongoose';

export interface IFounder {
  name: string;
  email: string;
  title: string;
}

export interface IFounderDoc extends Document, IFounder {}

export const FounderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IFounderDoc>('Founder', FounderSchema);
