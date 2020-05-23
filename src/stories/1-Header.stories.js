import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from "@storybook/addon-knobs";
import { icons } from '../ui/atoms/Icon';
import Header from '../ui/molecules/Header';

export default {
  title: 'Header',
  componenent: Header,
  decorators: [withKnobs]
};

export const Home = () => <Header iconsList={[icons.avatar, icons.notification, icons.social, icons.search]}></Header>
export const Chat = () => <Header iconsList={[icons.leftIcon, icons.discover, icons.social, icons.notification, icons.search]}></Header>
export const Profile = () => <Header iconsList={[icons.leftIcon, icons.social]}></Header>