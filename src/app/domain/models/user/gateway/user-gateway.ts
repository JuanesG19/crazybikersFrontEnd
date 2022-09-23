import { Observable } from 'rxjs';
import {User} from '../user.model';

export abstract class UserGateway {
  abstract create(users: User): Observable<void>;
  abstract update(users: User): Observable<void>;
  abstract delete(id: string): Observable<Boolean>;
  abstract findById(id: string): Observable<User>;
  abstract findAll(): Observable<Array<User>>;
}