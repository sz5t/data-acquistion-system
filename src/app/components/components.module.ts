import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [LayoutMenuComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    LayoutMenuComponent
  ]
})
export class ComponentsModule { }
