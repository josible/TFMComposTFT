import { Component, OnInit } from '@angular/core';
import {CompostftapiService} from '../../services/api/compostftapi.service';
import {CompsI} from '../../models/comps.interface';
import {CompsForShowI} from '../../models/compsForShow.interface'
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  comps:CompsForShowI[];
  constructor(private api:CompostftapiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getCompsForShow().subscribe(data => {
      this.comps = data;
      console.log(this.comps);
    });
    
    
  }
  

}
