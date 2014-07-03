module.exports = {
  // Slide settings
  settings: {
    title: 'A Pragmatic Approach<br>to Web Components',
    subtitle: '',
    eventInfo: {
     title: 'Open Web Camp VI',
     date: 'July 12, 2014'
    },
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: '', // TODO
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
  },

  // Author information
  presenters: [{
    name: 'Jakob Heuser',
    company: 'Principal Web Developer<br>LinkedIn',
    // gplus: 'http://plus.google.com/1234567890',
    twitter: '@jakobo',
    www: 'http://felocity.com',
    github: 'http://github.com/jakobo'
  }]
};
