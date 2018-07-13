let langs = {};
try {
    langs = require('./lang.json');
}catch (e){}

const plugin = {
    install (Vue) {
        Vue.mixin({
            computed:{
                $t(){
                    return (keyName) => {
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
                }
            }
        });
    }
}

export default plugin
export const install = plugin.install
