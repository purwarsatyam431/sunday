import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from '../apis.service';
import { Interface } from '../interface';
import { S1Service } from '../s1.service';
import { SiblingCommunicationService } from '../sibling-communication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:S1Service ,private http:HttpClient
     ,private rt:Router,private api:ApisService,private route:ActivatedRoute,
     private s2:SiblingCommunicationService
     ) { }
editMode='regMode';
  ngOnInit(): void {
    this.edit()
    this.funRec()

  } 
  funRec(){
    this.api.editMode.subscribe((d)=>this.editMode=d)
    console.warn(this.editMode)
  }
  AddEmp=new Interface()
  editEmp=new Interface()
myforms:FormGroup=new FormGroup({
  Name:new FormControl("",[Validators.required,Validators.pattern('[a-z A-Z]*')]),
  Mobile:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
  email:new FormControl("",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),Validators.email]),
  Pwd:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z0-9]*')])
})


//  fun1(){
//   if(this.myforms.valid===false)  
//   alert("enter valid data")
//   else 
//   {
//     if(this.myforms.valid===true)  {
//       var arr;
//       if(localStorage.getItem("FormData")===null){
//         arr=[]
      
//     } else{
//       arr=JSON.parse(localStorage.getItem("FormData"))
//     }
//     arr.push(this.myforms.value);  
//   this.myforms.reset()
//   }
//      localStorage.setItem("FormData",JSON.stringify(arr));
//     }
    
  
//   }
error;
fun1(){
  if(this.myforms.valid===true){
  this.AddEmp.Name=this.myforms.value.Name;
  this.AddEmp.Mobile=this.myforms.value.Mobile;
  this.AddEmp.email=this.myforms.value.email;
  this.AddEmp.Pwd=this.myforms.value.Pwd;
  this.api.postData(this.AddEmp).subscribe(((d)=>
  console.log(d)
  ),
  ((error)=>this.error=alert(error.errorTitle))
  )
  this.myforms.reset()
  }
  else{
    alert("Enter Data")
  }
   
}
nav(){
  this.rt.navigate(["Log"])
}
edit(){
  console.log(this.route.snapshot.params.id)
  this.api.getPerticularId(this.route.snapshot.params.id).subscribe((d)=>{
    this.myforms=new FormGroup({
      Name:new FormControl(d['Name']),
      Mobile:new FormControl(d['Mobile']),
      email:new FormControl(d['email']),
      Pwd: new FormControl(d['Pwd']),
    })
  })
}


fun2(){
  if(this.myforms.valid===true){
  this.editEmp.Name=this.myforms.value.Name;
 this.editEmp.Mobile=this.myforms.value.Mobile;
 this.editEmp.email=this.myforms.value.email;
   this.editEmp.Pwd=this.myforms.value.Pwd;
   this.api.editData(this.route.snapshot.params.id,this.editEmp).subscribe(((d)=>
  console.log(d)
  
  )
  ,
  ((error)=>this.error=alert(error.errorTitle))
  )
  }
  else{
    alert("Enter Data")
  }
  this.rt.navigate(['/condidate']) 
}

}
