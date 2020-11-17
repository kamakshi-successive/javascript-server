import * as mongoose from 'mongoose';

export default interface IVersionableDocumnet extends mongoose.Document {

    deletedAt: Date;
    originalId: string;
    createdAt: Date;
    updatedAt: Date;
    updatedBy: string;
    createdBy: string;
    deletedBy: string;
}
