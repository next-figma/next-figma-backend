import { User } from "./user.model";
import { IUser } from "./user.types";

export class UserService {
  async getAllUsers(): Promise<IUser[]> {
    return await User.find();
  }

  async updateUser(id: string, updatedData: Partial<IUser>): Promise<IUser> {
    const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });
  
    if (!updatedUser) {
      throw new Error("User not found");
    }
  
    return updatedUser;
  }
}
