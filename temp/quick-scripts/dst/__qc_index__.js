
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/AudioManager');
require('./assets/scripts/Block');
require('./assets/scripts/BlockFactory');
require('./assets/scripts/Board');
require('./assets/scripts/EventBus');
require('./assets/scripts/ExrtaBlock');
require('./assets/scripts/ExtraBlockHandler');
require('./assets/scripts/GameManager');
require('./assets/scripts/GridConfig');
require('./assets/scripts/MatchFinder');
require('./assets/scripts/ResultScreen');
require('./assets/scripts/ScoreManager');
require('./assets/scripts/StartGameScript');
require('./assets/scripts/Types');
require('./assets/scripts/Utils');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();