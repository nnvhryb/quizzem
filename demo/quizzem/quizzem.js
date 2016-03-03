"use strict";function qzm(a,b){function c(c,d,e,f){function g(){c.showError=!1;var b=c.code+"\n"+c.testCode,d=quizzemWebWorker.toString();d=d.substring(d.indexOf("{")+1,d.lastIndexOf("}"));var e=new Blob([d],{type:"application/javascript"}),f=new Worker(URL.createObjectURL(e));f.postMessage(b);var g=a.defer();f.onmessage=function(a){g.resolve(a.data),f.terminate()},g.promise.then(function(a){(c.errorInUserCode=a.error[0])?(c.showError=!0,c.qzmOnCheck({passed:!1})):(c.currentStep==c.maxStep&&c.maxStep++,c.currentStep<c.inputTests.length-1?(i(k,++c.currentStep),c.qzmOnCheck({passed:!1})):c.qzmOnCheck({passed:!0}))})}function h(a){}function i(a,b){c.code=c.inputTests[b].startingCode||c.code,a.setValue(c.code),c.testCode=c.inputTests[b].testCode,c.language=c.inputTests[b].language,c.instructions=c.inputTests[b].instructions,c.currentStep=b}function j(){if(k){var a=k.getWrapperElement();a.parentNode.removeChild(a),k=null}var b=c.inputOptions.codemirrorOptions;b.mode=c.inputTests[0].language.toLowerCase(),k=new CodeMirror(document.getElementById("qzm-codemirror"),b),k.on("change",function(a){c.code=a.getValue()})}if(angular.isUndefined(CodeMirror))throw new Error("Quizzem needs CodeMirror to work.");c.checkWork=g,c.codemirrorLoaded=h,c.goToStep=i,c.currentStep=0,c.maxStep=0,c.showError=!1;var k;c.$watch(function(){return c.inputTests},function(a){a&&b(function(){j(),i(k,0)})})}return{templateUrl:templatePath,restrict:"EA",scope:{inputOptions:"=qzmOptions",inputTests:"=qzmTests",inputRefreshState:"=qzmRefreshState",qzmOnCheck:"&"},link:c}}function quizzemWebWorker(){!function(){function a(a){var b=this;b.did={console:{log:[]},angular:{module:[],moduleArray:[],controller:[],controllerFunc:[],service:[],serviceFunc:[],filter:[],filterFunc:[]}},b.console={log:function(a){b.did.console.log.push(a)}};var c=function(b,c,d){b&&c?"string"!=typeof b?a.error.push("The first parameter for "+d+" must be a string."):"function"!=typeof c&&a.error.push("The second parameter for "+d+" must be a function."):a.error.push(d+" method needs two parameters when initiating an app.")};b.angular={module:function(c,d){return c&&d?"string"!=typeof c?a.error.push("The first parameter for angular.module() must be a string."):"object"!=typeof d&&a.error.push("The second parameter for angular.module() must be an array."):a.error.push("angular.module() method needs two parameters when initiating an app."),a.error[0]||(b.did.angular.module.push(c),b.did.angular.moduleArray.push(d)),b.angular.module=b.angular.moduleGetter,b.angular},moduleGetter:function(c){return"string"!=typeof c&&a.error.push("The parameter for angular.module() must be a string."),a.error[0]||b.did.angular.module.push(c),b.angular},controller:function(d,e){return c(d,e,".controller()"),a.error[0]||(b.did.angular.controller.push(d),b.did.angular.controllerFunc.push(e)),b.angular},service:function(d,e){return c(d,e,".service()"),a.error[0]||(b.did.angular.service.push(d),b.did.angular.serviceFunc.push(e)),b.angular},filter:function(d,e){return c(d,e,".filter()"),a.error||(b.did.angular.filter.push(d),b.did.angular.filterFunc.push(e)),b.angular}},b.process={argv:["node","app.js","1","2","hello","4"]}}var b=postMessage,c=addEventListener;!function(a){var b=a,c=["Object","Function","Infinity","NaN","undefined","Array","Boolean","Number","String","Symbol","Map","Math","Set","isNaN","caches","TEMPORARY","PERSISTENT"];do Object.getOwnPropertyNames(b).forEach(function(a){-1===c.indexOf(a)&&delete b[a]}),b=Object.getPrototypeOf(b);while(b!==Object.prototype)}(this),c("message",function(c){var d={error:[]};a(d);var e=new Function(c.data);try{var f=e();0==f[0]?d.error.push(f[1]):d.success=f[1]}catch(g){d.error.push(g.toString())}b(d)})}()}var scripts=document.getElementsByTagName("script"),currentScriptPath=scripts[scripts.length-1].src;if("min.js"==currentScriptPath.slice(-6))var templatePath=currentScriptPath.replace("quizzem.min.js","quizzem.html");else var templatePath=currentScriptPath.replace("quizzem.js","quizzem.html");angular.module("quizzem",[]).directive("qzm",["$q","$timeout",qzm]);