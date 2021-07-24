"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var SetModule = /** @class */ (function () {
    function SetModule(input) {
        this.inp = input;
    }
    SetModule.prototype.Debug = function () {
        console.log(this.inp + "..");
        $('body').html(this.inp);
    };
    return SetModule;
}());
var t = new SetModule("DATA");
t.Debug();
//# sourceMappingURL=script.js.map