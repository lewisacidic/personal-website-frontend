import 'es6-symbol/implement';
import 'es6-shim';
import 'zone.js';
import 'reflect-metadata';

import {Component, View, bind, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy} from 'angular2/router';

@Component({
  selector: 'child-a'
})
@View({
  template: `<h2>Child A Here!!!</h2>`,
  styles: [`h2 { color: blue; }`]
})
class ChildA {

}

@Component({
  selector: 'child-b'
})
@View({
  template: `<h2>Child B Here!!!</h2>`,
  styles: [`h2 { color: red; }`]
})
class ChildB {

}

@Component({
  selector: 'app',
})
@View({
  template: `<h1>Hello world!</h1>
  <a href="#" [router-link]="['/A']">A</a>
  <a href="#" [router-link]="['/B']">B</a>
  <router-outlet></router-outlet>`,
  directives: [ChildA, ChildB, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', redirectTo: '/A' },
  { path: '/A', component: ChildA, as: 'A'},
  { path: '/B', component: ChildB, as: 'B'}
])
class App {

}

bootstrap(App, [ROUTER_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy)]);
