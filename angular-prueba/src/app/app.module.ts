import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { MicomponenteComponent } from './components/micomponente/micomponente.component';
import { TestLoaderComponent } from './components/test-loader/test-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    TestLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
