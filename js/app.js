
var h1=React.DOM.h1;
var a= React.DOM.a;
class Hello extends React.Component {

    render() {
        var sty= {color: this.props.color};
        /*  return  h1(null,a({href:this.props.link, style:{ color:this.props.color}},this.props.title));*/
        return <h1><a href={ this.props.link} style={sty}>{this.props.title}</a></h1>
    }


}


//var componentFactory=React.createFactory(MyComponent);

class MyComponent1 extends React.Component {
    render() {

        {this.props.children}
        /* return(
             <div>
                 <Hello title:"google" link:"https://www.google.ca" color:"red"/>

                 <Hello title:"equipe" link:"https://www.lequipe.fr" color:"blue"/>
             </div>
         )*/

        return React.DOM.div( null,[
                React.createElement(Hello,{title:'google', link:'https://www.google.ca',color:'red'}),
                React.createElement(Hello,{title:'equipe', link:'https://www.lequipe.fr',color:'blue'}),
                React.createElement(Hello,{title:'yahoo', link:'https://www.yahoo.ca', color:'yellow'})


            ]


        )



    }
}
var samy={
    nom:"samy ghildas",
    age:38,
    dance () {
        return '${this.nom} danser!!!';
     // return this.nom+" dance" ;
    }
};
console.log(samy.nom+" a "+ samy.age+ samy.dance());
ReactDOM.render(<MyComponent1>Bonsoir samir</MyComponent1>,document.getElementById("root"));
