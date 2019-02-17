var glucose = "red";
var largeFont = "50px";

// document.getElementById('div1').style.backgroundColor = Red;

// const reactTest = (<div> React Test </div>);
// ReacDOM.render(reactTest,document.getElementById('div4'));

function testDetails(){
  $("#div1").css("backgroundColor","blue");
  $("#div2").css("backgroundColor",glucose);
  $("#div3").css("backgroundColor", "green");

  const div5 = React.createElement("div",{},"Div5 is here");
  ReactDOM.render(div5,document.getElementById("div4"));

  create6();
}

const div6 = React.createElement("div",{},"This is Div 6");
function create6() {
  ReactDOM.render(div6,document.getElementById("color-button"));
};

// class App extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div id="reactDiv">
//       ReactDIV
//       </div>
//     )
//   }
// }
// const divTest = document.getElementById("test-div");
// ReactDOM.render(<App />, divTest);
