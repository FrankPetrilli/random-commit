Random Commit Message Generator
===============================

What is it for?
---------------

Exactly what it says on the box. Open the page, get a random commit message.

Thank you to [whatthecommit](whatthecommit.com) for the message/name DB. I just wanted an easy way to use your website in curl commands and the like.

How do I use it?
----------------

A command like this, where $url is the public URL of this server, will commit your project with a random message.

    git commit -am "$(curl $url)"

How do I run it?
----------------

    node run.js

Public demo
-----------

[http://random-commit.projects.frank.petril.li](http://random-commit.projects.frank.petril.li)
