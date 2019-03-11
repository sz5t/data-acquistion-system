import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  config = {
    model: 'horizontal',
    theme: 'dark',
    style: {
      'line-height': '64px'
    },
    menus: [
      {
        title: '系统设置',
        link: '/system-setting',
        icon: 'user',
        disabled: false
      },
      {
        title: '业务功能',
        link: '/system-modules',
        icon: 'appstore',
        disabled: false
      }
    ]
  };
  constructor() { }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  ngOnInit() {
  }

}
