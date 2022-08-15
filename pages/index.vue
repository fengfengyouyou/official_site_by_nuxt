<template>
  <div class="container">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  // context服务器上下文
  // 页面层中间件
  // middleware:'auth',  //外部定义,会自动加载middleware文件夹的对应文件
  middleware (context) {
    console.log('page middleware')
  },
  validate ({ params, query }) {
    console.log('校验')
    return true
    // 组件初始化前校验参数,返回true进入页面,false停止渲染当前页面并显示错误页面
  },
  fetch (context) {
    console.log('fetch')
  },
  asyncData (context) {
    console.log('asyncData')
    return {
      name: '卢文锋'
    }
  },
  // beforeCreate/created服务端和客户端都会执行
  beforeCreate () {
    console.log('创建前')
  },
  created () {
    console.log('组建创建')
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
