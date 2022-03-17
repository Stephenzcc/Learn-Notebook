# React生命周期
![](/images/React/React生命周期.png)
当组件在客户端被实例化，第一次被创建时，以下方法依次被调用：
1、getDefaultProps
2、getInitialState
3、componentWillMount
4、render
5、componentDidMount

当组件在服务端被实例化，首次被创建时，以下方法依次被调用：
1、getDefaultProps
2、getInitialState
3、componentWillMount
4、render

componentDidMount 不会在服务端被渲染的过程中调用。
