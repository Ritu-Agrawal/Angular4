import { Inject } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Foo } from '../models/foo';
import { url } from '../constants/url.constants';

export class TestService {
    getUrl: string;
    constructor( @Inject(Http) public http: Http) {
        this.getUrl = url.testUrl;
    }
    getTest(): Observable<Foo> {
        return this.http.get(this.getUrl)
            .map((response: Response) => {
                return response.json() as Foo;
            })
    }
}