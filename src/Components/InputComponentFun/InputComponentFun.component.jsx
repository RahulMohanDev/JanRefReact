import React from "react"

// frowarding ref
const InputComponentFun = React.forwardRef((props,potato)=>{
    return <input ref={potato} defaultValue="Functional input"/>
});


export default InputComponentFun;
