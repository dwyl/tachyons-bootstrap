# Tachyons Bootstrap
[![Build Status](https://travis-ci.org/dwyl/tachyons-bootstrap.svg?branch=master)](https://travis-ci.org/dwyl/tachyons-bootstrap)
[![codecov](https://codecov.io/gh/dwyl/tachyons-bootstrap/branch/master/graph/badge.svg)](https://codecov.io/gh/dwyl/tachyons-bootstrap)

You can view & use tachyons bootstrap by visiting
https://dwyl-tachyons-bootstrap.herokuapp.com/.

Or if you wish to run it locally clone the repo and enter:

`npm start` into the command line

and navigate to `localhost:8000` in your browser.

## _Why_?

All Client Projects & dwyl products (_for the next couple of years_) will be using the ["***PETE***" **Stack**](https://github.com/dwyl/technology-stack/#the-pete-stack).

We need to make it _easy_ for people to `ship` as consistently, quickly and painlessly as possible. To aid that we need a **Component Guide** with detailed examples people can "***copy-paste***" from.

## _What_?

A **Component Guide** built using tachyons that people can use to build/ship their apps _fast_.

Something similar to:
+ http://getbootstrap.com/components
+ http://materializecss.com
+ http://foundation.zurb.com
+ http://designmodo.github.io/Flat-UI

> Note: While I'm still a _huge_ fan of the _simplicity_ of "Flat UI" http://designmodo.github.io/Flat-UI I gave up on the idea of using Flat UI because we ended up "over riding" too much. But if we could re-implement it in Tachyons with detailed examples it would be _great_! e.g: https://github.com/dwyl/learn-tachyons/issues/8

## _How_?

+ **Set up** the component guide page using **Elixir/Phoenix**
+ Ensure **components** displayed are **rendered/updated dynamically**
+ **Build the components**, keeping in mind the need to be easily adapted/customised
+ Ensure the dwyl standards for **testing, CI and documentation** are being applied throughout.
+ **Host** the site e.g: https://ui.dwyl.com
+ Create a **Tutorial Blog Post** for how tachyons bootstrap was made.
+ **Video ScreenCast / Workshop** to teach the UI framework to other people (_to be tested on F&C peeps and `.then` taught to NHS/MWV/SL etc._)
