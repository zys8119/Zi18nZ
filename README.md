# Zi18nZ [![npm](https://img.shields.io/badge/npm-Install-zys8119.svg?colorB=cb3837&style=flat-square)](https://www.npmjs.com/package/Zi18nZ)  [![github](https://img.shields.io/badge/github-<Code>-zys8119.svg?colorB=000000&style=flat-square)](https://github.com/zys8119/Zi18nZ)

>Vue 翻译插件

## 安装

```angular2html
npm i Zi18nZ
```
## 配置

```angular2html
//国际化
import Zi18nZ from "Zi18nZ"
Vue.use(Zi18nZ)
```

## 配置

>arguments

<table class="table table-bordered table-striped">
    <thead>
        <tr>
          <th>argName</th>
          <th>type</th>
          <th>describe</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>config</td>
            <td>[string|object]</td>
            <td>
                <pre>
{
    fileUrl:'components/',
    fileType:'.vue',
    path:'/',
    name:'',
    component:null,
    title:'',
    //....其他参数同原生路由配置
}
                </pre>
            </td>
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>
            <td>路由的名称</td>
        </tr>
        <tr>
            <td>name</td>
            <td>string</td>
            <td>路由的路径或路由名称</td>
        </tr>
    </tbody>
</table>

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
            this.action({
                moduleName:'$t_langs',
                goods:{
                    en:{
                        test:"test1"
                    },
                    cn:{
                        test:"测试1"
                    },
                }
            });
        }
    }
</script>

<style scoped>

</style>
```

###### 具体方法及配置请查看[源代码](https://github.com/zys8119/Zi18nZ/blob/master/index.js)