import { configure } from '@kadira/storybook';

function loadStories() {
  require('../app/components/MyButton/story.js');
}

configure(loadStories, module);