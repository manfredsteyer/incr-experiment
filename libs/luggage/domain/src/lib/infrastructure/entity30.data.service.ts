import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Entity30} from '../entities/entity30';

@Injectable({ providedIn: 'root' })
export class Entity30DataService {

    constructor(private http: HttpClient) {
    }

    load(): Observable<Entity30[]> {

        // Uncomment if needed
        /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Entity30[]>(url, {params, headers});
        */
        
        return of([
            {id: 1, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet'},
            {id: 2, name: 'At vero eos', description: 'At vero eos et accusam et justo duo dolores'},
            {id: 3, name: 'Duis autem', description: 'Duis autem vel eum iriure dolor in hendrerit'},
        ]);
      }
}