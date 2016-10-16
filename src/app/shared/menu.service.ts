import { Injectable } from '@angular/core';
import Menu from './menu.options';

@Injectable()

export default class MenuService {
  getMenu():Menu[] {
    return [
      new Menu('New'),
      new Menu('Join'),
      new Menu('History'),
      new Menu('Settings')
    ];
  }
}
