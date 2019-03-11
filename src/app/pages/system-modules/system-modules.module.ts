import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemModulesComponent } from './system-modules.component';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '',
    component: SystemModulesComponent
  }
];

@NgModule({
  declarations: [SystemModulesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes)
  ]
})
export class SystemModulesModule { }
