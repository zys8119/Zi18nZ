declare const require:any;
let langs = {};
try {
    langs = require("@/langs/index.js").default;
}catch (e){
    console.error(`【zi18nz】警告警告：请确认 @ 路径下的 'langs/index.js' 是否存在。如果存在且该警告还在，请手动重新引用加载store-vue或者重启项目`)
    console.warn(`'langs/index.js' 是用于设置vue全局翻译语言包\n
    示例:utils/index.js
    
        export default {
            en:{
                //...
            },
            cn:{
                //...
            }
            //....
        }
    `)
}

const plugin = {
    install (Vue) {
        let $t = (keyName) => {
            try {
                try {
                    if(this.$data.$t_t && this.$data.$t_t[this.airforce.$t] && this.$data.$t_t[this.airforce.$t][keyName]){
                        return this.$data.$t_t[this.airforce.$t][keyName];
                    }
                }catch (e){}
                try {
                    if(this.airforce && this.airforce.$t_langs){
                        langs = this.airforce.$t_langs;
                    }
                }catch (e){}
                if(typeof langs[this.airforce.$t][keyName] != "undefined"){
                    return langs[this.airforce.$t][keyName]
                }else {
                    return keyName;
                }
            }catch (e){
                return keyName;
            }
        };
        Vue.prototype.$t = $t;
        Vue.mixin({
            computed:{
                $t(){
                    return $t;
                }
            }
        });
    }
}

export default plugin
export const install = plugin.install;