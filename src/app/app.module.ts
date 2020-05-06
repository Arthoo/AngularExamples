import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ListModule } from './common/list/list.module';
import { CatComponent } from './content/cats/cat/cat.component';
import { CatsComponent } from './content/cats/cats.component';
import { DogComponent } from './content/dogs/dog/dog.component';
import { DogsComponent } from './content/dogs/dogs.component';
import { GenericListComponent } from './content/generic-list/generic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatComponent,
    DogsComponent,
    DogComponent,
    GenericListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ListModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
