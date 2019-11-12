import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {
  @Input() inputEditorData: any;

  constructor() { }

  ngOnInit() {

  }

}
