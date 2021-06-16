"use strict";
exports.__esModule = true;
var NavBar = function (_a) {
    var navBtnStyle = 'bg-white focus:outline-none focus:border-black focus:border-b-2';
    return (React.createElement("div", { className: "container m-10 flex align-middle sticky" },
        React.createElement("div", { className: "flex-initial p-4 md:p-8" },
            React.createElement("div", { className: "w-14 h-14 bg-gray-700" })),
        React.createElement("div", { className: "flex-auto" }),
        React.createElement("div", { className: "flex-initial hidden md:block p-4" },
            React.createElement("div", { className: "flex space-x-20 h-full" },
                React.createElement("button", { className: navBtnStyle }, "Me"),
                React.createElement("button", { className: navBtnStyle }, "Life"),
                React.createElement("button", { className: navBtnStyle }, "GitHub"))),
        React.createElement("div", { className: "flex-initial p-8 flex  md:hidden" }, "Hamburger")));
};
exports["default"] = NavBar;
