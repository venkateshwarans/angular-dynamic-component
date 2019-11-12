import { Component } from '@angular/core';
import { HelloComponent } from './components/index';
import { config } from './services/data';
import * as _ from 'lodash-es';
import { Router } from '@angular/router';
import { VideoComponent } from './components/video/video.component';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  component = VideoComponent;

  outputs = {
    textHandler: (event) => {
      console.log(event)
    },
  }
}
