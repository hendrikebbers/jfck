bck2brwsr.register({
  'magic' : 'kaf\u010do'
}, function(exports) {
  var vm = {};
  function link(n, assign) {
    function replaceAll(s, o, n) {
      var pos = 0;
      for (;;) {
         var indx = s.indexOf(o, pos);
         if (indx === -1) {
           return s;
         }
         pos = indx + n.length;
         s = s.substring(0, indx) + n + s.substring(indx + o.length);
      }
    }
    return function() {
      var no_ = replaceAll(n, '_', '_1');
      var cls = replaceAll(no_, '/', '_');
      var dot = replaceAll(n, '/', '.');
      exports.loadClass(dot);
      assign(exports[cls]);
      return exports[cls](arguments);
    };
  };

  var invoker = {};
  function registerClass(vm, name, fn) {
    if (!vm[name]) vm[name] = fn;
    return vm[name];
  }
vm.java_lang_Object = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Object;
  return link('java/lang/Object', function(f) { vm.java_lang_Object = f;})(instance);
}
vm.java_lang_Class = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_Class;
  return link('java/lang/Class', function(f) { vm.java_lang_Class = f;})(instance);
}
vm.java_lang_ArithmeticException = function() {
  var instance = arguments.length == 0 || arguments[0] === true;
  delete vm.java_lang_ArithmeticException;
  return link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException = f;})(instance);
}

function de_eppleton_Eppletinder_js_PlatformServices() {
  var m;
  var CLS = de_eppleton_Eppletinder_js_PlatformServices;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
CLS['cons__V'] = m;

    m.access = 1;
    m.cls = CLS;
    c.constructor = CLS;
    function de_eppleton_Eppletinder_js_PlatformServicesfillInstOf(x) {
        Object.defineProperty(x, '$instOf_de_eppleton_Eppletinder_js_PlatformServices', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: de_eppleton_Eppletinder_js_PlatformServicesfillInstOf });
    de_eppleton_Eppletinder_js_PlatformServicesfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'de/eppleton/Eppletinder/js/PlatformServices';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 33;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.de_eppleton_Eppletinder_js_PlatformServices = registerClass(exports,'de_eppleton_Eppletinder_js_PlatformServices',de_eppleton_Eppletinder_js_PlatformServices);

  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTUzMDc0NTI2Mjk5DQpCdWlsZC1KZGs6IDEuOC4wXzE4MQ0KQnVpbHQtQnk6IGFudG9uZXBwbGUNCkJ1bmRsZS1NYW5pZmVzdFZlcnNpb246IDINCkJ1bmRsZS1OYW1lOiBFcHBsZXRpbmRlciBKYXZhU2NyaXB0IExpYnJhcmllcw0KQnVuZGxlLVN5bWJvbGljTmFtZTogZGUuZXBwbGV0b24uRXBwbGV0aW5kZXIuanMNCkJ1bmRsZS1WZXJzaW9uOiAxLjAuMC5TTkFQU0hPVA0KQ3JlYXRlZC1CeTogQXBhY2hlIE1hdmVuIEJ1bmRsZSBQbHVnaW4NCkV4cG9ydC1QYWNrYWdlOiBkZS5lcHBsZXRvbi5FcHBsZXRpbmRlci5qczt2ZXJzaW9uPSIxLjAuMC5TTkFQU0hPVCINClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
});