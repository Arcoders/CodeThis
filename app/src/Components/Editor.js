import Monaco from "@monaco-editor/react";
import { useState } from "react";
import BoxTitle from './BoxTitle'

function Editor() {
    const [code, setCode] = useState('');

    const handleOnChange = ([value]) => {
        setCode(value)
    }
    
    return  <div className="editor">
        <BoxTitle title="Editor"/>
        <Monaco
            width="100%"
            height="400px"
            language="javascript"
            value={code}
            onChange={handleOnChange}
        />
    </div>
}


export default Editor;