import { Component, OnInit } from '@angular/core';
import { ResponseI} from '../../models/response.interface';
import {CompsUserI} from '../../models/compsUser.interface';
import {CompostftapiService} from '../../services/api/compostftapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  comps:CompsUserI[];
  constructor(private api:CompostftapiService) { }

  ngOnInit(): void {
    this.userVerification();
  }
  userVerification(){
    //Obtenemos el objeto de usuario
    var logUser = JSON.parse(localStorage.getItem('datos'));  
     
    if(!logUser){this.changeText("Acceso no permitido, diríjase al apartado de log");}
    else{
      this.changeText(logUser['UserName'] + " composiciones");
      //console.log(logUser); 
      this.compsUser(logUser);
    }
  }
  compsUser(logUser){
    // Comprobamos si el usuario tiene composiciones
    this.api.getCompsUser(logUser).subscribe(data => {
      this.comps = data;
      console.log(data);
    });

  }
  changeText($textForShow){
    document.getElementById("title").innerHTML = $textForShow;
  }
}
