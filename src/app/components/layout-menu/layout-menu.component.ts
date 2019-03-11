import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { config } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.less']
})
export class LayoutMenuComponent implements OnInit, AfterViewInit {

  @Input() config = {
    theme: 'light',
    model: 'inline',
    menus: [
      {
        isSubMenu: true,
        title: '功能 1',
        link: '',
        icon: 'user',
        open: true,
        disabled: false,
        level: 1,
        children: [
          {
            isSubMenu: true,
            title: '子功能 1',
            link: '',
            icon: 'user',
            disabled: false,
            level: 2
          },
          {
            isSubMenu: true,
            title: '子功能 2',
            link: '',
            icon: 'user',
            disabled: false,
            level: 2
          },
          {
            isSubMenu: true,
            title: '子功能 3',
            link: '',
            icon: 'user',
            disabled: false,
            level: 2
          }
        ]
      },
      {
        isSubMenu: true,
        title: '子功能 1',
        link: '',
        icon: 'user',
        disabled: false
      },
      {
        isSubMenu: true,
        title: '子功能 1',
        link: '',
        icon: 'user',
        disabled: false
      }
    ]
  };
  @Input() isCollapsed;
  constructor(private router: Router) {

  }


  ngOnInit() {}

  ngAfterViewInit() {
    this.initConfig();
  }

  initConfig() {
    if (!this.config) {
    }
  }

  linkTo(menu) {
    this.router.navigate([menu.link]).then(result => {
      console.log(`link to ${menu.link} successfully`);
    }, error => {
      console.log(`link to ${menu.link} fail`);
    });
  }

}
