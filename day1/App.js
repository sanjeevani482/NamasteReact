{/* <div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div> */}


const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")]),
        
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")])

);


const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abdaavbvdg" },
    "Hello World from React");

//when you console heading it will give you the object
console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));


//render function will convert the heading into an h1 tag and put it into
// the html
root.render(parent);