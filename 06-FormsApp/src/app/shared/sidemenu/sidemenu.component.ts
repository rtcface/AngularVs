import { Component} from '@angular/core';
import { InterfaceMenu } from '../interfaces';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent  {

 templateMenu:InterfaceMenu[] = [
  {
    text: 'Basics',
    route: './template/basics'
  },
  {
    text: 'Dynamic',
    route: './template/dynamic'
  },
  {
    text: 'Switches',
    route: './template/switches'
  },
 ];


 reactiveMenu:InterfaceMenu[] = [
  {
    text: 'Basics',
    route: './reactive/basics'
  },
  {
    text: 'Dynamic',
    route: './reactive/dynamic'
  },
  {
    text: 'Switches',
    route: './reactive/switches'
  },
 ];


}
