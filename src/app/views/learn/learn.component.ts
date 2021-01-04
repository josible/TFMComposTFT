import { Component, OnInit } from '@angular/core';
import {StreamersI} from '../../models/streamers.interfase';
import {CompostftapiService} from '../../services/api/compostftapi.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  streamers:StreamersI[];
  constructor(private api:CompostftapiService) { }

  ngOnInit(): void {
    this.activeStreamers();
  }
  activeStreamers(){
    // Comprobamos si el usuario tiene composiciones
    this.api.getAllStreamers().subscribe(data => {
      this.streamers = data;
      console.log(data);
    });

  }

}
