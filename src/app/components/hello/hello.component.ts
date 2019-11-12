import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @Input() initialInput: any;
  public interState: any;
  constructor() { }

  ngOnInit() {
    this.interState = this.initialInput;
    console.log(this.initialInput)
  }

}
