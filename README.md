## react基础
### pureComponent
- 进行浅比较
- 缺点：如果是引用类型，则会多次渲染，因为pureComponent是进行地址的比较
- class写法
- 传值为对象类型，最好进行{...obj}展开传递
### 版本>16.6 函数式 React.memo()
- memo是一个高阶组件
- ```写法: const Com = React.memo(function(){});```
### 高阶组件(HOC)
### 高阶组件 ES7 装饰器写法
- ```npm install --save-dev babel-plugin-transform-decorators-legacy```
- 装饰器只能用于class类写法
### 组件复合(Composition) === vue中的插槽 slot
- 组件复合案例见 components/Composition.js
- 使用props.children进行接收
- 具名接收，使用props进行传值
- 针对于传入的children的操作，可以使用map对数组进行操作
## react hooks (版本>=16.8)