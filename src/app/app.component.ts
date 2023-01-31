import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title:string = 'Table Formate';
/* movies:Movie[]=[
    {fname:'siva',lname:"kumar",eMail:"amesone"},
    {fname:'raja',lname:"kottai",eMail:"amesone"},
    {fname:'sanjey',lname:"kumar",eMail:"amesone"},
    {fname:'arjun',lname:"nujsk",eMail:"amesone"},
    {fname:'mathavan',lname:"gm",eMail:"amesone"},
    {fname:'pravin',lname:"kumar",eMail:"amesone"},
  ] */




}

  class Movie {
fname!:string;
lname!:string;
eMail!:string;
 } 