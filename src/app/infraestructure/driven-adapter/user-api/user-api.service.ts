import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/user/gateway/user-gateway';
import { User } from 'src/app/domain/models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService extends UserGateway {
  private API_SERVER = 'http://localhost:8080/api/v1/estado/';

  constructor(private httpClient: HttpClient) {
    super();
  }

  public create(users: User): Observable<void> {
    return this.httpClient.post<void>(this.API_SERVER, users);
  }

  public update(users: User): Observable<void> {
    return this.httpClient.post<void>(this.API_SERVER, users);
  }

  public delete(id: string): Observable<Boolean> {
    return this.httpClient.delete<Boolean>(this.API_SERVER + '/' + id);
  }

  public findById(id: string): Observable<User> {
    return this.httpClient.get<User>(this.API_SERVER + '/' + id);
  }

  public findAll(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.API_SERVER);
  }

  public login(email: string, password: string): Observable<Boolean> {
    let objeto = {
      emailLogin: email,
      passwordLogin: password,
    };

    return this.httpClient.post<Boolean>(this.API_SERVER, objeto);
  }
}
