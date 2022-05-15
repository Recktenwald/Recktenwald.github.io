import { useFeliz_React__React_useState_Static_1505 } from "./fable_modules/Feliz.1.57.0/React.fs.js";
import { createElement } from "react";
import { ofArray } from "./fable_modules/fable-library.3.6.2/List.js";
import { Interop_reactApi } from "./fable_modules/Feliz.1.57.0/Interop.fs.js";
import { render } from "react-dom";

export function Counter() {
    const patternInput = useFeliz_React__React_useState_Static_1505(0);
    const setCount = patternInput[1];
    const count = patternInput[0] | 0;
    const children = ofArray([createElement("button", {
        style: {
            marginRight: 5,
        },
        onClick: (_arg1) => {
            setCount(count + 1);
        },
        children: "Increment",
    }), createElement("button", {
        style: {
            marginLeft: 5,
        },
        onClick: (_arg2) => {
            setCount(count - 1);
        },
        children: "Decrement",
    }), createElement("h1", {
        children: [count],
    })]);
    return createElement("div", {
        children: Interop_reactApi.Children.toArray(Array.from(children)),
    });
}

render(createElement(Counter, null), document.getElementById("root"));

//# sourceMappingURL=Main.fs.js.map
