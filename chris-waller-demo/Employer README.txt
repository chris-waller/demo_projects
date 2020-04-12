Hello inquisitive people,

If you're reading this, you're probably considering me for a position at your company and I'd like to thank you upfront for taking the time to look at my code.

This repo is a work in progress so feel to judge what's here with the caveat that things are constantly in flux (as you can see from my commit history). Eventually I will get this site hosted on AWS but my immediate goal is to get an application that can run locally (on a node server) in order to showcase my design patterns and implementation of a Reactjs/node.js web application. I will use this README as a sort of developer changelog to you as a furthur insite into my thought process.

Current work in progress (not yet in the public repo):
- refactor react-redux into react-redux-session to implement sessions (don't worry about the actual back-end storage of user info yet, just hardcode multiple users to begin)
- once sessions implemented, add a config page to display/edit user info/preferences

April 12th:
- created the README
- at this point the site can be brought up locally with an extremely simple nodejs server
- the Header.js and HamburgurMenu components are basically done - they are the best working examples of what I consider to be an ideal component.
- started bring redux in but realize I'm going to need to change to react-redux-session in order to properly implement sessions