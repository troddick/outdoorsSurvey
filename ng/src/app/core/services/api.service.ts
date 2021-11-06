import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient) { }
    baseUrl = 'http://localhost:8080/api';

    getAll<T>(path: string): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}${path}`);
    }

    getSingle<T>(path: string, id: number): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}${path}/${id}`);
    }

    add<T>(path: string, item: T): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}${path}`, item);
    }

    update<T>(path: string, id: number, item: T): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}${path}/${id}`, item);
    }
    delete<T>(path: string, id: number): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}${path}/${id}`);
    }

}
