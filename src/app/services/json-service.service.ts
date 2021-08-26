import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  constructor(private http:HttpClient) { 
  }
  getStreamers():Observable<any>{    
    let primaryObject = this.http.get("../../../assets/data/streamers.json");
    return primaryObject;

  }

    
  
    
  
}
