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

ORM(optionalName, proto, noAutoMigrate)

  * optionalName - An optional name you can pass to the ORM creator, used for savers/loaders.
  * proto - The root validator or a plain JavaScript Object.
  * noAutoMigrate - Defaults false, if true members not registered as part of
    the prototype will not be migrated to the meta member.  If set to false then
    anything not defined in the prototype will be migrated to the meta member.

```
var ORM = require('prodio-orm');

var Test = new ORM('test', {
    num: ORM.Number()
  });
```

ORM.Array
---------

ORM.Array(next)

  * next - Optional child validators to be executed.

```
var Item = ORM.Object({
    name: ORM.String()
  });
var ItemsValidator = ORM(ORM.Array(Item));

ItemsValidator.validate([{name: 'foo'}], function(err, items){
  console.log(err||items);
});
```

ORM.Boolean
-----------

Matches boolean values: true, false, 'true', 'false', 0, 1, '0', '1', 'yes', 'no'

ORM.Boolean()

ORM.Date
--------

Matches an actual Date() Object or a String that validates with Date.parse().

ORM.Date()

ORM.Default
-----------

If a value doesn't exist then set the value defaultValue.

ORM.Default(defaultValue, next)

  * defaultValue - The value to use if no value is present.
  * next - Optional validator to use if value exists.

ORM.ID
------

Validate an Identity value.

ORM.ID(regexp, options)

  * regexp - RegExp Object or String representing a Regular Expression
  * options - If regexp is a String, this is the options passed to new RegExp()

ORM.Nullable
------------

Allow the value to be null, if the value does not exist, then set it to null.

ORM.Nullable(next)

  * next - Optional validator to use if value exists.

ORM.Number
----------

Validate that the passed in value is a Number.  If the value is a String
representation of a Number then convert it to a Number and use it.

ORM.Number()

ORM.Object
----------

Validate that the passed in value matches the expected Object ORM.  Anything
member that doesn't fit into the ORM will be stored in the Objects meta member.

ORM.Object(proto, noAutoMigrate)

  * proto - The prototype for the expected object
  * noAutoMigrate - Defaults false, if true members not registered as part of
    the prototype will not be migrated to the meta member.  If set to false then
    anything not defined in the prototype will be migrated to the meta member.

```
var Obj = ORM.Object({name: ORM.String()});

Obj.validate({name: 'test', value: 123}, function(err, obj){
  console.log(err||obj);
});
```

Output would be:

```
{
  name: 'test',
  meta: {
    value: 123
  }
}
```

ORM.Optional
------------

Allow the value to be optional.  If the value is passed in and there is a next
handler then pass the value to next to be validated.  If no value is passed in
(matches typeof(value) === 'undefined') then call the callback with no value.
Checking arguments.length is the best way to validate if a value was present.

ORM.Optional(next)

  * next - Optional validator to use if value exists.

ORM.RegExp
----------

Validate the value with a regular expression.

ORM.RegExp(regexp, options)

  * regexp - RegExp Object or String representing a Regular Expression
  * options - If regexp is a String, this is the options passed to new RegExp()

ORM.Semver
----------

Validate that the value is a valid Semantic Version.

ORM.Semver()

ORM.String
----------

Validates that the passed in value is a valid String.  If it is a Number then
convert it to a String.

ORM.String(minLength)

  * minLength - Minimum length the string must be.

ORM.Value
---------

Forces a value into a member.

ORM.Value(value)

ORM.validate
------------

Performs the actual validate of the passed in value.

```
var Item = ORM.Object({
    name: ORM.String()
  });
var ItemsValidator = ORM(ORM.Array(Item));

ItemsValidator.validate([{name: 'foo'}], function(err, items){
  console.log(err||items);
});
```
