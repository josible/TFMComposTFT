import { Injectable } from '@angular/core';
import { LoginI} from '../../models/login.interface';
import { ChampsI} from '../../models/champs.interface';
import { CompsI} from '../../models/comps.interface'
import { ResponseI} from '../../models/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, observable} from 'rxjs';
import { CompsForShowI} from '../../models/compsForShow.interface'
import {  CompsUserI} from '../../models/compsUser.interface'
@Injectable({
  providedIn: 'root'
})
export class CompostftapiService {

  url:string = "https://eimtcms.eimt.uoc.edu/~josible/compostftapi/index.php/Comps/";
  constructor(private http:HttpClient) { }
  loginMail(form:LoginI):Observable<ResponseI>{
    let ws = this.url + "login_post"
    return this.http.post<ResponseI>(ws,form);
  }
  register(form:LoginI):Observable<ResponseI>{
    let ws = this.url + "register_post"
    return this.http.post<ResponseI>(ws,form);
  }
  getAllChamps():Observable<ChampsI[]>{
    let ws = this.url + "champs";
    return this.http.get<ChampsI[]>(ws);

  }
  getCompsTier():Observable<CompsI[]>{
    let ws = this.url + "compsTier";
    let primaryObject = this.http.get<CompsI[]>(ws);
    return primaryObject;

  }
  getCompsForShow():Observable<CompsForShowI[]>{
    let ws = this.url + "compsForShow";
    let primaryObject = this.http.get<CompsForShowI[]>(ws);
    return primaryObject;

  }
  getCompsUser(userObject:JSON):Observable<CompsUserI[]>{
    let ws = this.url + "compsUser";
    let primaryObject = this.http.post<CompsUserI[]>(ws,userObject);
    return primaryObject;

  }
  NewCompsUser(newComp:CompsUserI):Observable<ResponseI>{
    let ws = this.url + "newCompsUser";
    return this.http.post<ResponseI>(ws,newComp);

  }

  
}
