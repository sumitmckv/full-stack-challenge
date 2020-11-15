import { Document, model, Schema } from 'mongoose';

export interface ICompany {
  name: string;
  city: string;
  state: string;
  description: string;
  founded?: Date;
  founders: string[];
}

export interface ICompanyDoc extends Document, ICompany {}

export const CompanySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    founded: {
      type: Date,
      default: null,
    },
    founders: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Founder',
      },
    ],
  },
  { timestamps: true }
);

export default model<ICompanyDoc>('Company', CompanySchema);
