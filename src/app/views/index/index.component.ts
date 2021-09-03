import { Component, OnInit } from '@angular/core';
import {JsonServiceService} from '../../services/json-service.service';
import{HttpClient} from '@angular/common/http';
import{StreamerI}from '../../models/streamer.interface'
import{CompoI} from '../../models/compos.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public jsonCall:JsonServiceService) { }
  streamers:StreamerI[];
  compos:CompoI[];
  ngOnInit():void {
    this.jsonCall.getStreamers().subscribe(data => {
      this.streamers = data;   
   });
   this.jsonCall.getComps().subscribe(data => {
    this.compos = data; 
 });

  }

}
