/***  Generated file, do not change.  */
import { MenuComponent } from './menu/menu';
import { login_PhonePortrait } from '../pages/login/PhonePortrait/login';
import { transferform_PhonePortrait } from '../pages/transferform/PhonePortrait/transferform';
import { confirmation_PhonePortrait } from '../pages/confirmation/PhonePortrait/confirmation';
import { settings_PhonePortrait } from '../pages/settings/PhonePortrait/settings';
import { homeiconclassic_PhonePortrait } from '../pages/homeiconclassic/PhonePortrait/homeiconclassic';
export class Screens {
  static declarations = [
    MenuComponent,
    login_PhonePortrait,
    transferform_PhonePortrait,
    confirmation_PhonePortrait,
    settings_PhonePortrait,
    homeiconclassic_PhonePortrait
  ];
  static mapping = {
    'login': {
      PhonePortrait: login_PhonePortrait
    },
    'transferform': {
      PhonePortrait: transferform_PhonePortrait
    },
    'confirmation': {
      PhonePortrait: confirmation_PhonePortrait
    },
    'settings': {
      PhonePortrait: settings_PhonePortrait
    },
    'homeiconclassic': {
      PhonePortrait: homeiconclassic_PhonePortrait
    }
  }
}