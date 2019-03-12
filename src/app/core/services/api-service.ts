import { Inject, Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient, HttpHandler } from '@angular/common/http';
import { SystemResource } from './system-resource';
import { CommonTools } from './common-tools';
@Injectable()
export class ApiService {
    public httpClient;
    constructor(
      //  @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
        private http: HttpClient
    ) {
        this.httpClient = new HttpClient();
    }

    public setHeaders() {
      //  const token = this.tokenService.get().token;
     //   if (token !== 'null') {
     //       // const userToken = JSON.parse(this.tokenService.get().token);
      //      return new HttpHeaders()
     //           .set('_token', token ? token : '')
     //           .set('X-Requested-With', 'XMLHttpRequest');
     //   }
    }

    // region 操作配置平台的相关资源
    public post(resource, body?, params?) {
        return this.httpClient.request('POST', resource, {
            body: body,
            params: params,
            headers: this.setHeaders()
        });
    }

    public get(resource, params?) {
        console.log('get::::' , resource, params);
        return this.httpClient.request('GET', resource, {
            responseType: 'json',
            params: params,
            headers: this.setHeaders()
        });
    }

    public getById(resource, params?) {
        if (params) {
            resource = `${resource}/${params['Id']}`;
        }
        return this.httpClient.request('GET', resource, {
            params: params,
            responseType: 'json',
            headers: this.setHeaders()
        });
    }

    public put(resource, body?, params?) {
        return this.httpClient.request('PUT', resource, {
            params: params,
            body: body,
            headers: this.setHeaders()
        });
    }

    public delete(resource, params?) {
        return this.httpClient.request('DELETE', resource, {
            params: params,
            headers: this.setHeaders()
        });
    }

    public getWidthNoHeader(resource, params) {
        return this.httpClient.request('GET', resource, {
            responseType: 'json',
            params: params
        });
    }

    // endregion

    // region: read inner config data
    public getLocalData(name) {
        // const urls =
        //     // environment.SERVER_URL +
        //     SystemResource.localResource.url +
        //     '/assets/data/' +
        //     name +
        //     '.json?rtc=' +
        //     CommonTools.uuID(10);
        // return this.http.get<any>(urls);

        const urls = `${SystemResource.localResourceConfigJson.url + name}.json?rtc=${CommonTools.uuID(10)}`;
        return this.httpClient.request('GET', urls);
    }

    public getSystemConfig() {
        const urls = `${SystemResource.localResource.url}/assets/config.json?rtc=${CommonTools.uuID(10)}`;
        return this.httpClient.request('GET', urls);
    }
    // endregion
}
