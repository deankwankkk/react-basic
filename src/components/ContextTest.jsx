import React from 'react'

const MyContext = React.createContext();
const {Provider, Consumer} = MyContext;

function Demo(prop) {
    return(
        <h2>{prop.foo}</h2>
    )
}

export default function() {
    return(
        <div>
            <Provider value={{foo: 'bar'}}>
                <Consumer>
                    {value => <Demo {...value}></Demo>}
                </Consumer>
            </Provider>
        </div>
    )
}