import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReversePipe } from './reverse.pipe';


@Component({
  selector: 'my-app',
  template: `
  <p>{{ nom1 | reverse }}.</p>
  <p>{{ nom2 | reverse:'Salut' }}.</p>
  <p>{{ nom3 | reverse:'Mon nom inversé' }}.</p>
  `
})

export class AppComponent {
  constructor() {}
  
  public nom1 = "Paul";
  public nom2 = "Pierre";
  public nom3 = "Jacques";
  
}

@NgModule({
  imports: [ 
    BrowserModule
  ],
  declarations: [ 
    AppComponent,
    ReversePipe
  ],
  bootstrap: [ AppComponent ] 
})
export class AppModule {}