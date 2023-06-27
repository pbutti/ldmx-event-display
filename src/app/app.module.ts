import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LdmxExperimentComponent } from './ldmx-experiment/ldmx-experiment.component';

@NgModule({
  declarations: [
    AppComponent,
    LdmxExperimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot([{ path: '', component: LdmxExperimentComponent }]),
    BrowserAnimationsModule,
    PhoenixUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
