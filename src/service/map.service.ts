import {IUser, User} from "./users.model";

class MapService {
  mappingUser (user: IUser) {
    const newUser = new User();
    newUser.id = user.id;
    newUser.email = user.email;
    newUser.firstName = user.first_name;
    newUser.lastName= user.last_name;
    newUser.avatar = user.avatar;
    return newUser;
  }
}

export const mapService = new MapService();
