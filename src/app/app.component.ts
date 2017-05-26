import { Component } from '@angular/core';
import { ApiService } from './api/api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {


  result: any;
   constructor (private service: ApiService) {
    this.service.callFigo().then(a => this.result = a).catch(a => this.result = 'Error ' + a);
    }
 }
