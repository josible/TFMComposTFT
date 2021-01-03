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
      this.changeText(logUser[0]['UserName'] + " composiciones");
      this.compsVerification(logUser);
    }
  }
  compsVerification(logUser){
    // Comprobamos si el usuario tiene composiciones
    this.api.getCompsUser(logUser).subscribe(data => {
      this.comps = data;
      console.log(data);
    });


    // Si no encontramos ninguna pondremos un mensaje

    // En caso de tenerlas las mostraremos

  }
  changeText($textForShow){
    document.getElementById("title").innerHTML = $textForShow;
  }
}
