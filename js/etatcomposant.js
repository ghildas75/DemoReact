class Counter extends React.Component{

    constructor(props){
        super(props);
        this.state={
         counter:5

        }
       // console.log(this.props);
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    increment(){
      // this.setState({counter:this.state.counter+1});
        this.setState((prevState,props)=>(
            {counter:prevState.counter+props.step}
            ));
       /* this.setState(function (prevState,props) {
          return{
              counter:prevState.counter+1
          }
        });*/
       /* this.state.counter=this.state.counter+1;
         this.forceUpdate();*/
    }
    decrement(){
        this.setState((prevState,props)=>(
        {counter:prevState.counter>0?prevState.counter-props.step:0}
        ));
        //counter:prevState>0?prevState-1:0
       /* this.setState(function (prevState,props) {
            return{
                counter:prevState>0?prevState-1:0
            }*/

      //  this.state.counter>0 &&this.setState({counter:this.state.counter-1});
    }
    render(){
        return(
        <div>
         <h1 style={{ color:this.props.coleur}}>vous avez {this.state.counter} copine.</h1>
         <button onClick={this.increment}>vous avez gagne une copine</button>
         <button onClick={this.decrement}>vous avez perdu une copine</button>
        </div>
        )

    }
}
const samir={
    name:"samir ghilas",
    langages:["javascript", "java","php"],
    describe(){
        this.langages.forEach(langage=>{
            console.log(this.name+"code en"+langage);
        })
        /* const that=this;
        this.langages.forEach(function (langage) {
           //console.log(this) ;
           console.log(that.name+"code en"+langage);
        });*/
    }
}
samir.describe();
/*const hello=(name='world')=>{
    console.log("trouver du travail"+name);
}
hello("samir");
hello();*/
 const App=(props)=>{
     const sayhello=()=> alert("hello samir");
    return (
        <div>
            <h1>{props.titre}</h1>
            <button onClick={sayhello}>hello there</button>
            <Counter coleur="red" step={1}/>
            <Counter coleur="yellow" step={2}/>
            <Counter coleur="blue" step={3}/>
        </div>
    );

}

/*function App(){
     return (
         <div>
        <Counter coleur="red"/>
        <Counter coleur="yellow"/>
        <Counter coleur="blue"/>
    </div>
     );

}*/
//fonction stalness
/*class App extends React.Component{
    render(){
        return(
            <div>
                <Counter coleur="red"/>
                <Counter coleur="yellow"/>
                <Counter coleur="blue"/>
            </div>

        )
    }
}*/
ReactDOM.render(<App titre="lost grilfreind"/>,document.getElementById("root"));
/*
ReactDOM.render(<div><Counter coleur="red"/><Counter coleur="yellow"/><Counter coleur="blue"/></div>, document.getElementById("root"));*/
