"use strict";
exports.__esModule = true;
var langs = {};
try {
    langs = require("@/langs/index.js")["default"];
}
catch (e) {
    console.error("\u3010zi18nz\u3011\u8B66\u544A\u8B66\u544A\uFF1A\u8BF7\u786E\u8BA4 @ \u8DEF\u5F84\u4E0B\u7684 'langs/index.js' \u662F\u5426\u5B58\u5728\u3002\u5982\u679C\u5B58\u5728\u4E14\u8BE5\u8B66\u544A\u8FD8\u5728\uFF0C\u8BF7\u624B\u52A8\u91CD\u65B0\u5F15\u7528\u52A0\u8F7Dstore-vue\u6216\u8005\u91CD\u542F\u9879\u76EE");
    console.warn("'langs/index.js' \u662F\u7528\u4E8E\u8BBE\u7F6Evue\u5168\u5C40\u7FFB\u8BD1\u8BED\u8A00\u5305\n\n    \u793A\u4F8B:utils/index.js\n    \n        export default {\n            en:{\n                //...\n            },\n            cn:{\n                //...\n            }\n            //....\n        }\n    ");
}
var plugin = {
    install: function (Vue) {
        Vue.mixin({
            computed: {
                $t: function () {
                    var _this = this;
                    return function (keyName) {
                        try {
                            try {
                                if (_this.$data.$t_t && _this.$data.$t_t[_this.airforce.$t] && _this.$data.$t_t[_this.airforce.$t][keyName]) {
                                    return _this.$data.$t_t[_this.airforce.$t][keyName];
                                }
                            }
                            catch (e) { }
                            try {
                                if (_this.airforce && _this.airforce.$t_langs) {
                                    langs = _this.airforce.$t_langs;
                                }
                            }
                            catch (e) { }
                            if (typeof langs[_this.airforce.$t][keyName] != "undefined") {
                                return langs[_this.airforce.$t][keyName];
                            }
                            else {
                                return keyName;
                            }
                        }
                        catch (e) {
                            return keyName;
                        }
                    };
                }
            }
        });
    }
};
exports["default"] = plugin;
exports.install = plugin.install;
