import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class S1Service implements CanActivate {
canActivate(){
  if(localStorage.getItem("auth"))
    return true;
  else 
alert("You have to login first.")
this.rt.navigate(["Log"])
  }
  constructor(private ht:HttpClient, private rt:Router) { }

}
