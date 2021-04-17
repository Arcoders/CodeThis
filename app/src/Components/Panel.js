import Header from "./Header";
import Challenge from "./Challenge";
import Editor from "./Editor";
import Test from "./Test";

function Panel() {
    return <>
        <Header />
        <div className="panel">
            <Challenge />
            <Editor />
            <Test />
        </div>
    </>
}

export default Panel;