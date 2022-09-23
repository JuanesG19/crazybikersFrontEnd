import { Injectable } from '@angular/core';
import { User } from '../models/user/user.model';
import { UserGateway } from '../models/user/gateway/user-gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class getUserUseCase {
  constructor(private userGateway: UserGateway) {}

  //create(users: User): Observable<void> {}
  //update(users: User): Observable<void> {}

  delete(id: string): Observable<Boolean> {
    return this.userGateway.delete(id);
  }

  findById(id: string): Observable<User> {
    return this.userGateway.findById(id);
  }

  findAll(): Observable<Array<User>> {
    return this.userGateway.findAll();
  }
}
