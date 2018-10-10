import React from 'react';
import { configure, addDecorator } from '@storybook/react';

function loadStories() {
  require('../src/stories');
}

addDecorator(story => (
    <div id="test-element" style={{ display: 'inline-block', padding: 4 }}>
        {story()}
    </div>
));

configure(loadStories, module);
