# Zi18nZ [![npm](https://img.shields.io/badge/npm-Install-zys8119.svg?colorB=cb3837&style=flat-square)](https://www.npmjs.com/package/zi18nz)  [![github](https://img.shields.io/badge/github-<Code>-zys8119.svg?colorB=000000&style=flat-square)](https://github.com/zys8119/Zi18nZ)

>Vue 翻译插件

## 安装

```angular2html
npm i zi18nz
```
## 配置

```angular2html
//国际化
import Zi18nZ from "zi18nz"
Vue.use(Zi18nZ)
```

## 教程

>例子
```vue
<template>
    <div>{{$t("test")}}</div>
</template>

<script>
    export default {
        name: "Dome",
        data(){
            return {
                //局部语言模板
                $t_t:{
                    en:{
                        test:"test"
                    },
                    cn:{
                        test:"测试"
                    },
                    //....
                }
            }
        },
        mounted(){
            //设置语言
            this.action({
                moduleName:'$t',
                goods:'en'
            });
            //设置全局语言模板
            //创建 @/langs/index.js 文件，配置文件
            /*示例：index.js
            export default {
                        en:{
                            //...
                        },
                        cn:{
                            //...
                        }
                        //....
                    }
            */
        }
    }
</script>

<style scoped>

</style>
```

###### 具体方法及配置请查看[源代码](https://github.com/zys8119/Zi18nZ/blob/master/index.js)
