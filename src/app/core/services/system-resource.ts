
export class SystemResource {
    public static settingSystem = {
        name: 'setting',
        // Server: 'http://127.0.0.1:8081/api.cfg/'
        Server: 'http://192.168.1.111:8081/api.cfg/'
        // 'Server': 'http://192.168.1.252:8081/api.cfg/'
    };

    public static appSystem = {
        name: 'app',
        // Server: 'http://127.0.0.1:8081/api.cfg/'
        Server: 'http://192.168.1.111:8081/api.cfg/'
        // 'Server': 'http://192.168.1.252:8081/api.cfg/'
    };

    public static localResource = {
        //    url: "http://192.168.1.111:8083"
          url: 'http://localhost:4200'
    };

    public static localResourceConfigJson = {
        url: 'files/moduleConfig/',
        reportTemplate: 'files/reportTemplate/'
    };


    public static reportServer = {
         url: 'http://192.168.1.111:8081/api.cfg/files/reportTemplate/',
        // url: 'http://127.0.0.1:8081/api.cfg/files/reportTemplate/',
       // url: 'http://192.168.1.111:8088/ReportServer.ashx'
    };
}
