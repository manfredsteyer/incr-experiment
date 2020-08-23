import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Entity92} from '../entities/entity92';

@Injectable({ providedIn: 'root' })
export class Entity92DataService {

    constructor(private http: HttpClient) {
    }

    load(): Observable<Entity92[]> {

        // Uncomment if needed
        /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Entity92[]>(url, {params, headers});
        */
        
        return of([
            {id: 1, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet'},
            {id: 2, name: 'At vero eos', description: 'At vero eos et accusam et justo duo dolores'},
            {id: 3, name: 'Duis autem', description: 'Duis autem vel eum iriure dolor in hendrerit'},
        ]);
      }
}