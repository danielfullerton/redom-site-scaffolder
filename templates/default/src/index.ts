import { el, mount } from 'redom';
const PROJECT_TITLE = '[NAME]';

const title = el('h2', PROJECT_TITLE);
mount(document.body, title);
