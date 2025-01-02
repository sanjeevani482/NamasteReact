import React from "react";
import ReactDOM from "react-dom/client";

//Babel will convert JSX to ReactElement

// Jsx Elements

const jsxheading = <h1 id="heading">This is JSX</h1>


//React Element

const heading = React.createElement(
    "h1",
    {id:"headingReact"},
    "This is JSX"
)

/** 
 * React Components -->2 ways
 * 
 * @Class based components --  old way of writting code -->JS Classes
 * @functional components -- new way of writting code -->JS functions
 * 
 * */ 

// ! React functional component --> function returning a jsx 

/**
 * * This code is same as the below code.
 * @const headingComponent = () => <h1>React functional component</h1>
}
 */

// !Component composition : one component inside another

const Title = () => (
    <h1>Title component</h1>
)

const elem = <span>span element</span>



const HeadingComponent = () => {
    return <div>
    <Title />
    {333+444}
    <h1>React functional component</h1>
    </div>
}

const title = (
    <h2>
    react element {elem}
    <HeadingComponent />
    </h2>
);



const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(title)



{/* <div id="parent">
    <div id="child">
        <h1></h1> 
    </div> 
</div> */}

/** 
 
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

*/