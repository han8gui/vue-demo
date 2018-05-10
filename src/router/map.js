const Dist = {
  template: '<router-view></router-view>'
}

export default {
  routes: [
    {
      path: '/',
      component: Dist,
      children: [
        {
          path: 'demo/hello',
          name: 'DemoHello', // 登陆页面
          component (resolve) {
            require(['@/pages/demo/Hello.vue'], resolve)
          }
        },
        {
          path: 'demo/todo',
          name: 'Todo', // 登陆页面
          component (resolve) {
            require(['@/pages/demo/Todo.vue'], resolve)
          }
        },
        {
          // 放在最底部，用于匹配不存在的路径
          path: '*',
          name: '', // 首页
          component (resolve) {
            require(['@/pages/demo/Hello.vue'], resolve)
          }
        }
      ]
    }
  ]
}

