import { Injectable } from '@angular/core';
import Menu from './menu.options';

@Injectable()

export default class MenuService {
  getMenu():Menu[] {
    return [
      new Menu('New', '/meter'),
      //TODO create a meeting session so others can join
      // new Menu('Join', '/'),
      //TODO create a history page that saves each meeting when ended
      // new Menu('History', '/'),
      new Menu('Settings', '/settings')

    ];
  }
}
