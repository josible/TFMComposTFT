import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {CompostftapiService} from '../../services/api/compostftapi.service';
import {LoginI} from '../../models/login.interface';
import {ResponseI} from '../../models/response.interface';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  responseLog:ResponseI;
  constructor(private api:CompostftapiService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(form:LoginI){   
    var flagVerification =this.formVerification(form); 
    if(flagVerification){    
    this.api.loginMail(form).subscribe(data => {
      this.responseLog = data;
      if(this.responseLog != null){
        //Guardamos el objeto en local
        localStorage.setItem('datos', JSON.stringify(this.responseLog));        
        this.router.navigate(['/dashboard']);
      }
      else{this.changeText("Usuario o contraseña incorrectos")}
      //console.log(this.responseLog);
    });
  }
  }
  formVerification(form:LoginI){
    if(form.password == ""){
        this.changeText("Debe introducir password");
        return 0;
      }
    else if(form.usuario == ""){
      this.changeText("Debe introducir usuario");
      return 0;
    }
    else {return 1;}
  }
  changeText($textForShow){
    document.getElementById("errorHeader").innerHTML = $textForShow;
  } 
  
}
