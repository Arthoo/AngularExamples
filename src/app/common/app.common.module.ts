import { NgModule } from '@angular/core';
import { CodeSectionComponent } from './code-section/code-section.component';
import { ExpandableIconComponent } from './expandable-icon/expandable-icon.component';
import { CommonModule } from '@angular/common';
import { TestDirective } from './test.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CodeSectionComponent, ExpandableIconComponent, TestDirective],
  exports: [CodeSectionComponent, ExpandableIconComponent],
})
export class AppCommonModule {}
