import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {
  ngOnInit(): void {
    const myObs$ = new Observable( obs => {
  
      console.log("Star Observable");
      obs.next('100');
     // obs.error("Error");
      obs.next('200');
      setTimeout(() => {
        obs.next('300');
      }, 3000);
      obs.next('300');
    //  obs.complete();
     // obs.error('Error');
      obs.next('400');
      console.log('end observable')
    });
  
    myObs$.subscribe( sub => {
      console.log( "1nd"+sub);
    },
    error => {
      console.log( "first"+error);
    },
    () => {
      console.log('complete');
    }
    )
    myObs$.subscribe( sub => {
      console.log("2nd"+sub);
    })
    
  }

}
