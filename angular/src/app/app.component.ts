import {AfterContentChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  implements AfterContentChecked, OnInit{
  title = 'my-app';

  constructor( private cdr: ChangeDetectorRef) {
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }




  ngOnInit(): void {

  }


}
