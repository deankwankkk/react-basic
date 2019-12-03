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
- useState
    - ```const [count, setCount] = useState(0) 声明此变量之后，可以直接使用，改变参数直接调用setCount()```
    - ```setCount(), 可以传入两种参数类型，一种为需要改变的变量，一种为函数，大部分情况下，使用setCount(count => count + 1)```
- useEffect
    - ```useEffect(fnc, []) 第一个为处理逻辑的函数，第二个参数为传入的状态值，如果传入的状态值发生变化，则会再次调用useEffect方法```
- useReducer
- useCallback
    - ```useMemo的返回值为函数时，可以使用useCallback进行使用```
- useMemo
    - ```useMemo只能使用在函数式写法，class写法使用继承PureComponent，使用memo可以进行浅比较，如果不发生变化，不会进行更新操作```
- use+名字 自定义
    - ```useUndefined(){....}```
### 组件跨层级通信 Context
- React.CreateContext
- Context.Provider
- Class.contextType
- Context.Consumer
#### 基本用法
- 见/src/components/ContextTest.jsx
### 组件实现
