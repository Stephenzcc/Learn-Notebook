class EventEmitter {
  constructor() {
    this._events = {}; // 初始化events事件对象
  }

  /**
   * 触发事件
   * 原理：将该事件增加到该事件类型的队列中
   * 状态：未执行
   * @param event 事件名称
   * @param cb 回调函数
   */
  on(event, cb) {
    const query = this._events[event] || []; // 获取原队列
    query.push(cb); // 队列中追加cb
    this._events[event] = query; // 重新赋值事件队列
    return this;
  }

  /**
   * 取消事件
   * 原理：将所有该事件类型的事件从队列中删除
   * 状态：取消执行
   * @param event 事件名称
   * @param cb 回调函数
   */
  off(event, cb) {
    const query = this._events[event]; // 获取原队列
    this._events[event] = query && query.filter((fn) => fn !== cb); // 取消事件队列中的所有cb函数并重新赋值给队列
    return this;
  }

  /**
   * 触发事件
   * 原理：执行该事件类型的所有事件，按照队列顺序执行
   * 状态：准备执行 | 执行中
   * 使用方式：xx.emit(eventName, args)
   * @param args
   */
  emit(...args) {
    const query = this._events[args[0]], //  获取事件队列
      params = Array.prototype.slice.call(args, 1); // 获取事件触发的参数
    // 执行事件队列中的回调函数数组
    query.forEach((fn) => {
      fn.call(params);
    });
    return this;
  }

  /**
   * 单次触发事件
   * 原理：执行一次该事件
   * @param event
   * @param cb
   */
  once(event, cb) {
    // 封装一个单次执行函数
    const wrapperFun = (...args) => {
      cb.apply(this, args); // 执行回调函数
      this.off(event, wrapperFun); //  移除事件队列中所有的该类型的回调函数
    };
    this.on(event, wrapperFun); // 将单次执行函数添加到事件队列
    return this;
  }
}
