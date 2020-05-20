import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CodeSectionComponent } from './code-section/code-section.component';
import { ExpandableIconComponent } from './expandable-icon/expandable-icon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CodeSectionComponent,
    ExpandableIconComponent,
  ],
  exports: [
    CodeSectionComponent,
    ExpandableIconComponent,
  ],
})
export class AppCommonModule {}
