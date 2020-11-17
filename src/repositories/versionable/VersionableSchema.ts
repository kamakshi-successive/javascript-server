import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(schema: any, options: any) {
    const baseSchema = {
      ...schema,
      createdAt: {
        type: Date,
        default: Date.now
      },
      originalId: String,
      updatedAt: Date,
      createdBy: String,
      deletedBy: String,
      updatedBy: String,
      deletedAt: Date
    };
    super(baseSchema, options);
  }
}
