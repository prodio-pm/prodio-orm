var ORM = require('../index');
var assert = require('assert');

describe('ORM', function(){
  describe('Values', function(){
    it('Should force a value if none exists', function(done){
      var t = new ORM({v: ORM.Value('foo')});
      t.validate({}, function(err, obj){
        assert(!err);
        assert(obj.v==='foo');
        done();
      });
    });
    it('Should force a value even if a different value exists', function(done){
      var t = new ORM({v: ORM.Value('foo')});
      t.validate({v: 'bar'}, function(err, obj){
        assert(!err);
        assert(obj.v==='foo');
        done();
      });
    });
    it('Should force Arrays', function(done){
      var t = new ORM({v: ORM.Value(['foo'])});
      t.validate({}, function(err, obj){
        assert(!err);
        assert(obj.v[0]==='foo');
        done();
      });
    });
    it('Should force Objects', function(done){
      var t = new ORM({v: ORM.Value({foo: 'bar'})});
      t.validate({}, function(err, obj){
        assert(!err);
        assert(obj.v.foo==='bar');
        done();
      });
    });
    it('Should force Strings', function(done){
      var t = new ORM({v: ORM.Value('foo')});
      t.validate({}, function(err, obj){
        assert(!err);
        assert(obj.v==='foo');
        done();
      });
    });
    it('Should force Numbers', function(done){
      var t = new ORM({v: ORM.Value(1234)});
      t.validate({}, function(err, obj){
        assert(!err);
        assert(obj.v===1234);
        done();
      });
    });
  });
});
