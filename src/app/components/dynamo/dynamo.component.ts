import { Component, OnInit } from '@angular/core';
import {HelloComponent, CkeditorComponent } from '../index';

import { config } from '../../services/data'
import * as _ from 'lodash-es';
import { ActivatedRoute } from '@angular/router';
import { TextComponent } from '../text/text.component';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-dynamo',
  templateUrl: './dynamo.component.html',
  styleUrls: ['./dynamo.component.css']
})

export class DynamoComponent implements OnInit {
  public components: any;
  public inputs: any;
  public outputs: any;
  public sub: any;
  public componentConfig = {
    text: TextComponent,
    hello: HelloComponent,
    video: VideoComponent,
    ckeditor: CkeditorComponent
  };
  constructor(public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.data
      .subscribe((routerData) => {
        console.log(routerData)
        this.components =  _.map(routerData.config.tools, (item) => {
            return { component: this.componentConfig[item] }
          })
      });

    this.inputs = {
      initialInput: 'InputData'
    }
    this.outputs = {
      textHandler: (event) => {
        // this.components[0].inputs.initialInput = event
        this.inputs.initialInput = event
        console.log(event)
      },
      buttonHandler: (value) => {
        console.log(value.addNewComponent)
        this.components.push({ component: this.componentConfig[value.addNewComponent], inputs: { initialInput: this.components.length + 1 } })
      }
    }
  }

}
