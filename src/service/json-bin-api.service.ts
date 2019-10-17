import axios from 'axios';

class JsonBinApiService {
  private URL: string = 'https://api.jsonbin.io/b/5da8ad39fb450e0b9ca02544';
  private secretKey: string = '$2b$10$x0A6e6aR.StCfUqBJh6D/OtCKMAsozGED4nZ7humT7qErejJu0S9W';

  public getJsonBinObject () {
    return axios.get(`${this.URL}/latest`, {
      headers: {
        'secret-key': this.secretKey,
      }
    }).then(r => r.data);
  }

  public setJsonBinObject (object: any) {
    return axios.put(this.URL, object, {
      headers: {
        "Content-Type": "application/json",
        "secret-key": this.secretKey,
      }
    })
  }
}

export const jsonBinApi = new JsonBinApiService();
