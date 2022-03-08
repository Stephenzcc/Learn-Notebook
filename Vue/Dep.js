new Vue({
  el: '#example',
  data(){
      return{
          obj:{
              a:1
          }
      }
  },
})
/**
 * 当我们写下这行代码时,vue将我们在data内定义的obj对象进行依赖追踪
 * 具体做法为执行new Observer(obj)
 */
//经过上面的代码，我们的obj对象会变为以下的样子
{
  obj:{
    a:1,
    __ob__:{ //Observer 实例
      dep:{//Dep 实例
        subs:[ //存放 Watcher 实例
          new Watcher(),
        ]
      }
    }
  }
}