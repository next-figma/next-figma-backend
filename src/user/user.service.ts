import { User } from "./user.model";
import { IUser } from "./user.types";

export class UserService {
  async getAllUsers(): Promise<IUser[]> {
    return await User.find();
  }
}
