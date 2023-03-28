import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';
import { HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    PipesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
