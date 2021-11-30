import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../apis.service';
import {map} from 'rxjs/operators'
import { SiblingCommunicationService } from '../sibling-communication.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-condidates',
  templateUrl: './condidates.component.html',
  styleUrls: ['./condidates.component.css']
})
export class CondidatesComponent implements OnInit,AfterViewChecked {
  ngAfterViewChecked () {
    this.fetchData()
  }
  editMode='editmode';
  constructor(public rt:Router,
     private api:ApisService,
     private route:ActivatedRoute,
     private s2:SiblingCommunicationService,
     private dialog:MatDialog
     ) { }
data:any=[];
employe:any;
  ngOnInit(): void {
//this.funGetData()
this.fetchData()
  }
// funGetData(){
//   if(localStorage.getItem("FormData")){
// this.data=JSON.parse(localStorage.getItem("FormData"))
//   }
// }
funLogOut(){
  localStorage.removeItem("auth");
  this.rt.navigate(["Log"])
}

cols:string[]=["Name","Mobile","email","Pwd","userId"]

error;
fetchData(){
  this.api.getData().pipe(map(responseData=>{
   // console.log(responseData);
   const empArray=[]
    for(const key in responseData){
      //console.log(responseData[key])
//      console.warn(responseData.hasOwnProperty(key))
      if(responseData.hasOwnProperty(key)){
      empArray.push({userId:key,...responseData[key]})
    }
    }
    return empArray
  })).subscribe((d)=>this.data=d,((error)=>this.error=error))
}
delete(id){

if(confirm("Do you Wana delete record")){
  console.log(id)
   this.api.delete(id).subscribe(()=>
   this.fetchData())
  
}

}

edit(){
  this.api.editMode.next('editMode')
  console.log(this.editMode)

}

openDialog(){
  this.dialog.open(RegisterComponent)
  this.api.editMode.next('regMode')
}
}
