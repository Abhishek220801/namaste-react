// const heading = React.createElement("h1",{
//     "id":"heading"
// },"Hello World from React!");
// root.render(heading);

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm an h1 heading"),
        React.createElement("h2",{},"I'm a h2 heading")
    ])]);

    console.log(parent)
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)