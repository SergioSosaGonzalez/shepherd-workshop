import { ShepherdOptionsWithType } from 'react-shepherd';

const steps: Array<ShepherdOptionsWithType> = [
  {
    id: 'welcome',
    text: [
      `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra sem. In non ipsum in metus fermentum finibus sit amet ac ipsum. Suspendisse sed tellus tincidunt, bibendum nisl id, sodales nulla. Nulla aliquet nisl at lacus mollis, sed elementum mauris interdum. Mauris tempor tortor vel nisi placerat feugiat. Aliquam vel lectus eget felis accumsan euismod et eu sapien. In ac tellus ante. Sed ullamcorper urna id felis sodales, ut commodo augue sagittis. Aliquam erat volutpat. Proin porttitor enim vel velit malesuada, sit amet lobortis sapien lobortis. Donec congue lacinia nisi, in semper diam lobortis eu.</p>`,
    ],
    attachTo: { element: '.blog-element', on: 'bottom' },
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'cancel',
        classes: 'shepherd-button-secondary',
        text: 'Exit',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
  {
    id: 'check-options',
    text: [
      `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra sem. In non ipsum in metus fermentum finibus sit amet ac ipsum. Suspendisse sed tellus tincidunt, bibendum nisl id, sodales nulla. Nulla aliquet nisl at lacus mollis, sed elementum mauris interdum. Mauris tempor tortor vel nisi placerat feugiat. Aliquam vel lectus eget felis accumsan euismod et eu sapien. In ac tellus ante. Sed ullamcorper urna id felis sodales, ut commodo augue sagittis. Aliquam erat volutpat. Proin porttitor enim vel velit malesuada, sit amet lobortis sapien lobortis. Donec congue lacinia nisi, in semper diam lobortis eu.</p>`,
    ],
    attachTo: { element: '.portafolio-element', on: 'left' },
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
  {
    id: 'check-options-2',
    text: [
      `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra sem. In non ipsum in metus fermentum finibus sit amet ac ipsum. Suspendisse sed tellus tincidunt, bibendum nisl id, sodales nulla. Nulla aliquet nisl at lacus mollis, sed elementum mauris interdum. Mauris tempor tortor vel nisi placerat feugiat. Aliquam vel lectus eget felis accumsan euismod et eu sapien. In ac tellus ante. Sed ullamcorper urna id felis sodales, ut commodo augue sagittis. Aliquam erat volutpat. Proin porttitor enim vel velit malesuada, sit amet lobortis sapien lobortis. Donec congue lacinia nisi, in semper diam lobortis eu.</p>`,
    ],
    attachTo: { element: '.about-element', on: 'right' },
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
  {
    id: 'check-options-3',
    text: [
      `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pharetra sem. In non ipsum in metus fermentum finibus sit amet ac ipsum. Suspendisse sed tellus tincidunt, bibendum nisl id, sodales nulla. Nulla aliquet nisl at lacus mollis, sed elementum mauris interdum. Mauris tempor tortor vel nisi placerat feugiat. Aliquam vel lectus eget felis accumsan euismod et eu sapien. In ac tellus ante. Sed ullamcorper urna id felis sodales, ut commodo augue sagittis. Aliquam erat volutpat. Proin porttitor enim vel velit malesuada, sit amet lobortis sapien lobortis. Donec congue lacinia nisi, in semper diam lobortis eu.</p>`,
    ],
    attachTo: { element: '.contact-element', on: 'top' },
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
  {
    id: 'check-options-4',
    text: [`<p>Lorem ipsum dolor sit amet</p>`],
    attachTo: { element: '.more-element', on: 'top-start' },
    classes: 'shepherd shepherd-welcome',
    buttons: [
      {
        type: 'back',
        classes: 'shepherd-button-secondary',
        text: 'Back',
      },
      {
        type: 'next',
        text: 'Next',
      },
    ],
  },
];

export default steps;
