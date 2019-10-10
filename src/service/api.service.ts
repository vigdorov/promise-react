import axios, {AxiosResponse} from 'axios';
import {IData, User} from "./users.model";
import { mapService } from "./map.service";

class ApiService {
  private URL: string = 'https://reqres.in/api';

  public getUser (userId: number): Promise<User> {
    const url = `${this.getUserUrl()}/${userId}`;
    return axios.get<IData>(url)
      .then((response: AxiosResponse<IData>) => {
        return mapService.mappingUser(response.data.data);
      });
  }

  protected getUserUrl () {
    return `${this.URL}/users`;
  }
}

export const api = new ApiService();
