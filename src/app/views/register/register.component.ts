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
    password : new FormControl('',Validators.required)
  })
  responseLog:ResponseI;
  constructor(private api:CompostftapiService,private router:Router) { }

  ngOnInit(): void {
  }
  onRegister(form:RegisterI){    
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