/* global gemini */

var pathTo = require('./utils').pathTo;

gemini.suite('Button', suite => {
    suite
        .setUrl(pathTo('Button', 'simple button'))
        .setCaptureElements('#test-element')
        .capture('plain')
        .capture('hovered', (actions, find) => {
            actions.mouseMove(find('button'));
        });
});
