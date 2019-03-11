import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SystemSettingComponent } from './system-setting.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
const routes: Routes = [
  {
    path: '',
    component: SystemSettingComponent,
  }
];

@NgModule({
  declarations: [SystemSettingComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class SystemSettingModule { }
