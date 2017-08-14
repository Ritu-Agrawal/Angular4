import { Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Guest } from '../models/guest';
import { url } from '../constants/url.constants';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


export class GuestService {

    constructor( @Inject(Http) public http: Http) {
    }

    getAllGuests(): Observable<Guest[]> {
        return this.http.get(url.guestUrl)
            .map((response: Response) => {
                return response.json() as Guest[];
            });
    }
    addGuest(guest: Guest): Observable<Guest> {
        let bodyString = JSON.stringify(guest);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions(headers);
        return this.http.post(url.guestAddUrl, bodyString, options)
            .map((response: Response) => {
                return response.json() as Guest;
            })
    }
}