READ ME!!!!

So what do you do when you want multiple instances of a particular feature? You don't need to make a new state which is feature identical of another. You simply bind it to a directive.

Directives have mini scopes inside them allowing you to have a feature identical object module, but with a different data set (per mini scope).

One of the cooler parts of this is that your module is always completely functional in all the other ways too. It adds another layer of functionality to your modules!