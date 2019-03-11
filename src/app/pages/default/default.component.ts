import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {

  isCollapsed = false;
  triggerTemplate = null;
  private _apiResource;
  public get apiResource() {
    return this._apiResource;
  }
  public set apiResource(value) {
    this._apiResource = value;
  }
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
  constructor(private _http: ApiService) {
    this._apiResource = this._http;
  }

  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

  ngOnInit() {
    const ss = this._load('common/GetCase', {}, 'get');
    console.log('***********', ss);
  }

  private async _load(url, params, method) {
    const mtd = method === 'proc' ? 'post' : method;
    return this._http[mtd](url, params).toPromise();
  }

}
