import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import {RouterModule} from '@angular/router';
import {ExampleComponent} from './example.component';


@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ],
  exports: [ExampleComponent]

})
export class ExampleModule { }
