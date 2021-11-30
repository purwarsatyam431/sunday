import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Interface } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
urlApi="https://fir-connectivity-69f63-default-rtdb.firebaseio.com/emp.json"
  url="https://fir-connectivity-69f63-default-rtdb.firebaseio.com/employee.json";
errorData={};
  constructor(private http:HttpClient) { }
  getData():Observable<Interface>{
    return this.http.get<Interface>(this.url,{responseType:'json'}).pipe(
      catchError(this.handleError)
    )
  }
  postData(data:Interface):Observable<Interface>{
    return this.http.post<Interface>(this.url,data).pipe(
      catchError(this.handleError)
    )
  }
delete(id){
  return this.http.delete('https://fir-connectivity-69f63-default-rtdb.firebaseio.com/employee/'+id+'.json')
}

getPerticularId(id:string):Observable<Interface>{
  return this.http.get<Interface>('https://fir-connectivity-69f63-default-rtdb.firebaseio.com/employee/'+id+'.json')
}

editData(id:string,data:Interface):Observable<Interface>{
  return this.http.put<Interface>('https://fir-connectivity-69f63-default-rtdb.firebaseio.com/employee/'+id+'.json',data).pipe(
    catchError(this.handleError)
  )
}



private handleError(error:HttpErrorResponse){
if(error.error instanceof ErrorEvent){

}
this.errorData={
  errorTitle:'OOPS! Request  for document faild!',
  errorDesc:'Server is not connecting'
  
}
return throwError(this.errorData)

}

editMode=new BehaviorSubject<string>('regMode')
}
