import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ApiService  { 


  constructor(private http: Http) { }

    key= 'ASHWLIkouP2O6_bgA2wWReRhletgWKHYjLqDaqb0LFfamim9RjexTo22ujRIP_cjLiRiSyQXyt2kM1eXU2XLFZQ0Hro15HikJQT_eNeT_9XQ';

    callFigo() : Promise<any>{
        
        const headers = new Headers();
        headers.append('Authorization', 'Bearer '+this.key);
    
        const urlsearchParams = new URLSearchParams();

        const requestOptions = new RequestOptions({
          headers: headers, 
          search: urlsearchParams
        });
  
        const url = 'https://api.figo.me/rest/accounts';
  
        const promise = this.http.get(url, requestOptions).toPromise();
    
       return promise.then(response => response.json()).catch(this.handleError); 
    }


private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
