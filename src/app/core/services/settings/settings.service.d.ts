import { App, Layout, User } from './interface';
export declare class SettingsService {
    private _app;
    private _user;
    private _layout;
    private get;
    private set;
    readonly layout: Layout;
    readonly app: App;
    readonly user: User;
    setLayout(name: string, value: any): boolean;
    setApp(val: App): void;
    setUser(val: User): void;
}
