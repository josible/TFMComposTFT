import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import {CompostftapiService} from '../../services/api/compostftapi.service';
import {ResponseI} from '../../models/response.interface';
import { Router} from '@angular/router';
import { RegisterI} from '../../models/register.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    email2: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    password2 : new FormControl('',Validators.required)
  })
  responseLog:ResponseI;
  constructor(private api:CompostftapiService,private router:Router) { }

  ngOnInit(): void {
  }
  onRegister(form:RegisterI){  
    var validateOk = this.validateRegister(form);  
    if(validateOk){
      this.api.register(form).subscribe(data => {
        this.responseLog = data;
        if(this.responseLog != null){   
          this.router.navigate(['/login']);
        }
        else{console.log("NOK")}
        console.log(this.responseLog);
      });
    }
  }
validateRegister(form:RegisterI){
  // Comprobamos que los mails sean idénticos
  if(form.email != form.email2){this.changeText("Debe indicar el mismo mail en ambos campos"); return 0}
  else if(form.password != form.password2){this.changeText("Las contraseñas no coinciden"); return 0}
  else if(form.usuario == ""){this.changeText("Debe indicar un nombre de usuario"); return 0}
  else return 1;
}
changeText($textForShow){
  document.getElementById("errorHeader").innerHTML = $textForShow;
} 
}