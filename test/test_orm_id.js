var ORM = require('../index');
var assert = require('assert');

describe('ORM', function(){
  describe('ID\'s', function(){
    it('Should pass a valid string', function(done){
      var o = new ORM(ORM.ID());
      o.validate('1234', function(err, date){
        assert(!err);
        done();
      });
    });
    it('Should pass with a Number', function(done){
      var o = new ORM(ORM.ID());
      o.validate(1234, function(err, date){
        assert(!err);
        done();
      });
    });
    it('Should fail for a blank string', function(done){
      var o = new ORM(ORM.ID());
      o.validate('', function(err, date){
        assert(err);
        done();
      });
    });
    it('Should validate with a regular expression', function(done){
      var o = new ORM(ORM.ID(/[a-z0-9]{5}-[a-z0-9]{2}/i));
      o.validate('ab123-1a', function(err, date){
        assert(!err);
        done();
      });
    });
    it('Should fail with a regular expression', function(done){
      var o = new ORM(ORM.ID(/[a-z0-9]{5}-[a-z0-9]{2}/i));
      o.validate('ab123-1', function(err, date){
        assert(err);
        done();
      });
    });
    it('Should validate with a string regular expression', function(done){
      var o = new ORM(ORM.ID('[a-z0-9]{5}-[a-z0-9]{2}', 'i'));
      o.validate('ab123-1a', function(err, date){
        assert(!err);
        done();
      });
    });
    it('Should fail with a string regular expression', function(done){
      var o = new ORM(ORM.ID('[a-z0-9]{5}-[a-z0-9]{2}', 'i'));
      o.validate('ab123-1', function(err, date){
        assert(err);
        done();
      });
    });
    it('Should fail with an Object', function(done){
      var o = new ORM(ORM.ID());
      o.validate({}, function(err, date){
        assert(err);
        done();
      });
    });
    it('Should fail with an Array', function(done){
      var o = new ORM(ORM.ID());
      o.validate([], function(err, date){
        assert(err);
        done();
      });
    });
    it('Should fail with a Boolean', function(done){
      var o = new ORM(ORM.ID());
      o.validate(true, function(err, date){
        assert(err);
        done();
      });
    });
  });
});
