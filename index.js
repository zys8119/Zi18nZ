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
        var $t = function (keyName, langKeyName) {
            try {
                try {
                    langKeyName = this.airforce.$t;
                }
                catch (e) { }
                try {
                    if (this.$data.$t_t && this.$data.$t_t[this.airforce.$t] && this.$data.$t_t[this.airforce.$t][keyName]) {
                        return this.$data.$t_t[langKeyName][keyName];
                    }
                }
                catch (e) { }
                try {
                    if (this.airforce && this.airforce.$t_langs) {
                        langs = this.airforce.$t_langs;
                    }
                }
                catch (e) { }
                if (typeof langs[langKeyName][keyName] != "undefined") {
                    return langs[langKeyName][keyName];
                }
                else {
                    return keyName;
                }
            }
            catch (e) {
                return keyName;
            }
        };
        Vue.prototype.$zi18nz = $t;
        Vue.mixin({
            computed: {
                $t: function () {
                    return $t;
                }
            }
        });
    }
};
exports["default"] = plugin;
exports.install = plugin.install;
