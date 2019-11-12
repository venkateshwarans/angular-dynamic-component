import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { config } from '../../services/data'
import { CkeditorComponent } from '../index'

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() initialInput: any;
  @Output() textHandler = new EventEmitter<any>();
  @Output() buttonHandler = new EventEmitter<any>();
  public loadComponent;
  public inputs;
  public componentConfig = {
    ckeditor: CkeditorComponent,
  };

  constructor() { }

  ngOnInit() {
    this.checkInputLength();
    this.inputs = {
      inputEditorData: this.initialInput
    }
  }


  textInputHandler(event){
    this.checkInputLength();
    this.inputs = {
      inputEditorData: this.initialInput
    }
    this.textHandler.emit(event.target.value)
  }


  checkInputLength(){
    if(this.initialInput.length > 10){
      this.loadComponent = this.componentConfig['ckeditor'];
    } else {
      this.loadComponent = null
    }
  }
  handleButtonClick(component){
    this.buttonHandler.emit({
      addNewComponent: component
    })
  }
}
