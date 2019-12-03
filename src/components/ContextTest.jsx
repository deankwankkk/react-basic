import React, { useContext } from "react";

// 1.创建上下文
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;

function Demo(prop) {
  return <h2>{prop.foo}</h2>;
}

// 2. 使用hook消費
function Demo1() {
  const ctx = useContext(MyContext);
  return <h3>Demo1:{ctx.foo}</h3>;
}

// 3.使用class類進行指定静态contextType
class Demo2 extends React.Component {
  static contextType = MyContext;
  render() {
    return <h2>Demo2:{this.context.foo}</h2>;
  }
}

export default function() {
  return (
    <div>
      <Provider value={{ foo: "bar" }}>
        {/* 使用consumer進行接收 */}
        <Consumer>{value => <Demo {...value}></Demo>}</Consumer>
        {/* 使用hook方式 */}
        <Demo1></Demo1>
        {/* 使用class类进行消费 */}
        <Demo2></Demo2>
      </Provider>
    </div>
  );
}
