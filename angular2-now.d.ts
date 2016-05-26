

// Type definitions for angular2-now 1.1.6
// Project: https://github.com/pbastowski/angular2-now
// Definitions by: Onder Ceylan <https://github.com/onderceylan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'angular2-now' {
    export function Component(config: ComponentConfig): ClassDecorator;

    export function Service(config: ServiceConfig|string): ClassDecorator;

    export function Filter(config: FilterConfig|string): ClassDecorator;

    export function State(config: StateConfig): ClassDecorator;

    export function View(config: ViewConfig|string): ClassDecorator;

    export function bootstrap(appName: any, dependencies?: string[]);

    export function SetModule(appName: string, dependencies?: string[]);

    export function options(config: options);

    export function Inject(dependencies: string[]);

    export function MeteorMethod(config?: options);

    interface options {
        controllerAs?: string;
        spinner?: any;
        events?: any;
        noConflict?: boolean;
    }

    interface ServiceConfig {
        name: string;
    }

    interface StateConfig {
        name: string; // 'stateName'
        url?: string; // '/stateurl'
        defaultRoute?: boolean|string; // true/false or '/default/route/url'
        abstract?: boolean;
        html5Mode?: boolean;
        params?: any; // { id: 123 },  // default params, see ui-router docs
        data?: any; // { a: 1, b: 2},  // custom data
        resolve?: any;
        controller?: ControllerClass;
        template?: any; // '<div></div>'
        templateUrl?: string; //  'client/app/app.html'
        templateProvider?: Function; // function() { return "<h1>content</h1>"; }
    }

    interface ViewConfig {
        template?: string;
        templateUrl?: string;
        transclude?: boolean;
    }

    interface ComponentConfig {
        selector: string; // 'my-app'
        template?: any; // '<div>Inline template</div>'
        templateUrl?: string; // 'path/to/the_template.html'
        bind?: Bind; // { twoWay: '=', value: '@', function: '&' },
        providers?: string[];
        replace?: boolean;
        transclude?: boolean;
        scope?: undefined|boolean|Bind;
    }

    interface Bind {
        [id: string]: any;
    }

    interface FilterConfig {
        name: string;
    }

    interface ControllerClass extends Function {
        template?: string|Function;
        templateUrl?: string|Function;
        link?: Function;
        compile?: any;
    }
}
