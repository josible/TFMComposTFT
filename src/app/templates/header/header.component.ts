import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userVerification();
  }
  userVerification(){
    //Obtenemos el objeto de usuario
    var guardado = JSON.parse(localStorage.getItem('datos'));    
    if(guardado){
      this.changeNavAfterLogin("dashboard",guardado[0]['UserName']);
      var powerOff = document.getElementById("powerOff");
      powerOff.style.display = "block"
    }
    
  }
logOff(){
  // Eliminamos el local storage
  localStorage.removeItem('datos');
  // Ocultamos el icono
  var powerOff = document.getElementById("powerOff");
      powerOff.style.display = "none"
  // Volvemos a poner acceso a Log
  this.changeNavAfterLogin("Login","login");
  // Redirigimos a home
  this.router.navigate(['/']);
}

changeNavAfterLogin(redirect,name){
  var log = document.getElementById("log");
  log.innerHTML= name;
  log.setAttribute("href","/" + redirect);

}

changeActiveNav(navId){
  var nav = document.getElementById(navId);
  //nav.setAttribute("class","active");
  console.log(nav)
}
}
