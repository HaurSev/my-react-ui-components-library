import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Select, Option } from "../Select/Select";
var Selects = function () {
    var _a = useState(''), selectedValue = _a[0], setSelectedValue = _a[1];
    return (_jsx(_Fragment, { children: _jsxs(Select, { label: "Choose an option", value: selectedValue, onChange: setSelectedValue, children: [_jsx(Option, { value: "", children: "Select an option" }), _jsx(Option, { value: "option1", children: "Option 1" }), _jsx(Option, { value: "option2", children: "Option 2" }), _jsx(Option, { value: "option3", children: "Option 3" })] }) }));
};
export default Selects;
//# sourceMappingURL=Selects.js.map