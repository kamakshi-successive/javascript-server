import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
import * as bcrypt from 'bcrypt';
import VersionableRepository from '../versionable/VersioningRepository';
import IUserCreate from '../entities/IUserCreate';
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(userModel);
    }

    public create(data: IUserCreate) {
      return super.create(data);
    }

    public update(id, data) {
      return super.update(id, data);
    }
    public get(skip, limit, sortby) {
      return super.get(skip, limit, sortby);
    }

    public delete(id) {
      return super.delete(id);
    }
    public findone(data) {
        return super.findOne(data);
    }

    public countData() {
        return super.count();
    }
}
