import { Component, OnInit ,DoCheck, AfterContentChecked,AfterContentInit,AfterViewChecked, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-chack-sample',
  templateUrl: './chack-sample.component.html',
  styleUrls: ['./chack-sample.component.css']
})
export class ChackSampleComponent implements OnInit,
DoCheck, AfterContentChecked,AfterContentInit,AfterViewChecked, AfterViewInit {

  constructor() { }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
  ngDoCheck(): void {
    console.log("docheck")
  }

  ngOnInit(): void {
  }

}
