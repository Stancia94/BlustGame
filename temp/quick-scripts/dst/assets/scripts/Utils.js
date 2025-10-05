
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb489g224JCyIrtQfg7dIzl', 'Utils');
// scripts/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomExtraBlockKey = exports.getRandomBlockKey = void 0;
var Types_1 = require("./Types");
function getRandomBlockKey(exclude) {
    if (exclude === void 0) { exclude = []; }
    var keys = Object.keys(Types_1.blockColor);
    var filteredKeys = keys.filter(function (key) { return !exclude.includes(key); });
    if (filteredKeys.length === 0) {
        throw new Error("Нет доступных BlockKey после исключений");
    }
    var randomIndex = Math.floor(Math.random() * filteredKeys.length);
    return filteredKeys[randomIndex];
}
exports.getRandomBlockKey = getRandomBlockKey;
function getRandomExtraBlockKey(exclude) {
    if (exclude === void 0) { exclude = []; }
    var keys = Object.keys(Types_1.extraBlock);
    var filteredKeys = keys.filter(function (key) { return !exclude.includes(key); });
    if (filteredKeys.length === 0) {
        throw new Error("Нет доступных ExtraBlockKey после исключений");
    }
    var randomIndex = Math.floor(Math.random() * filteredKeys.length);
    return filteredKeys[randomIndex];
}
exports.getRandomExtraBlockKey = getRandomExtraBlockKey;

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTBFO0FBRTFFLFNBQWdCLGlCQUFpQixDQUFDLE9BQXdCO0lBQXhCLHdCQUFBLEVBQUEsWUFBd0I7SUFDdEQsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFlLENBQUM7SUFDbkQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO0lBRWhFLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0tBQzlEO0lBRUQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFWRCw4Q0FVQztBQUNELFNBQWdCLHNCQUFzQixDQUFDLE9BQTZCO0lBQTdCLHdCQUFBLEVBQUEsWUFBNkI7SUFDaEUsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFvQixDQUFDO0lBQ3hELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztJQUVoRSxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztLQUNuRTtJQUVELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRSxPQUFPLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBVkQsd0RBVUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9ja0tleSwgRXh0cmFCbG9ja0tleSwgZXh0cmFCbG9jaywgYmxvY2tDb2xvciB9IGZyb20gXCIuL1R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21CbG9ja0tleShleGNsdWRlOiBCbG9ja0tleVtdID0gW10pOiBCbG9ja0tleSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGJsb2NrQ29sb3IpIGFzIEJsb2NrS2V5W107XG4gICAgY29uc3QgZmlsdGVyZWRLZXlzID0ga2V5cy5maWx0ZXIoa2V5ID0+ICFleGNsdWRlLmluY2x1ZGVzKGtleSkpO1xuXG4gICAgaWYgKGZpbHRlcmVkS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSBCbG9ja0tleSDQv9C+0YHQu9C1INC40YHQutC70Y7Rh9C10L3QuNC5XCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlsdGVyZWRLZXlzLmxlbmd0aCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkS2V5c1tyYW5kb21JbmRleF07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tRXh0cmFCbG9ja0tleShleGNsdWRlOiBFeHRyYUJsb2NrS2V5W10gPSBbXSk6IEV4dHJhQmxvY2tLZXkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhleHRyYUJsb2NrKSBhcyBFeHRyYUJsb2NrS2V5W107XG4gICAgY29uc3QgZmlsdGVyZWRLZXlzID0ga2V5cy5maWx0ZXIoa2V5ID0+ICFleGNsdWRlLmluY2x1ZGVzKGtleSkpO1xuXG4gICAgaWYgKGZpbHRlcmVkS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J3QtdGCINC00L7RgdGC0YPQv9C90YvRhSBFeHRyYUJsb2NrS2V5INC/0L7RgdC70LUg0LjRgdC60LvRjtGH0LXQvdC40LlcIik7XG4gICAgfVxuXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWx0ZXJlZEtleXMubGVuZ3RoKTtcbiAgICByZXR1cm4gZmlsdGVyZWRLZXlzW3JhbmRvbUluZGV4XTtcbn0iXX0=