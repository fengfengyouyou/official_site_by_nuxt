<template>
  <div class="container">
    <div>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">
          展开
        </el-radio-button>
        <el-radio-button :label="true">
          收起
        </el-radio-button>
      </el-radio-group>
      <el-menu router class="el-menu-layout" :default-active="$route.path" :collapse="isCollapse">
        <el-menu-item index="/">
          <i class="el-icon-location" />
          <span>展开</span>
        </el-menu-item>
        <el-menu-item index="/chat">
          <i class="el-icon-location" />
          <span>聊天项目</span>
        </el-menu-item>
        <el-menu-item index="/chat">
          <i class="el-icon-location" />
          <span>聊天项目啦啦啦啦啦</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({})
export default class Default extends Vue {
  isCollapse: boolean = false;
  list: any[] = [
    {
      name: 'websocket聊天项目',
      key: 'chat'
    },
    {
      name: '跨平台移动端项目',
      key: 'uniapp'
    }
  ];
}
</script>
<style>
.el-menu-layout:not(.el-menu--collapse) {
  width: 200px;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.container {
  display: flex;
  /* align-items: stretch; */
}
.content {
  flex: 1;
}
</style>
