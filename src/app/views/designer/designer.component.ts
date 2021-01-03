import { Component, OnInit } from '@angular/core';
import {CompostftapiService} from '../../services/api/compostftapi.service';
import{ChampsI} from '../../models/champs.interface';
import {Route, Router} from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {CompsUserI} from '../../models/compsUser.interface';
@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit {
  champs:ChampsI[];
  newComp:CompsUserI ={
    IDCompUser:"0",
    IDUSer:"0",
    CompName:"",
    champ1:"",
    champ2:"",
    champ3:"",
    champ4:"",
    champ5:"",
    champ6:"",
    champ7:"",
    champ8:"",
    champ9:""
  };
  
  constructor(private api:CompostftapiService, private router:Router) { }

  ngOnInit(): void {
    this.userVerification();
    this.api.getAllChamps().subscribe(data => {
      this.champs = data.slice(0,60);
    });
  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Domi'
  ];

  done = [/*'1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35'
*/];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    //this.countOrigins();
    
  }
  createInsert(inputCompName){
    var user = JSON.parse(localStorage.getItem('datos'));    
    this.newComp.IDUSer = user[0]['IDUser'];
    this.newComp.CompName = inputCompName;
    let numberChamp = 1
    for(let o of this.done){
      if(numberChamp == 1){this.newComp.champ1 = o['ChampName'];}
      else if (numberChamp == 2){this.newComp.champ2 = o['ChampName'];}
      else if (numberChamp == 3){this.newComp.champ3 = o['ChampName'];}
      else if (numberChamp == 4){this.newComp.champ4 = o['ChampName'];}
      else if (numberChamp == 5){this.newComp.champ5 = o['ChampName'];}
      else if (numberChamp == 6){this.newComp.champ6 = o['ChampName'];}
      else if (numberChamp == 7){this.newComp.champ7 = o['ChampName'];}
      else if (numberChamp == 8){this.newComp.champ8 = o['ChampName'];}
      else if (numberChamp == 9){this.newComp.champ9 = o['ChampName'];}

      numberChamp ++;
    } 
    
  }

createNewCompUser(inputCompName){  
  //this.countOrigins();
  // Comprobamos que el nombre de la composición no esté vacío
  if(inputCompName == ""){
    this.changeText("Es necesario indicar un nombre de composición","errorHeader");
  }
  else{
    // Creamos el objeto.
    this.createInsert(inputCompName);
    // Llamamos al ws para la inserción.
    this.api.NewCompsUser(JSON.parse(JSON.stringify(this.newComp))).subscribe(data => {
      console.log(data);
    });
    //Redireccionamos al dashboard
    this.router.navigate(['/dashboard']); 
  }
  
}

userVerification(){
  //Obtenemos el objeto de usuario
  var logUser = JSON.parse(localStorage.getItem('datos'));    
  if(!logUser){
    // Ocultaremos el span con el botón de guardado
    document.getElementById("saveComp").style.display = 'none';
    // Mostramos un mensaje en la parte superior
    this.changeText("Si creas una cuenta podrás guardar tus composiciones","titleDesigner");
  }  
}
changeText($textForShow,$element){
  document.getElementById($element).innerHTML = $textForShow;
} 
/*countOrigins(){
console.log(this.done);
var uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
var count = {};
uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(count);
}*/
}
