[![Build Status](https://travis-ci.org/prodio-pm/prodio-orm.svg?branch=master)](https://travis-ci.org/prodio-pm/prodio-orm)

Prodio-ORM
==========

The ORM for Prodio is not your standard implementation, it allows for member
upgrades and downgrades.  To account for this you should check for a member
on the root and then in the meta segment if it is not found there.

You can post all of your data on the root of your ojbect and the backend will
automatically migrate data that isn't within the ORM root to the meta segment.

Anything posted to the meta segment will NOT be automatically moved to the root.

The ORM does NOT necessarily match up with the API's.  This is on purpose since
at times there may be necessity to augment the response object(s).  A good
example of this is the project/{id}/tree endpoint.

This library implements the complete ORM used by Prodio.  Yes, any of the other
off the shelf solutions could have been modified to work, but writing one that
actually fit Prodio just made more sense.

Installation
============

```
npm install prodio-orm
```

API
===

ORM
---

ORM(optionalName, Validators)

    optionalName - An optional name you can pass to the ORM creator, used for savers/loaders.
    Validators - The root validator or a plain JavaScript Object.

```
var ORM = require('prodio-orm');

var Test = new ORM('test', {
    num: ORM.Number()
  });
```

ORM.Array
---------

ORM.Boolean
-----------

ORM.Date
--------

ORM.Default
-----------

ORM.ID
------

ORM.Nullable
------------

ORM.Number
----------

ORM.Object
----------

ORM.Optional
------------

ORM.RegExp
----------

ORM.Semver
----------

ORM.String
----------

ORM.validate
------------
