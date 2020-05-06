import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListFooterComponent } from './list-footer/list-footer.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent, ListHeaderComponent, ListFooterComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
  ],
  exports: [ListComponent],
})
export class ListModule {}
