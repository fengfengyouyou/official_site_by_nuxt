export const state = () => {
  return {
    aaa: 111
  }
}

export const actions = {
  nuxtServerInit(store, context) {
    console.log('nuxtServerInit:vuex初始化函数')
  }
}
