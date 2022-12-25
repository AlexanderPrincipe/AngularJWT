import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaces';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private url = 'http://localhost:3000';

	constructor(private http: HttpClient) {}

	singIn(user: User) {
		return this.http.post(`${this.url}/user/login`, user);
	}
}
