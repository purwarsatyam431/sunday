import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CondidatesComponent } from './condidates/condidates.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { P1Pipe } from './p1.pipe'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CondidatesComponent,
    P1Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,HttpClientModule, NoopAnimationsModule,MatInputModule,MatButtonModule,MatCardModule
    ,MatTableModule
    ,MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
