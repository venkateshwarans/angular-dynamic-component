import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { config } from '../../services/data'
import { CkeditorComponent } from '../index'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Output() textHandler = new EventEmitter<any>();
  public loadComponent;
  constructor() { }

  ngOnInit() {
    this.loadComponent = CkeditorComponent;
  }

  textInputHandler(event){
    this.textHandler.emit(event.target.value)
  }

}
