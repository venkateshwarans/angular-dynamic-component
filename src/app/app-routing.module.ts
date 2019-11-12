import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent, CkeditorComponent } from './components';
import { DynamoComponent } from './components/dynamo/dynamo.component';

const appRoutes: Routes = [
  {
    path: 'p1',
    component: DynamoComponent,
    data: {
      config : {
        scope: {
          role: 'CONTRIBUTOR'
        },
        actions:[
          'create'
        ],
        tools: ['text']
      }
    }
  },
  {
    path: 'p2',
    component: DynamoComponent,
    data: {
      config : {
        scope: {
          role: 'REVIEWER'
        },
        actions: ['review'],
        tools: ['video', 'ckeditor']
      }
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
