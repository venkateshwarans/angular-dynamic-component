import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamicModule } from 'ng-dynamic-component';
import { HelloComponent, CkeditorComponent } from './components';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ckeditor4-angular';
import { AppRoutingModule } from './app-routing.module';
import { TextComponent } from './components/text/text.component';
import { VideoComponent } from './components/video/video.component';
import { DynamoComponent } from './components/dynamo/dynamo.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CKEditorModule,
    DynamicModule.withComponents([HelloComponent, TextComponent, VideoComponent, CkeditorComponent]),
    AppRoutingModule
  ],
  declarations: [AppComponent, HelloComponent, DynamoComponent, TextComponent, VideoComponent, CkeditorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
