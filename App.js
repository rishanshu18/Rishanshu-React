/**
 * 
 * example:
 * nested html structure
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h1 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h1 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * if you want to give 2 or more element as siblings you have to create array of chilren
 * 
 * ReactElement(Object) => HTML(Browser Unerstands)
 */
//////////Hello world///////////
// const heading = React.createElement(
//     "h1",
//     {id : "heading"},
//     "Hello World from React!"
//     ); 

// //In react createElement takes 3 args 
// //1.tag 
// //2. object --> attribute for tag
// //3. inner html content

// console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root")); // this is how inject heading insite root id , root where code run under this

// root.render(heading); //this is how we render heading inside root


//  //createElement
//  //createRoot
//  //render

//////////nested html example///////////

const parent = React.createElement(
    "div",
    {id:"parent"},[
         React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),
        ]
        ),
        React.createElement(
            "div",
            {id:"child2"},[
            React.createElement("h1",{},"I'm an h1 tag"),
            React.createElement("h2",{},"I'm an h2 tag"),
        ]
        )
    ]);

//JSX

console.log(parent); 

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(parent); 


