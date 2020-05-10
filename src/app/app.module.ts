import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GenericListModule as ExampleListModule } from './content/example-list/example-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ExampleListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
