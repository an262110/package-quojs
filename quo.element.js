/* QuoJS v3.0.0 - 2013/12/30
   http://quojs.tapquo.com
   Copyright (c) 2013 Javi Jimenez Villar (@soyjavi) - Licensed MIT */
(function(){"use strict";!function($$){return $$.fn.attr=function(name,value){return this.length>0&&"string"===$$.toType(name)?value?this.each(function(){return this.setAttribute(name,value)}):this[0].getAttribute(name):void 0},$$.fn.removeAttr=function(name){return this.length>0&&"string"===$$.toType(name)?this.each(function(){return this.removeAttribute(name)}):void 0},$$.fn.data=function(name,value){return this.attr("data-"+name,value)},$$.fn.removeData=function(name){return this.removeAttr("data-"+name)},$$.fn.val=function(value){return value?this.each(function(){return this.value=value.toString()}):this.length>0?this[0].value:null},$$.fn.show=function(){return this.style("display","block")},$$.fn.hide=function(){return this.style("display","none")},$$.fn.offset=function(){var bounding,offset;return this.length>0&&(bounding=this[0].getBoundingClientRect(),offset={left:bounding.left+window.pageXOffset,top:bounding.top+window.pageYOffset,width:bounding.width,height:bounding.height}),offset}}(Quo)}).call(this);