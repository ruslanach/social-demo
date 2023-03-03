import PropTypes from "prop-types";

const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(",")}</p>

    { /* Change code above this line */ }
};
const MyTasks =()=>{
    return (
        <div>
            <h1>To Do Lists</h1>
            <h2>Today</h2>
            { /* Change code below this line */ }
            <List tasks ={["walk dog", "workout"]}/>
            <h2>Tomorrow</h2>
            <List tasks ={["read", "play", "clean"]}/>
            { /* Change code above this line */ }
        </div>
    );
}
const JSX =() =>{
    return (
        <div>
            {/* not work */}
            <h1>This is a block of JSX</h1>
            <p>Here's a subtitle</p>

        </div>)
}
const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};
// Change code below this line
ShoppingCart.defaultProps = { items : 0 }
ShoppingCart.propTypes = {  items: PropTypes.number.isRequired }
const CurrentDate = (props) => {
    return (
        <div>
            { /* Change code below this line */ }
            <p>The current date is:{props.date} </p>
            { /* Change code above this line */ }
        </div>
    );
};

// class MyComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         // Change code below this line
//         return (
//             <div>
//                 <h1>Hello React!</h1>
//             </div>
//         )
//
//
//         // Change code above this line
//     }
// };

// const TypesOfFruit = () => {
//     return (
//         <div>
//             <h2>Fruits:</h2>
//             <ul>
//                 <li>Apples</li>
//                 <li>Blueberries</li>
//                 <li>Strawberries</li>
//                 <li>Bananas</li>
//             </ul>
//         </div>
//     );
// };
//
// const Fruits = () => {
//     return (
//         <div>
//             { /* Change code below this line */ }
//             <TypesOfFruit />
//             { /* Change code above this line */ }
//         </div>
//     );
// };
//
// class TypesOfFood extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Types of Food:</h1>
//                 { /* Change code below this line */ }
//                 <Fruits />
//                 { /* Change code above this line */ }
//             </div>
//         );
//     }
// };
// class TypesOfFood extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Types of Food:</h1>
//                 {/* Change code below this line */}
//                 <Fruits />
//                 <Vegetables  />
//                 {/* Change code above this line */}
//             </div>
//         );
//     }
// };
// ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));