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
      var log = document.getElementById("log");
      log.innerHTML= guardado[0]['UserName'];
      log.setAttribute("href","/dashboard");
      var powerOff = document.getElementById("powerOff");
      powerOff.style.display = "block"

     /* // Ahora añadimos el logoff
      var headerUL = document.getElementById("headerUl");
      var li = document.createElement("li");
      li.setAttribute("class","nav-item")
      var a = document.createElement("a");
      a.setAttribute("id","logOff");
      a.setAttribute("class","nav-link");
      a.setAttribute("href","/dashboard");
      a.innerHTML = "Desconectar";
      li.appendChild(a);
      headerUL.appendChild(li);*/
      

      //document.getElementById("log").innerHTML = guardado[0]['UserName'];
    }
    
  }
logOff(){
  // Eliminamos el local storage
  localStorage.removeItem('datos');
  // Ocultamos el icono
  var powerOff = document.getElementById("powerOff");
      powerOff.style.display = "none"
  // Redirigimos a home
  this.router.navigate(['/home']);
}
}
