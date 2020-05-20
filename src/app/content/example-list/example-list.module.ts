import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from 'src/app/app.component';
import { AppCommonModule } from 'src/app/common/app.common.module';
import { CatComponent } from './cats/cat/cat.component';
import { CatsComponent } from './cats/cats.component';
import { DogComponent } from './dogs/dog/dog.component';
import { DogsComponent } from './dogs/dogs.component';
import { ExampleListComponent } from './example-list.component';
import { ListModule } from './list/list.module';

@NgModule({
  declarations: [
    CatsComponent,
    CatComponent,
    DogsComponent,
    DogComponent,
    ExampleListComponent,
  ],
  exports: [ExampleListComponent],
  entryComponents: [ExampleListComponent],
  imports: [
    AppCommonModule,
    ListModule,
    MatIconModule,
    MatButtonModule,
    AppCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class GenericListModule {}
