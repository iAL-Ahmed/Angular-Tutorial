READ ME!!!!

This is a standard set up that reflects a multipage website.

The flow is:
     Main state -> second state -> ect. (or back, or any order you decide).

Makes it very easy to just flow from one page to another. This may seem like a misuse of Angular, but ultimately you are only ever loading app data one time, and are never actually loading a new page. You are only ever on one page, but moving through other states of that page. 

A more powerful way to approach using angular however may be to have multiple states in one primary state. This allows you to have the ability to change and manage whole features of that main state more easily. 

A search bar with a particular layout and set of functions; One state. A list of todos; Again, one state. All of these existing on one main state, each manage separately. 

View other example to see how.