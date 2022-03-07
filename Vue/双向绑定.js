/**
 * MVVM(Model-View-ViewModel), 源自于经典的 Model–View–Controller（MVC）模式。
 * MVVM 的出现促进了 GUI 前端开发与后端业务逻辑的分离，极大地提高了前端开发效率。
 * MVVM 的核心是 ViewModel 层，它就像是一个中转站（value converter），
 * 负责转换 Model 中的数据对象来让数据变得更容易管理和使用，该层向上与视图层进行双向数据绑定，
 * 向下与 Model 层通过接口请求进行数据交互，起呈上启下作用。
 * View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，
 * 这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的最重要一环。
 */
/**
 * vue 通过使用双向数据绑定，来实现了 View 和 Model 的同步更新。
 * vue 的双向数据绑定主要是通过使用数据劫持和发布订阅者模式来实现的。
 * 首先我们通过 Object.defineProperty() 方法来对 Model 数据各个属性添加访问器属性，以此来实现数据的劫持，
 * 因此当 Model 中的数据发生变化的时候，我们可以通过配置的 setter 和 getter 方法来实现对 View 层数据更新的通知。
 * 数据在 html 模板中一共有两种绑定情况，一种是使用 v-model 来对 value 值进行绑定，
 * 一种是作为文本绑定，在对模板引擎进行解析的过程中。
 * 如果遇到元素节点，并且属性值包含 v-model 的话，我们就从 Model 中去获取 v-model 所对应的属性的值，
 * 并赋值给元素的 value 值。然后给这个元素设置一个监听事件，
 * 当 View 中元素的数据发生变化的时候触发该事件，通知 Model 中的对应的属性的值进行更新。
 * 如果遇到了绑定的文本节点，我们使用 Model 中对应的属性的值来替换这个文本。
 * 对于文本节点的更新，我们使用了发布订阅者模式，属性作为一个主题，
 * 我们为这个节点设置一个订阅者对象，将这个订阅者对象加入这个属性主题的订阅者列表中。
 * 当 Model 层数据发生改变的时候，Model 作为发布者向主题发出通知，
 * 主题收到通知再向它的所有订阅者推送，订阅者收到通知后更改自己的数据。
 * vue3 基于Proxy，丢掉麻烦的备份数据，省去for in 循环，可以监听数组变化，代码更简化。
 */
