import { Component, OnInit } from '@angular/core';
import {JsonServiceService} from '../../services/json-service.service';
import{HttpClient} from '@angular/common/http';
import{StreamerI}from '../../models/streamer.interface'
import{CompoI} from '../../models/compos.interface';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  title = 'ng-bootstrap-modal-demo';
  closeResult: string;

  constructor(public jsonCall:JsonServiceService ,private modalService: NgbModal) {}
  streamers:StreamerI[];
  compos:CompoI[];
  filterComps:CompoI[];
  ngOnInit():void {
    this.jsonCall.getStreamers().subscribe(data => {
      this.streamers = data;   
        });
        this.jsonCall.getComps().subscribe(data => {
          this.compos = data; 
      });
  }
  openTest(image,content){
    console.log(image);

  }

  open(content,img) {
    
    this.filterData(img);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  filterData(idComp) {
    this.filterComps = this.compos.filter(object => {
      return object['IDComp'] == idComp;
       
    });
    
  }

  
  

  

}

