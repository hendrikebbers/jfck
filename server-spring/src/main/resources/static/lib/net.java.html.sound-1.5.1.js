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
vm.java_lang_Object = link('java/lang/Object', function(f) { vm.java_lang_Object =  f; });
vm.java_lang_Class = link('java/lang/Class', function(f) { vm.java_lang_Class =  f; });
vm.java_lang_ArithmeticException = link('java/lang/ArithmeticException', function(f) { vm.java_lang_ArithmeticException =  f; });

function net_java_html_sound_AudioClip$1() {
  var m;
  var CLS = net_java_html_sound_AudioClip$1;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    c.constructor = CLS;
    function net_java_html_sound_AudioClip$1fillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip$1', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClip$1fillInstOf });
    net_java_html_sound_AudioClip$1fillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip$1';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 69664;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_sound_AudioClip$1 = net_java_html_sound_AudioClip$1;


function net_java_html_sound_AudioClip$DummyClip() {
  var m;
  var CLS = net_java_html_sound_AudioClip$DummyClip;
  if (!CLS.$class) {
    var pp = net_java_html_sound_AudioClip(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_INSTANCE'] = null;
  m = c._INSTANCE = function (v) {  if (arguments.length == 1) CLS['fld_INSTANCE'] = v; return CLS['fld_INSTANCE']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_net_java_html_sound_AudioClip || (refs_net_java_html_sound_AudioClip = net_java_html_sound_AudioClip(false))).constructor.cons__VLnet_java_html_sound_AudioClip$1_2.call(lcA0, null);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.play__V = function() {
  var  lcA0 = this;
return;

};
c['play__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.pause__V = function() {
  var  lcA0 = this;
return;

};
c['pause__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVolume__VD = function(lcD1) {
  var  lcA0 = this;
return;

};
c['setVolume__VD'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isSupported__Z = function() {
  var  lcA0 = this;
return 0;

};
c['isSupported__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new net_java_html_sound_AudioClip$DummyClip;
c.constructor.cons__V.call(stA0);
c._INSTANCE(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_sound_AudioClip$DummyClipfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip$DummyClip', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClip$DummyClipfillInstOf });
    net_java_html_sound_AudioClip$DummyClipfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip$DummyClip';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    c.class__V();
    var refs_net_java_html_sound_AudioClip;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_sound_AudioClip$DummyClip = net_java_html_sound_AudioClip$DummyClip;


function net_java_html_sound_AudioClip() {
  var m;
  var CLS = net_java_html_sound_AudioClip;
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
    m.access = 2;
    m.cls = CLS;
    m = c.create__Lnet_java_html_sound_AudioClip_2Ljava_lang_String_2 = function(lcA0) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = invoker.getClass__Ljava_lang_Class_2(lcA0);
var stA0 = (refs_net_java_html_BrwsrCtx || (refs_net_java_html_BrwsrCtx = vm.net_java_html_BrwsrCtx(false)))['findDefault__Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](c.constructor.$class);
var lcA1 = stA0;
var stA0 = (refs_org_netbeans_html_context_spi_Contexts || (refs_org_netbeans_html_context_spi_Contexts = vm.org_netbeans_html_context_spi_Contexts(false)))['find__Ljava_lang_Object_2Lnet_java_html_BrwsrCtx_2Ljava_lang_Class_2'](lcA1, (refs_org_netbeans_html_sound_spi_AudioEnvironment || (refs_org_netbeans_html_sound_spi_AudioEnvironment = org_netbeans_html_sound_spi_AudioEnvironment(false))).constructor.$class);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_sound_spi_AudioEnvironment']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.sound.spi.AudioEnvironment');
var lcA2 = stA0;
if ((lcA2) === null) { gt = 37; break IF; }
var stA0 = c.create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2(lcA2, lcA0);
var lcA3 = stA0;
if ((lcA3) === null) { gt = 37; break IF; }
return lcA3;
    }
    X_37: for (;;) { IF: if (gt <= 37) {

var stA0 = (refs_java_util_ServiceLoader || (refs_java_util_ServiceLoader = vm.java_util_ServiceLoader(false)))['load__Ljava_util_ServiceLoader_2Ljava_lang_Class_2']((refs_org_netbeans_html_sound_spi_AudioEnvironment || (refs_org_netbeans_html_sound_spi_AudioEnvironment = org_netbeans_html_sound_spi_AudioEnvironment(false))).constructor.$class);
var stA0 = invoker.iterator__Ljava_util_Iterator_2(stA0);
var lcA3 = stA0;
    }
    X_46: for (;;) { IF: if (gt <= 46) {

var stI0 = invoker.hasNext__Z(lcA3);
if ((stI0) == 0) { gt = 85; break IF; }
var stA0 = invoker.next__Ljava_lang_Object_2(lcA3);
if (stA0 !== null && !stA0['$instOf_org_netbeans_html_sound_spi_AudioEnvironment']) vm.java_lang_Class(false).castEx(stA0, 'org.netbeans.html.sound.spi.AudioEnvironment');
var lcA4 = stA0;
var stA0 = c.create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2(lcA4, lcA0);
var lcA5 = stA0;
if ((lcA5) === null) { gt = 82; break IF; }
return lcA5;
    }
    X_82: for (;;) { IF: if (gt <= 82) {
{ gt = 0; continue X_46; }
    }
    X_85: for (;;) { IF: if (gt <= 85) {

var stA0 = c.create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2((refs_org_netbeans_html_sound_impl_BrowserAudioEnv || (refs_org_netbeans_html_sound_impl_BrowserAudioEnv = org_netbeans_html_sound_impl_BrowserAudioEnv(false)))._DEFAULT(), lcA0);
var lcA3 = stA0;
if ((lcA3) === null) { gt = 101; break IF; }
var stA0 = lcA3;{ gt = 104; break IF; }
    }
    X_101: for (;;) { IF: if (gt <= 101) {

var stA0 = (refs_net_java_html_sound_AudioClip$DummyClip || (refs_net_java_html_sound_AudioClip$DummyClip = net_java_html_sound_AudioClip$DummyClip(false)))._INSTANCE();    }
    X_104: for (;;) { IF: if (gt <= 104) {
return stA0;

    }
}}}}}}}
};
c['create__Lnet_java_html_sound_AudioClip_2Ljava_lang_String_2'] = m;

    m.access = 9;
    m.cls = CLS;
    m = c.play__V = function() {
};
c['play__V'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.pause__V = function() {
};
c['pause__V'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.setVolume__VD = function(lcD1) {
};
c['setVolume__VD'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.isSupported__Z = function() {
};
c['isSupported__Z'] = m;

    m.access = 1025;
    m.cls = CLS;
    m = c.create__Lnet_java_html_sound_AudioClip$Impl_2Lorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2 = function(lcA0, lcA1) {

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stA0 = lcA0.create__Ljava_lang_Object_2Ljava_lang_String_2(lcA1);
var lcA2 = stA0;
if ((lcA2) === null) { gt = 23; break IF; }
var stA0 = new net_java_html_sound_AudioClip$Impl;
(refs_net_java_html_sound_AudioClip$Impl || (refs_net_java_html_sound_AudioClip$Impl = net_java_html_sound_AudioClip$Impl(false))).constructor.cons__VLorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2Ljava_lang_Object_2.call(stA0, lcA0, lcA1, lcA2);
return stA0;
    }
    X_23: for (;;) { IF: if (gt <= 23) {

return null;

    }
}}
};
    m.access = 10;
    m.cls = CLS;
    m = CLS.cons__VLnet_java_html_sound_AudioClip$1_2 = function(lcA1) {
  var  lcA0 = this;
c.constructor.cons__V.call(lcA0);
return;

};
    m.access = 4096;
    m.cls = CLS;
    c.constructor = CLS;
    function net_java_html_sound_AudioClipfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClipfillInstOf });
    net_java_html_sound_AudioClipfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1057;
    CLS.$class.cnstr = CLS;
    var refs_java_lang_Object;
    var refs_net_java_html_BrwsrCtx;
    var refs_org_netbeans_html_sound_spi_AudioEnvironment;
    var refs_org_netbeans_html_context_spi_Contexts;
    var refs_java_util_ServiceLoader;
    var refs_org_netbeans_html_sound_impl_BrowserAudioEnv;
    var refs_net_java_html_sound_AudioClip$DummyClip;
    var refs_net_java_html_sound_AudioClip$Impl;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_sound_AudioClip = registerClass(exports,'net_java_html_sound_AudioClip',net_java_html_sound_AudioClip);


function net_java_html_sound_AudioClip$Impl() {
  var m;
  var CLS = net_java_html_sound_AudioClip$Impl;
  if (!CLS.$class) {
    var pp = net_java_html_sound_AudioClip(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  m = c._src = function (v) {  if (arguments.length == 1) this['fld_net_java_html_sound_AudioClip$Impl_src'] = v; return this['fld_net_java_html_sound_AudioClip$Impl_src']; };
  m = c._clip = function (v) {  if (arguments.length == 1) this['fld_net_java_html_sound_AudioClip$Impl_clip'] = v; return this['fld_net_java_html_sound_AudioClip$Impl_clip']; };
  m = c._env = function (v) {  if (arguments.length == 1) this['fld_net_java_html_sound_AudioClip$Impl_env'] = v; return this['fld_net_java_html_sound_AudioClip$Impl_env']; };
    m = CLS.cons__VLorg_netbeans_html_sound_spi_AudioEnvironment_2Ljava_lang_String_2Ljava_lang_Object_2 = function(lcA1, lcA2, lcA3) {
  var  lcA0 = this;
(refs_net_java_html_sound_AudioClip || (refs_net_java_html_sound_AudioClip = net_java_html_sound_AudioClip(false))).constructor.cons__VLnet_java_html_sound_AudioClip$1_2.call(lcA0, null);
lcA0['fld_net_java_html_sound_AudioClip$Impl_clip'] = lcA3;
lcA0['fld_net_java_html_sound_AudioClip$Impl_env'] = lcA1;
lcA0['fld_net_java_html_sound_AudioClip$Impl_src'] = lcA2;
return;

};
    m.access = 1;
    m.cls = CLS;
    m = c.play__V = function() {
  var  lcA0 = this;
lcA0['fld_net_java_html_sound_AudioClip$Impl_env'].play__VLjava_lang_Object_2(lcA0['fld_net_java_html_sound_AudioClip$Impl_clip']);
return;

};
c['play__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.pause__V = function() {
  var  lcA0 = this;
lcA0['fld_net_java_html_sound_AudioClip$Impl_env'].pause__VLjava_lang_Object_2(lcA0['fld_net_java_html_sound_AudioClip$Impl_clip']);
return;

};
c['pause__V'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.setVolume__VD = function(lcD1) {
  var  lcA0 = this;
lcA0['fld_net_java_html_sound_AudioClip$Impl_env'].setVolume__VLjava_lang_Object_2D(lcA0['fld_net_java_html_sound_AudioClip$Impl_clip'], lcD1);
return;

};
c['setVolume__VD'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.isSupported__Z = function() {
  var  lcA0 = this;
var stI0 = lcA0['fld_net_java_html_sound_AudioClip$Impl_env'].isSupported__ZLjava_lang_Object_2(lcA0['fld_net_java_html_sound_AudioClip$Impl_clip']);
return stI0;

};
c['isSupported__Z'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.hashCode__I = function() {
  var  lcA0 = this;
var stI0 = (59);var stI1 = invoker.hashCode__I(lcA0['fld_net_java_html_sound_AudioClip$Impl_src']);
return __mul32(stI0,stI1);

};
c['hashCode__I'] = m;

    m.access = 1;
    m.cls = CLS;
    m = c.equals__ZLjava_lang_Object_2 = function(lcA1) {
  var  lcA0 = this;

  var gt = 0;
    X_0: for (;;) { IF: if (gt <= 0) {

var stI0 = lcA1 != null && lcA1['$instOf_net_java_html_sound_AudioClip$Impl'] ? 1 : 0;
if ((stI0) == 0) { gt = 22; break IF; }
if (lcA1 !== null && !lcA1['$instOf_net_java_html_sound_AudioClip$Impl']) vm.java_lang_Class(false).castEx(lcA1, 'net.java.html.sound.AudioClip$Impl');
var stI0 = invoker.equals__ZLjava_lang_Object_2(lcA0['fld_net_java_html_sound_AudioClip$Impl_src'],lcA1['fld_net_java_html_sound_AudioClip$Impl_src']);
return stI0;
    }
    X_22: for (;;) { IF: if (gt <= 22) {

return 0;

    }
}}
};
c['equals__ZLjava_lang_Object_2'] = m;

    m.access = 1;
    m.cls = CLS;    __mul32 = function(x, y) {
        return (((x * (y >> 16)) << 16) + x * (y & 0xFFFF)) | 0;
    };

    c.constructor = CLS;
    function net_java_html_sound_AudioClip$ImplfillInstOf(x) {
        Object.defineProperty(x, '$instOf_net_java_html_sound_AudioClip$Impl', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: net_java_html_sound_AudioClip$ImplfillInstOf });
    net_java_html_sound_AudioClip$ImplfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'net/java/html/sound/AudioClip$Impl';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 48;
    CLS.$class.cnstr = CLS;
    var refs_net_java_html_sound_AudioClip;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    this['fld_net_java_html_sound_AudioClip$Impl_src'] = null;
    this['fld_net_java_html_sound_AudioClip$Impl_clip'] = null;
    this['fld_net_java_html_sound_AudioClip$Impl_env'] = null;
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.net_java_html_sound_AudioClip$Impl = net_java_html_sound_AudioClip$Impl;


function org_netbeans_html_sound_impl_BrowserAudioEnv() {
  var m;
  var CLS = org_netbeans_html_sound_impl_BrowserAudioEnv;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
  CLS['fld_DEFAULT'] = null;
  m = c._DEFAULT = function (v) {  if (arguments.length == 1) CLS['fld_DEFAULT'] = v; return CLS['fld_DEFAULT']; };
  CLS['fld_$$fn$$create_1'] = null;
  m = c._$$fn$$create_1 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$create_1'] = v; return CLS['fld_$$fn$$create_1']; };
  CLS['fld_$$fn$$play_2'] = null;
  m = c._$$fn$$play_2 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$play_2'] = v; return CLS['fld_$$fn$$play_2']; };
  CLS['fld_$$fn$$pause_3'] = null;
  m = c._$$fn$$pause_3 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$pause_3'] = v; return CLS['fld_$$fn$$pause_3']; };
  CLS['fld_$$fn$$setVolume_4'] = null;
  m = c._$$fn$$setVolume_4 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$setVolume_4'] = v; return CLS['fld_$$fn$$setVolume_4']; };
  CLS['fld_$$fn$$isSupported_5'] = null;
  m = c._$$fn$$isSupported_5 = function (v) {  if (arguments.length == 1) CLS['fld_$$fn$$isSupported_5'] = v; return CLS['fld_$$fn$$isSupported_5']; };
    m = CLS.cons__V = function() {
  var  lcA0 = this;
(refs_java_lang_Object || (refs_java_lang_Object = vm.java_lang_Object(false))).constructor['cons__V'].call(lcA0);
return;

};
    m.access = 2;
    m.cls = CLS;
    m = c.create__Ljava_lang_Object_2Ljava_lang_String_2 = function() {
  var r = (function(src) {

  src = vm.java_lang_Class(false).toJS(src);if (!Audio) return null;return new Audio(src);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 1;
    m.cls = CLS;
    m = c.play__VLjava_lang_Object_2 = function() {
  var r = (function(a) {

  a = vm.java_lang_Class(false).toJS(a);a.play();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 1;
    m.cls = CLS;
    m = c.pause__VLjava_lang_Object_2 = function() {
  var r = (function(a) {

  a = vm.java_lang_Class(false).toJS(a);a.pause();
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 1;
    m.cls = CLS;
    m = c.setVolume__VLjava_lang_Object_2D = function() {
  var r = (function(a,volume) {

  a = vm.java_lang_Class(false).toJS(a);
  volume = vm.java_lang_Class(false).toJS(volume);a.setVolume(volume);
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 1;
    m.cls = CLS;
    m = c.isSupported__ZLjava_lang_Object_2 = function() {
  var r = (function(a) {

  a = vm.java_lang_Class(false).toJS(a);return true;
}).apply(this, arguments);
  return r === undefined ? null : r;

}

    m.access = 1;
    m.cls = CLS;
    m = c.class__V = function() {
var stA0 = new org_netbeans_html_sound_impl_BrowserAudioEnv;
c.constructor.cons__V.call(stA0);
c._DEFAULT(stA0);
return;

};
    m.access = 8;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_sound_impl_BrowserAudioEnvfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_sound_impl_BrowserAudioEnv', { value : true });
      vm.org_netbeans_html_sound_spi_AudioEnvironment(false)['fillInstOf'](x);
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_sound_impl_BrowserAudioEnvfillInstOf });
    org_netbeans_html_sound_impl_BrowserAudioEnvfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/sound/impl/BrowserAudioEnv';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
        org_netbeans_html_sound_spi_AudioEnvironment(false).constructor.$class
    ]; };
    CLS.$class.access = 49;
    CLS.$class.cnstr = CLS;
    c.class__V();
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
vm.org_netbeans_html_sound_impl_BrowserAudioEnv = org_netbeans_html_sound_impl_BrowserAudioEnv;

vm.java_util_ServiceLoader = link('java/util/ServiceLoader', function(f) { vm.java_util_ServiceLoader =  f; });
vm.org_netbeans_html_context_spi_Contexts = link('org/netbeans/html/context/spi/Contexts', function(f) { vm.org_netbeans_html_context_spi_Contexts =  f; });

function org_netbeans_html_sound_spi_AudioEnvironment() {
  var m;
  var CLS = org_netbeans_html_sound_spi_AudioEnvironment;
  if (!CLS.$class) {
    var pp = vm.java_lang_Object(true);
    var p = CLS.prototype = pp;
    var c = p;
    var sprcls = pp.constructor.$class;
    m = c.create__Ljava_lang_Object_2Ljava_lang_String_2 = function(lcA1) {
};
    m.access = 1025;
    m.cls = CLS;
    m = c.play__VLjava_lang_Object_2 = function(lcA1) {
};
    m.access = 1025;
    m.cls = CLS;
    m = c.pause__VLjava_lang_Object_2 = function(lcA1) {
};
    m.access = 1025;
    m.cls = CLS;
    m = c.setVolume__VLjava_lang_Object_2D = function(lcA1, lcD2) {
};
    m.access = 1025;
    m.cls = CLS;
    m = c.isSupported__ZLjava_lang_Object_2 = function(lcA1) {
};
    m.access = 1025;
    m.cls = CLS;
    c.constructor = CLS;
    function org_netbeans_html_sound_spi_AudioEnvironmentfillInstOf(x) {
        Object.defineProperty(x, '$instOf_org_netbeans_html_sound_spi_AudioEnvironment', { value : true });
    }
    if (!c.hasOwnProperty('fillInstOf')) Object.defineProperty(c, 'fillInstOf', { value: org_netbeans_html_sound_spi_AudioEnvironmentfillInstOf });
    org_netbeans_html_sound_spi_AudioEnvironmentfillInstOf(c);
    CLS.$class = 'temp';
    CLS.$class = vm.java_lang_Class(true);
    CLS.$class.jvmName = 'org/netbeans/html/sound/spi/AudioEnvironment';
    CLS.$class.superclass = sprcls;
    CLS.$class.interfaces = function() { return [
    ]; };
    CLS.$class.access = 1537;
    CLS.$class.cnstr = CLS;
  }
  if (arguments.length === 0) {
    if (!(this instanceof CLS)) {
      return new CLS();
    }
    return this;
  }
  return arguments[0] ? new CLS() : CLS.prototype;
};
vm.org_netbeans_html_sound_spi_AudioEnvironment = org_netbeans_html_sound_spi_AudioEnvironment;

vm.net_java_html_BrwsrCtx = link('net/java/html/BrwsrCtx', function(f) { vm.net_java_html_BrwsrCtx =  f; });
  invoker.getClass__Ljava_lang_Class_2 = function(target) {
    return target['getClass__Ljava_lang_Class_2']();
  };
  invoker.iterator__Ljava_util_Iterator_2 = function(target) {
    return target['iterator__Ljava_util_Iterator_2']();
  };
  invoker.hasNext__Z = function(target) {
    return target['hasNext__Z']();
  };
  invoker.next__Ljava_lang_Object_2 = function(target) {
    return target['next__Ljava_lang_Object_2']();
  };
  invoker.hashCode__I = function(target) {
    return target['hashCode__I']();
  };
  invoker.equals__ZLjava_lang_Object_2 = function(target, p1) {
    return target['equals__ZLjava_lang_Object_2'](p1);
  };
  exports['registerResource']('META-INF/MANIFEST.MF', 'TWFuaWZlc3QtVmVyc2lvbjogMS4wDQpCbmQtTGFzdE1vZGlmaWVkOiAxNTEwNTc3MjczMzg1DQpCdWlsZC1KZGs6IDEuOC4wXzE0NA0KQnVpbHQtQnk6IGRldmVsDQpCdW5kbGUtRGVzY3JpcHRpb246IEphdmEubmV0IC0gVGhlIFNvdXJjZSBmb3IgSmF2YSBUZWNobm9sb2d5IENvbGxhYm9yYXQNCiBpb24NCkJ1bmRsZS1Eb2NVUkw6IGh0dHA6Ly9uZXRiZWFucy5vcmcNCkJ1bmRsZS1MaWNlbnNlOiBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wLnR4dA0KQnVuZGxlLU1hbmlmZXN0VmVyc2lvbjogMg0KQnVuZGxlLU5hbWU6IFNvdW5kIEFQSSB2aWEgSFRNTA0KQnVuZGxlLVN5bWJvbGljTmFtZTogbmV0LmphdmEuaHRtbC5zb3VuZA0KQnVuZGxlLVZlbmRvcjogTmV0QmVhbnMNCkJ1bmRsZS1WZXJzaW9uOiAxLjUuMQ0KQ3JlYXRlZC1CeTogQXBhY2hlIE1hdmVuIEJ1bmRsZSBQbHVnaW4NCkV4cG9ydC1QYWNrYWdlOiBuZXQuamF2YS5odG1sLnNvdW5kO3ZlcnNpb249IjEuNS4xIg0KSW1wb3J0LVBhY2thZ2U6IG5ldC5qYXZhLmh0bWwsb3JnLm5ldGJlYW5zLmh0bWwuYm9vdC5zcGksb3JnLm5ldGJlYW5zLmh0DQogbWwuY29udGV4dC5zcGkNClRvb2w6IEJuZC0yLjEuMC4yMDEzMDQyNi0xMjIyMTMNCg==');
  exports['registerResource']('META-INF/DEPENDENCIES', 'Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCi8vIFRyYW5zaXRpdmUgZGVwZW5kZW5jaWVzIG9mIHRoaXMgcHJvamVjdCBkZXRlcm1pbmVkIGZyb20gdGhlCi8vIG1hdmVuIHBvbSBvcmdhbml6ZWQgYnkgb3JnYW5pemF0aW9uLgovLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KClNvdW5kIEFQSSB2aWEgSFRNTAoKCgoKCg==');
  exports['registerResource']('META-INF/DISCLAIMER', 'U291bmQgQVBJIHZpYSBIVE1MIGlzIGFuIGVmZm9ydCB1bmRlcmdvaW5nIGluY3ViYXRpb24gYXQgdGhlIEFwYWNoZSBTb2Z0d2FyZSAKRm91bmRhdGlvbiAoQVNGKSwgc3BvbnNvcmVkIGJ5IHRoZSBBcGFjaGUgSW5jdWJhdG9yIFBNQy4gCgpJbmN1YmF0aW9uIGlzIHJlcXVpcmVkIG9mIGFsbCBuZXdseSBhY2NlcHRlZCBwcm9qZWN0cyB1bnRpbCBhIGZ1cnRoZXIgcmV2aWV3IAppbmRpY2F0ZXMgdGhhdCB0aGUgaW5mcmFzdHJ1Y3R1cmUsIGNvbW11bmljYXRpb25zLCBhbmQgZGVjaXNpb24gbWFraW5nIHByb2Nlc3MgCmhhdmUgc3RhYmlsaXplZCBpbiBhIG1hbm5lciBjb25zaXN0ZW50IHdpdGggb3RoZXIgc3VjY2Vzc2Z1bCBBU0YgcHJvamVjdHMuIAoKV2hpbGUgaW5jdWJhdGlvbiBzdGF0dXMgaXMgbm90IG5lY2Vzc2FyaWx5IGEgcmVmbGVjdGlvbiBvZiB0aGUgY29tcGxldGVuZXNzIApvciBzdGFiaWxpdHkgb2YgdGhlIGNvZGUsIGl0IGRvZXMgaW5kaWNhdGUgdGhhdCB0aGUgcHJvamVjdCBoYXMgeWV0IHRvIGJlIApmdWxseSBlbmRvcnNlZCBieSB0aGUgQVNGLgo=');
  exports['registerResource']('META-INF/LICENSE', 'CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwYWNoZSBMaWNlbnNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgIFZlcnNpb24gMi4wLCBKYW51YXJ5IDIwMDQKICAgICAgICAgICAgICAgICAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzLwoKICAgVEVSTVMgQU5EIENPTkRJVElPTlMgRk9SIFVTRSwgUkVQUk9EVUNUSU9OLCBBTkQgRElTVFJJQlVUSU9OCgogICAxLiBEZWZpbml0aW9ucy4KCiAgICAgICJMaWNlbnNlIiBzaGFsbCBtZWFuIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBmb3IgdXNlLCByZXByb2R1Y3Rpb24sCiAgICAgIGFuZCBkaXN0cmlidXRpb24gYXMgZGVmaW5lZCBieSBTZWN0aW9ucyAxIHRocm91Z2ggOSBvZiB0aGlzIGRvY3VtZW50LgoKICAgICAgIkxpY2Vuc29yIiBzaGFsbCBtZWFuIHRoZSBjb3B5cmlnaHQgb3duZXIgb3IgZW50aXR5IGF1dGhvcml6ZWQgYnkKICAgICAgdGhlIGNvcHlyaWdodCBvd25lciB0aGF0IGlzIGdyYW50aW5nIHRoZSBMaWNlbnNlLgoKICAgICAgIkxlZ2FsIEVudGl0eSIgc2hhbGwgbWVhbiB0aGUgdW5pb24gb2YgdGhlIGFjdGluZyBlbnRpdHkgYW5kIGFsbAogICAgICBvdGhlciBlbnRpdGllcyB0aGF0IGNvbnRyb2wsIGFyZSBjb250cm9sbGVkIGJ5LCBvciBhcmUgdW5kZXIgY29tbW9uCiAgICAgIGNvbnRyb2wgd2l0aCB0aGF0IGVudGl0eS4gRm9yIHRoZSBwdXJwb3NlcyBvZiB0aGlzIGRlZmluaXRpb24sCiAgICAgICJjb250cm9sIiBtZWFucyAoaSkgdGhlIHBvd2VyLCBkaXJlY3Qgb3IgaW5kaXJlY3QsIHRvIGNhdXNlIHRoZQogICAgICBkaXJlY3Rpb24gb3IgbWFuYWdlbWVudCBvZiBzdWNoIGVudGl0eSwgd2hldGhlciBieSBjb250cmFjdCBvcgogICAgICBvdGhlcndpc2UsIG9yIChpaSkgb3duZXJzaGlwIG9mIGZpZnR5IHBlcmNlbnQgKDUwJSkgb3IgbW9yZSBvZiB0aGUKICAgICAgb3V0c3RhbmRpbmcgc2hhcmVzLCBvciAoaWlpKSBiZW5lZmljaWFsIG93bmVyc2hpcCBvZiBzdWNoIGVudGl0eS4KCiAgICAgICJZb3UiIChvciAiWW91ciIpIHNoYWxsIG1lYW4gYW4gaW5kaXZpZHVhbCBvciBMZWdhbCBFbnRpdHkKICAgICAgZXhlcmNpc2luZyBwZXJtaXNzaW9ucyBncmFudGVkIGJ5IHRoaXMgTGljZW5zZS4KCiAgICAgICJTb3VyY2UiIGZvcm0gc2hhbGwgbWVhbiB0aGUgcHJlZmVycmVkIGZvcm0gZm9yIG1ha2luZyBtb2RpZmljYXRpb25zLAogICAgICBpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIHNvZnR3YXJlIHNvdXJjZSBjb2RlLCBkb2N1bWVudGF0aW9uCiAgICAgIHNvdXJjZSwgYW5kIGNvbmZpZ3VyYXRpb24gZmlsZXMuCgogICAgICAiT2JqZWN0IiBmb3JtIHNoYWxsIG1lYW4gYW55IGZvcm0gcmVzdWx0aW5nIGZyb20gbWVjaGFuaWNhbAogICAgICB0cmFuc2Zvcm1hdGlvbiBvciB0cmFuc2xhdGlvbiBvZiBhIFNvdXJjZSBmb3JtLCBpbmNsdWRpbmcgYnV0CiAgICAgIG5vdCBsaW1pdGVkIHRvIGNvbXBpbGVkIG9iamVjdCBjb2RlLCBnZW5lcmF0ZWQgZG9jdW1lbnRhdGlvbiwKICAgICAgYW5kIGNvbnZlcnNpb25zIHRvIG90aGVyIG1lZGlhIHR5cGVzLgoKICAgICAgIldvcmsiIHNoYWxsIG1lYW4gdGhlIHdvcmsgb2YgYXV0aG9yc2hpcCwgd2hldGhlciBpbiBTb3VyY2Ugb3IKICAgICAgT2JqZWN0IGZvcm0sIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBMaWNlbnNlLCBhcyBpbmRpY2F0ZWQgYnkgYQogICAgICBjb3B5cmlnaHQgbm90aWNlIHRoYXQgaXMgaW5jbHVkZWQgaW4gb3IgYXR0YWNoZWQgdG8gdGhlIHdvcmsKICAgICAgKGFuIGV4YW1wbGUgaXMgcHJvdmlkZWQgaW4gdGhlIEFwcGVuZGl4IGJlbG93KS4KCiAgICAgICJEZXJpdmF0aXZlIFdvcmtzIiBzaGFsbCBtZWFuIGFueSB3b3JrLCB3aGV0aGVyIGluIFNvdXJjZSBvciBPYmplY3QKICAgICAgZm9ybSwgdGhhdCBpcyBiYXNlZCBvbiAob3IgZGVyaXZlZCBmcm9tKSB0aGUgV29yayBhbmQgZm9yIHdoaWNoIHRoZQogICAgICBlZGl0b3JpYWwgcmV2aXNpb25zLCBhbm5vdGF0aW9ucywgZWxhYm9yYXRpb25zLCBvciBvdGhlciBtb2RpZmljYXRpb25zCiAgICAgIHJlcHJlc2VudCwgYXMgYSB3aG9sZSwgYW4gb3JpZ2luYWwgd29yayBvZiBhdXRob3JzaGlwLiBGb3IgdGhlIHB1cnBvc2VzCiAgICAgIG9mIHRoaXMgTGljZW5zZSwgRGVyaXZhdGl2ZSBXb3JrcyBzaGFsbCBub3QgaW5jbHVkZSB3b3JrcyB0aGF0IHJlbWFpbgogICAgICBzZXBhcmFibGUgZnJvbSwgb3IgbWVyZWx5IGxpbmsgKG9yIGJpbmQgYnkgbmFtZSkgdG8gdGhlIGludGVyZmFjZXMgb2YsCiAgICAgIHRoZSBXb3JrIGFuZCBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YuCgogICAgICAiQ29udHJpYnV0aW9uIiBzaGFsbCBtZWFuIGFueSB3b3JrIG9mIGF1dGhvcnNoaXAsIGluY2x1ZGluZwogICAgICB0aGUgb3JpZ2luYWwgdmVyc2lvbiBvZiB0aGUgV29yayBhbmQgYW55IG1vZGlmaWNhdGlvbnMgb3IgYWRkaXRpb25zCiAgICAgIHRvIHRoYXQgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIHRoYXQgaXMgaW50ZW50aW9uYWxseQogICAgICBzdWJtaXR0ZWQgdG8gTGljZW5zb3IgZm9yIGluY2x1c2lvbiBpbiB0aGUgV29yayBieSB0aGUgY29weXJpZ2h0IG93bmVyCiAgICAgIG9yIGJ5IGFuIGluZGl2aWR1YWwgb3IgTGVnYWwgRW50aXR5IGF1dGhvcml6ZWQgdG8gc3VibWl0IG9uIGJlaGFsZiBvZgogICAgICB0aGUgY29weXJpZ2h0IG93bmVyLiBGb3IgdGhlIHB1cnBvc2VzIG9mIHRoaXMgZGVmaW5pdGlvbiwgInN1Ym1pdHRlZCIKICAgICAgbWVhbnMgYW55IGZvcm0gb2YgZWxlY3Ryb25pYywgdmVyYmFsLCBvciB3cml0dGVuIGNvbW11bmljYXRpb24gc2VudAogICAgICB0byB0aGUgTGljZW5zb3Igb3IgaXRzIHJlcHJlc2VudGF0aXZlcywgaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0bwogICAgICBjb21tdW5pY2F0aW9uIG9uIGVsZWN0cm9uaWMgbWFpbGluZyBsaXN0cywgc291cmNlIGNvZGUgY29udHJvbCBzeXN0ZW1zLAogICAgICBhbmQgaXNzdWUgdHJhY2tpbmcgc3lzdGVtcyB0aGF0IGFyZSBtYW5hZ2VkIGJ5LCBvciBvbiBiZWhhbGYgb2YsIHRoZQogICAgICBMaWNlbnNvciBmb3IgdGhlIHB1cnBvc2Ugb2YgZGlzY3Vzc2luZyBhbmQgaW1wcm92aW5nIHRoZSBXb3JrLCBidXQKICAgICAgZXhjbHVkaW5nIGNvbW11bmljYXRpb24gdGhhdCBpcyBjb25zcGljdW91c2x5IG1hcmtlZCBvciBvdGhlcndpc2UKICAgICAgZGVzaWduYXRlZCBpbiB3cml0aW5nIGJ5IHRoZSBjb3B5cmlnaHQgb3duZXIgYXMgIk5vdCBhIENvbnRyaWJ1dGlvbi4iCgogICAgICAiQ29udHJpYnV0b3IiIHNoYWxsIG1lYW4gTGljZW5zb3IgYW5kIGFueSBpbmRpdmlkdWFsIG9yIExlZ2FsIEVudGl0eQogICAgICBvbiBiZWhhbGYgb2Ygd2hvbSBhIENvbnRyaWJ1dGlvbiBoYXMgYmVlbiByZWNlaXZlZCBieSBMaWNlbnNvciBhbmQKICAgICAgc3Vic2VxdWVudGx5IGluY29ycG9yYXRlZCB3aXRoaW4gdGhlIFdvcmsuCgogICAyLiBHcmFudCBvZiBDb3B5cmlnaHQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICBjb3B5cmlnaHQgbGljZW5zZSB0byByZXByb2R1Y2UsIHByZXBhcmUgRGVyaXZhdGl2ZSBXb3JrcyBvZiwKICAgICAgcHVibGljbHkgZGlzcGxheSwgcHVibGljbHkgcGVyZm9ybSwgc3VibGljZW5zZSwgYW5kIGRpc3RyaWJ1dGUgdGhlCiAgICAgIFdvcmsgYW5kIHN1Y2ggRGVyaXZhdGl2ZSBXb3JrcyBpbiBTb3VyY2Ugb3IgT2JqZWN0IGZvcm0uCgogICAzLiBHcmFudCBvZiBQYXRlbnQgTGljZW5zZS4gU3ViamVjdCB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCBlYWNoIENvbnRyaWJ1dG9yIGhlcmVieSBncmFudHMgdG8gWW91IGEgcGVycGV0dWFsLAogICAgICB3b3JsZHdpZGUsIG5vbi1leGNsdXNpdmUsIG5vLWNoYXJnZSwgcm95YWx0eS1mcmVlLCBpcnJldm9jYWJsZQogICAgICAoZXhjZXB0IGFzIHN0YXRlZCBpbiB0aGlzIHNlY3Rpb24pIHBhdGVudCBsaWNlbnNlIHRvIG1ha2UsIGhhdmUgbWFkZSwKICAgICAgdXNlLCBvZmZlciB0byBzZWxsLCBzZWxsLCBpbXBvcnQsIGFuZCBvdGhlcndpc2UgdHJhbnNmZXIgdGhlIFdvcmssCiAgICAgIHdoZXJlIHN1Y2ggbGljZW5zZSBhcHBsaWVzIG9ubHkgdG8gdGhvc2UgcGF0ZW50IGNsYWltcyBsaWNlbnNhYmxlCiAgICAgIGJ5IHN1Y2ggQ29udHJpYnV0b3IgdGhhdCBhcmUgbmVjZXNzYXJpbHkgaW5mcmluZ2VkIGJ5IHRoZWlyCiAgICAgIENvbnRyaWJ1dGlvbihzKSBhbG9uZSBvciBieSBjb21iaW5hdGlvbiBvZiB0aGVpciBDb250cmlidXRpb24ocykKICAgICAgd2l0aCB0aGUgV29yayB0byB3aGljaCBzdWNoIENvbnRyaWJ1dGlvbihzKSB3YXMgc3VibWl0dGVkLiBJZiBZb3UKICAgICAgaW5zdGl0dXRlIHBhdGVudCBsaXRpZ2F0aW9uIGFnYWluc3QgYW55IGVudGl0eSAoaW5jbHVkaW5nIGEKICAgICAgY3Jvc3MtY2xhaW0gb3IgY291bnRlcmNsYWltIGluIGEgbGF3c3VpdCkgYWxsZWdpbmcgdGhhdCB0aGUgV29yawogICAgICBvciBhIENvbnRyaWJ1dGlvbiBpbmNvcnBvcmF0ZWQgd2l0aGluIHRoZSBXb3JrIGNvbnN0aXR1dGVzIGRpcmVjdAogICAgICBvciBjb250cmlidXRvcnkgcGF0ZW50IGluZnJpbmdlbWVudCwgdGhlbiBhbnkgcGF0ZW50IGxpY2Vuc2VzCiAgICAgIGdyYW50ZWQgdG8gWW91IHVuZGVyIHRoaXMgTGljZW5zZSBmb3IgdGhhdCBXb3JrIHNoYWxsIHRlcm1pbmF0ZQogICAgICBhcyBvZiB0aGUgZGF0ZSBzdWNoIGxpdGlnYXRpb24gaXMgZmlsZWQuCgogICA0LiBSZWRpc3RyaWJ1dGlvbi4gWW91IG1heSByZXByb2R1Y2UgYW5kIGRpc3RyaWJ1dGUgY29waWVzIG9mIHRoZQogICAgICBXb3JrIG9yIERlcml2YXRpdmUgV29ya3MgdGhlcmVvZiBpbiBhbnkgbWVkaXVtLCB3aXRoIG9yIHdpdGhvdXQKICAgICAgbW9kaWZpY2F0aW9ucywgYW5kIGluIFNvdXJjZSBvciBPYmplY3QgZm9ybSwgcHJvdmlkZWQgdGhhdCBZb3UKICAgICAgbWVldCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6CgogICAgICAoYSkgWW91IG11c3QgZ2l2ZSBhbnkgb3RoZXIgcmVjaXBpZW50cyBvZiB0aGUgV29yayBvcgogICAgICAgICAgRGVyaXZhdGl2ZSBXb3JrcyBhIGNvcHkgb2YgdGhpcyBMaWNlbnNlOyBhbmQKCiAgICAgIChiKSBZb3UgbXVzdCBjYXVzZSBhbnkgbW9kaWZpZWQgZmlsZXMgdG8gY2FycnkgcHJvbWluZW50IG5vdGljZXMKICAgICAgICAgIHN0YXRpbmcgdGhhdCBZb3UgY2hhbmdlZCB0aGUgZmlsZXM7IGFuZAoKICAgICAgKGMpIFlvdSBtdXN0IHJldGFpbiwgaW4gdGhlIFNvdXJjZSBmb3JtIG9mIGFueSBEZXJpdmF0aXZlIFdvcmtzCiAgICAgICAgICB0aGF0IFlvdSBkaXN0cmlidXRlLCBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgYW5kCiAgICAgICAgICBhdHRyaWJ1dGlvbiBub3RpY2VzIGZyb20gdGhlIFNvdXJjZSBmb3JtIG9mIHRoZSBXb3JrLAogICAgICAgICAgZXhjbHVkaW5nIHRob3NlIG5vdGljZXMgdGhhdCBkbyBub3QgcGVydGFpbiB0byBhbnkgcGFydCBvZgogICAgICAgICAgdGhlIERlcml2YXRpdmUgV29ya3M7IGFuZAoKICAgICAgKGQpIElmIHRoZSBXb3JrIGluY2x1ZGVzIGEgIk5PVElDRSIgdGV4dCBmaWxlIGFzIHBhcnQgb2YgaXRzCiAgICAgICAgICBkaXN0cmlidXRpb24sIHRoZW4gYW55IERlcml2YXRpdmUgV29ya3MgdGhhdCBZb3UgZGlzdHJpYnV0ZSBtdXN0CiAgICAgICAgICBpbmNsdWRlIGEgcmVhZGFibGUgY29weSBvZiB0aGUgYXR0cmlidXRpb24gbm90aWNlcyBjb250YWluZWQKICAgICAgICAgIHdpdGhpbiBzdWNoIE5PVElDRSBmaWxlLCBleGNsdWRpbmcgdGhvc2Ugbm90aWNlcyB0aGF0IGRvIG5vdAogICAgICAgICAgcGVydGFpbiB0byBhbnkgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaW4gYXQgbGVhc3Qgb25lCiAgICAgICAgICBvZiB0aGUgZm9sbG93aW5nIHBsYWNlczogd2l0aGluIGEgTk9USUNFIHRleHQgZmlsZSBkaXN0cmlidXRlZAogICAgICAgICAgYXMgcGFydCBvZiB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgd2l0aGluIHRoZSBTb3VyY2UgZm9ybSBvcgogICAgICAgICAgZG9jdW1lbnRhdGlvbiwgaWYgcHJvdmlkZWQgYWxvbmcgd2l0aCB0aGUgRGVyaXZhdGl2ZSBXb3Jrczsgb3IsCiAgICAgICAgICB3aXRoaW4gYSBkaXNwbGF5IGdlbmVyYXRlZCBieSB0aGUgRGVyaXZhdGl2ZSBXb3JrcywgaWYgYW5kCiAgICAgICAgICB3aGVyZXZlciBzdWNoIHRoaXJkLXBhcnR5IG5vdGljZXMgbm9ybWFsbHkgYXBwZWFyLiBUaGUgY29udGVudHMKICAgICAgICAgIG9mIHRoZSBOT1RJQ0UgZmlsZSBhcmUgZm9yIGluZm9ybWF0aW9uYWwgcHVycG9zZXMgb25seSBhbmQKICAgICAgICAgIGRvIG5vdCBtb2RpZnkgdGhlIExpY2Vuc2UuIFlvdSBtYXkgYWRkIFlvdXIgb3duIGF0dHJpYnV0aW9uCiAgICAgICAgICBub3RpY2VzIHdpdGhpbiBEZXJpdmF0aXZlIFdvcmtzIHRoYXQgWW91IGRpc3RyaWJ1dGUsIGFsb25nc2lkZQogICAgICAgICAgb3IgYXMgYW4gYWRkZW5kdW0gdG8gdGhlIE5PVElDRSB0ZXh0IGZyb20gdGhlIFdvcmssIHByb3ZpZGVkCiAgICAgICAgICB0aGF0IHN1Y2ggYWRkaXRpb25hbCBhdHRyaWJ1dGlvbiBub3RpY2VzIGNhbm5vdCBiZSBjb25zdHJ1ZWQKICAgICAgICAgIGFzIG1vZGlmeWluZyB0aGUgTGljZW5zZS4KCiAgICAgIFlvdSBtYXkgYWRkIFlvdXIgb3duIGNvcHlyaWdodCBzdGF0ZW1lbnQgdG8gWW91ciBtb2RpZmljYXRpb25zIGFuZAogICAgICBtYXkgcHJvdmlkZSBhZGRpdGlvbmFsIG9yIGRpZmZlcmVudCBsaWNlbnNlIHRlcm1zIGFuZCBjb25kaXRpb25zCiAgICAgIGZvciB1c2UsIHJlcHJvZHVjdGlvbiwgb3IgZGlzdHJpYnV0aW9uIG9mIFlvdXIgbW9kaWZpY2F0aW9ucywgb3IKICAgICAgZm9yIGFueSBzdWNoIERlcml2YXRpdmUgV29ya3MgYXMgYSB3aG9sZSwgcHJvdmlkZWQgWW91ciB1c2UsCiAgICAgIHJlcHJvZHVjdGlvbiwgYW5kIGRpc3RyaWJ1dGlvbiBvZiB0aGUgV29yayBvdGhlcndpc2UgY29tcGxpZXMgd2l0aAogICAgICB0aGUgY29uZGl0aW9ucyBzdGF0ZWQgaW4gdGhpcyBMaWNlbnNlLgoKICAgNS4gU3VibWlzc2lvbiBvZiBDb250cmlidXRpb25zLiBVbmxlc3MgWW91IGV4cGxpY2l0bHkgc3RhdGUgb3RoZXJ3aXNlLAogICAgICBhbnkgQ29udHJpYnV0aW9uIGludGVudGlvbmFsbHkgc3VibWl0dGVkIGZvciBpbmNsdXNpb24gaW4gdGhlIFdvcmsKICAgICAgYnkgWW91IHRvIHRoZSBMaWNlbnNvciBzaGFsbCBiZSB1bmRlciB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YKICAgICAgdGhpcyBMaWNlbnNlLCB3aXRob3V0IGFueSBhZGRpdGlvbmFsIHRlcm1zIG9yIGNvbmRpdGlvbnMuCiAgICAgIE5vdHdpdGhzdGFuZGluZyB0aGUgYWJvdmUsIG5vdGhpbmcgaGVyZWluIHNoYWxsIHN1cGVyc2VkZSBvciBtb2RpZnkKICAgICAgdGhlIHRlcm1zIG9mIGFueSBzZXBhcmF0ZSBsaWNlbnNlIGFncmVlbWVudCB5b3UgbWF5IGhhdmUgZXhlY3V0ZWQKICAgICAgd2l0aCBMaWNlbnNvciByZWdhcmRpbmcgc3VjaCBDb250cmlidXRpb25zLgoKICAgNi4gVHJhZGVtYXJrcy4gVGhpcyBMaWNlbnNlIGRvZXMgbm90IGdyYW50IHBlcm1pc3Npb24gdG8gdXNlIHRoZSB0cmFkZQogICAgICBuYW1lcywgdHJhZGVtYXJrcywgc2VydmljZSBtYXJrcywgb3IgcHJvZHVjdCBuYW1lcyBvZiB0aGUgTGljZW5zb3IsCiAgICAgIGV4Y2VwdCBhcyByZXF1aXJlZCBmb3IgcmVhc29uYWJsZSBhbmQgY3VzdG9tYXJ5IHVzZSBpbiBkZXNjcmliaW5nIHRoZQogICAgICBvcmlnaW4gb2YgdGhlIFdvcmsgYW5kIHJlcHJvZHVjaW5nIHRoZSBjb250ZW50IG9mIHRoZSBOT1RJQ0UgZmlsZS4KCiAgIDcuIERpc2NsYWltZXIgb2YgV2FycmFudHkuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvcgogICAgICBhZ3JlZWQgdG8gaW4gd3JpdGluZywgTGljZW5zb3IgcHJvdmlkZXMgdGhlIFdvcmsgKGFuZCBlYWNoCiAgICAgIENvbnRyaWJ1dG9yIHByb3ZpZGVzIGl0cyBDb250cmlidXRpb25zKSBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICAgICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IKICAgICAgaW1wbGllZCwgaW5jbHVkaW5nLCB3aXRob3V0IGxpbWl0YXRpb24sIGFueSB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMKICAgICAgb2YgVElUTEUsIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSwgb3IgRklUTkVTUyBGT1IgQQogICAgICBQQVJUSUNVTEFSIFBVUlBPU0UuIFlvdSBhcmUgc29sZWx5IHJlc3BvbnNpYmxlIGZvciBkZXRlcm1pbmluZyB0aGUKICAgICAgYXBwcm9wcmlhdGVuZXNzIG9mIHVzaW5nIG9yIHJlZGlzdHJpYnV0aW5nIHRoZSBXb3JrIGFuZCBhc3N1bWUgYW55CiAgICAgIHJpc2tzIGFzc29jaWF0ZWQgd2l0aCBZb3VyIGV4ZXJjaXNlIG9mIHBlcm1pc3Npb25zIHVuZGVyIHRoaXMgTGljZW5zZS4KCiAgIDguIExpbWl0YXRpb24gb2YgTGlhYmlsaXR5LiBJbiBubyBldmVudCBhbmQgdW5kZXIgbm8gbGVnYWwgdGhlb3J5LAogICAgICB3aGV0aGVyIGluIHRvcnQgKGluY2x1ZGluZyBuZWdsaWdlbmNlKSwgY29udHJhY3QsIG9yIG90aGVyd2lzZSwKICAgICAgdW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IChzdWNoIGFzIGRlbGliZXJhdGUgYW5kIGdyb3NzbHkKICAgICAgbmVnbGlnZW50IGFjdHMpIG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzaGFsbCBhbnkgQ29udHJpYnV0b3IgYmUKICAgICAgbGlhYmxlIHRvIFlvdSBmb3IgZGFtYWdlcywgaW5jbHVkaW5nIGFueSBkaXJlY3QsIGluZGlyZWN0LCBzcGVjaWFsLAogICAgICBpbmNpZGVudGFsLCBvciBjb25zZXF1ZW50aWFsIGRhbWFnZXMgb2YgYW55IGNoYXJhY3RlciBhcmlzaW5nIGFzIGEKICAgICAgcmVzdWx0IG9mIHRoaXMgTGljZW5zZSBvciBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZQogICAgICBXb3JrIChpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZ29vZHdpbGwsCiAgICAgIHdvcmsgc3RvcHBhZ2UsIGNvbXB1dGVyIGZhaWx1cmUgb3IgbWFsZnVuY3Rpb24sIG9yIGFueSBhbmQgYWxsCiAgICAgIG90aGVyIGNvbW1lcmNpYWwgZGFtYWdlcyBvciBsb3NzZXMpLCBldmVuIGlmIHN1Y2ggQ29udHJpYnV0b3IKICAgICAgaGFzIGJlZW4gYWR2aXNlZCBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2VzLgoKICAgOS4gQWNjZXB0aW5nIFdhcnJhbnR5IG9yIEFkZGl0aW9uYWwgTGlhYmlsaXR5LiBXaGlsZSByZWRpc3RyaWJ1dGluZwogICAgICB0aGUgV29yayBvciBEZXJpdmF0aXZlIFdvcmtzIHRoZXJlb2YsIFlvdSBtYXkgY2hvb3NlIHRvIG9mZmVyLAogICAgICBhbmQgY2hhcmdlIGEgZmVlIGZvciwgYWNjZXB0YW5jZSBvZiBzdXBwb3J0LCB3YXJyYW50eSwgaW5kZW1uaXR5LAogICAgICBvciBvdGhlciBsaWFiaWxpdHkgb2JsaWdhdGlvbnMgYW5kL29yIHJpZ2h0cyBjb25zaXN0ZW50IHdpdGggdGhpcwogICAgICBMaWNlbnNlLiBIb3dldmVyLCBpbiBhY2NlcHRpbmcgc3VjaCBvYmxpZ2F0aW9ucywgWW91IG1heSBhY3Qgb25seQogICAgICBvbiBZb3VyIG93biBiZWhhbGYgYW5kIG9uIFlvdXIgc29sZSByZXNwb25zaWJpbGl0eSwgbm90IG9uIGJlaGFsZgogICAgICBvZiBhbnkgb3RoZXIgQ29udHJpYnV0b3IsIGFuZCBvbmx5IGlmIFlvdSBhZ3JlZSB0byBpbmRlbW5pZnksCiAgICAgIGRlZmVuZCwgYW5kIGhvbGQgZWFjaCBDb250cmlidXRvciBoYXJtbGVzcyBmb3IgYW55IGxpYWJpbGl0eQogICAgICBpbmN1cnJlZCBieSwgb3IgY2xhaW1zIGFzc2VydGVkIGFnYWluc3QsIHN1Y2ggQ29udHJpYnV0b3IgYnkgcmVhc29uCiAgICAgIG9mIHlvdXIgYWNjZXB0aW5nIGFueSBzdWNoIHdhcnJhbnR5IG9yIGFkZGl0aW9uYWwgbGlhYmlsaXR5LgoKICAgRU5EIE9GIFRFUk1TIEFORCBDT05ESVRJT05TCgogICBBUFBFTkRJWDogSG93IHRvIGFwcGx5IHRoZSBBcGFjaGUgTGljZW5zZSB0byB5b3VyIHdvcmsuCgogICAgICBUbyBhcHBseSB0aGUgQXBhY2hlIExpY2Vuc2UgdG8geW91ciB3b3JrLCBhdHRhY2ggdGhlIGZvbGxvd2luZwogICAgICBib2lsZXJwbGF0ZSBub3RpY2UsIHdpdGggdGhlIGZpZWxkcyBlbmNsb3NlZCBieSBicmFja2V0cyAiW10iCiAgICAgIHJlcGxhY2VkIHdpdGggeW91ciBvd24gaWRlbnRpZnlpbmcgaW5mb3JtYXRpb24uIChEb24ndCBpbmNsdWRlCiAgICAgIHRoZSBicmFja2V0cyEpICBUaGUgdGV4dCBzaG91bGQgYmUgZW5jbG9zZWQgaW4gdGhlIGFwcHJvcHJpYXRlCiAgICAgIGNvbW1lbnQgc3ludGF4IGZvciB0aGUgZmlsZSBmb3JtYXQuIFdlIGFsc28gcmVjb21tZW5kIHRoYXQgYQogICAgICBmaWxlIG9yIGNsYXNzIG5hbWUgYW5kIGRlc2NyaXB0aW9uIG9mIHB1cnBvc2UgYmUgaW5jbHVkZWQgb24gdGhlCiAgICAgIHNhbWUgInByaW50ZWQgcGFnZSIgYXMgdGhlIGNvcHlyaWdodCBub3RpY2UgZm9yIGVhc2llcgogICAgICBpZGVudGlmaWNhdGlvbiB3aXRoaW4gdGhpcmQtcGFydHkgYXJjaGl2ZXMuCgogICBDb3B5cmlnaHQgW3l5eXldIFtuYW1lIG9mIGNvcHlyaWdodCBvd25lcl0KCiAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwogICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCiAgIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAoKICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMAoKICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZQogICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiAiQVMgSVMiIEJBU0lTLAogICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4KICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZAogICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4K');
  exports['registerResource']('META-INF/NOTICE', 'ClNvdW5kIEFQSSB2aWEgSFRNTApDb3B5cmlnaHQgMjAxNyBOZXRCZWFucwoKVGhpcyBwcm9kdWN0IGluY2x1ZGVzIHNvZnR3YXJlIGRldmVsb3BlZCBhdApUaGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKGh0dHA6Ly93d3cuYXBhY2hlLm9yZy8pLgoKCg==');
});