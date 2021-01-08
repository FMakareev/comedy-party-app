import {nanoid} from '@reduxjs/toolkit'

import {Player} from "../types";
import {AvatarIconsMap} from "../assets/avatars/AvatarIconsMap";
import {range} from 'lodash';
const faker = require('faker');


export const getRandomPlayerAvatar = () => faker.random.arrayElement(range(0, AvatarIconsMap.length - 1));

export const getRandomPlayer = (): Player => ({
  id: nanoid(),
  name: faker.internet.userName(),
  avatar: getRandomPlayerAvatar(),
})
