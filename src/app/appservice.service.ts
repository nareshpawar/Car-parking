import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  private url = "http://appserver.preownedproperties.in:8080/propline-dev/api/"

  constructor( private httpClient: HttpClient) { }
  
  submitParkingDetails(finalObj : any){
     return this.httpClient.post<any>(this.url + "users/carparking", finalObj)
  }

  getDashboardData(){
    return this.httpClient.get<any>(this.url + "users/dashboard");
  }

}
