import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";
// // 1way
// function App(){
//   return <h1>hello rreact</h1>;
// }

// // 2way
// function App(){
//   return (
//   <div className="box">
//   <p>this is a paragraph</p>
//   <h1>hello react</h1>
//   </div>

//   )
// }


// // 3way
// function App(){
//   return (
//   <>
//   <p>this is a paragraph</p>
//   <h1>hello react</h1>
//   </>

//   )
// };


function App(){
  return (
    <>
      <MsgBox username = "abc" color = "pink" />
      <MsgBox username = "c" color = "blue" />
      <ProductTab></ProductTab>

    </>
    
  )
};

export default App;