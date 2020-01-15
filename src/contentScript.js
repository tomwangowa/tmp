import engineV3 from '../asset/engineV3';

var root = {};

// modules
var $signupPattern$ = "";
var $l10n$ = "";
let engineModules = engineV3().modules;
// pattern
var $externalcss$ = "";
let enginePattern = engineV3().pattern;
// pattern1
var $operationPattern$ = "{}";
let enginePattern1 = engineV3().pattern1;
// probe
let engineProbe = engineV3().probe;

// Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
//=> In function:
//=> eraseCachedObject: function(cachedObject) {
//=>    cachedObject = null;
//=>    delete cachedObject
//=> }
// So I comment out delete cachedObject in engineV3.

// Also comment out 'this._sandbox.callback'

//// ===> I think we need to modify engine code to meet "strict" mode policy.

eval(engineModules);
eval(enginePattern);
eval(enginePattern1);
eval(engineProbe);


