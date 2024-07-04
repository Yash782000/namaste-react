{/* <div id="parent">
    <div id="child">
        <h1>Hello, Yash this side</h1>
        <h2>How are you
    </div>
</div> */}

const heading = React.createElement("div",{id:"parent",xyz:"abc"},
                React.createElement("div",{id:"child"},
                [React.createElement("h1",{},"Yash this side"),React.createElement("h2",{},"Kushal this side")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);