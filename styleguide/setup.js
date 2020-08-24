import '../src/styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import pkg from '../package';
import * as VKUI from '../src';
import { getRandomInt, getRandomUser, getRandomUsers, importantCountries, getAvatarUrl } from './utils';

import * as Icons from '@vkontakte/icons';

for (let i in VKUI) {
  window[i] = VKUI[i];
}

Object.getOwnPropertyNames(Icons).forEach((name) => {
  if (name.startsWith('Icon')) {
    const icon = Icons[name];
    window[name] = icon;

    if (typeof icon.mountIcon === 'function') {
      // Нужно смонтировать символ иконки до того, как общий спрайт будет клонирован во все iframe предпросмотры компонентов.
      // Раньше код для добавления SVG-символа в спрайт находился в корне модуля,
      // а теперь по-умолчанию символ добавляется только во время первого рендера иконки.
      icon.mountIcon();
    }
  }
});

window.osname = VKUI.platform();

window.schemeId = window.localStorage.getItem('vkui-styleguide:schemeId') || pkg.defaultSchemeId;

window.getRandomInt = getRandomInt;
window.getRandomUser = getRandomUser;
window.importantCountries = importantCountries;

window.getRandomInt = getRandomInt;
window.getRandomUser = getRandomUser;
window.getRandomUsers = getRandomUsers;
window.importantCountries = importantCountries;
window.getAvatarUrl = getAvatarUrl;
