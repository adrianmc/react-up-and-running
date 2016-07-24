import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import MyButton from './index.js';

storiesOf('MyButton', module)

  .add('No Props (default only)', () => (
    <MyButton />
  ))

  .add('button with action', () => (
    <MyButton onClick={action('button clicked')} />
  ))

  .add('button with short text', () => (
    <MyButton>Short Text</MyButton>
  ))

  .add('button with long text', () => (
    <MyButton>This is a long piece of text. Hello, how do you do?</MyButton>
  ));
