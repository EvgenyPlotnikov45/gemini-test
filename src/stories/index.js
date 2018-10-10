import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from "../components/Button/Button";

storiesOf('Button', module)
  .add('simple button', () => <Button>Simple button</Button>);
