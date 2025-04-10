/**
 * Sidebar config for Twitter Spam Detection docs
 */

module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Dataset',
      collapsible: true,
      collapsed: false,
      items: [
        'dataset/sources',
        'dataset/cleaning',
        'dataset/features',
      ],
    },
    {
      type: 'category',
      label: 'Model',
      collapsible: true,
      collapsed: false,
      items: [
        'model/ml-baseline',
        'model/deep-learning',
        'model/evaluation',
      ],
    },
    {
      type: 'doc',
      id: 'results',
      label: 'Results',
    },
    {
      type: 'doc',
      id: 'deployment',
      label: 'Deployment',
    },
    {
      type: 'doc',
      id: 'future-work',
      label: 'Future Work',
    },
  ],
};
