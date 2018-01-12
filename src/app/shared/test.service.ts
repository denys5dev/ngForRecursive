import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TestService {
    /**
     *
     */

    root = 'https://jsonplaceholder.typicode.com';

    constructor(private _http: Http) {
        
    }

    getTestData() {
        return this._http.get(this.root + '/posts/').map(res => res.json());
    }
}