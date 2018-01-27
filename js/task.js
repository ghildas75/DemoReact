
/*const number=[1,2,4,5];

const doubles=number.map(number=>number*2);
/!*const doubles=number.map(function (number) {
    return number*2;
})*!/

/!*let doubles=[];

for( let i=0;i<number.length;i++){
    doubles.push(number[i]*2);
}*!/
console.log(doubles);*/
const number=[1,2,3,4,5,6,7,8,9,10];
const pair=number.filter(num=> num%2==0);
console.log(pair);
class TaskApp extends React.Component{
     constructor(prop){
        super(prop);
        this.handelerChange=this.handelerChange.bind(this);
        this.addTask=this.addTask.bind(this);
   this.state={
       newTask:'',
       tasks:[
           {
               id:1,
               description:" go to bed",
               complete:true
           },

           {
               id:2,
               description:" recod tutorial",
               complete:false
           },
           {
               id:3,
               description:" watch movie",
               complete:false
           }


       ]

   }
    }
    alltasks(){
         return this.state.tasks;
}
    completeTask(){
        return this.state.tasks.filter(task=>task.complete);
    }
    incompleteTask(){
        return this.state.tasks.filter(task=>!task.complete);
    }
    renderRoute(){
         switch (window.location.pathname){
             case'/mydemoreact/hello.html': return <TaskList tasks={this.alltasks()} title="all task"/>;
             default: return <notFound/>;

         }

    }
    handelerChange(e){
     //console.log(e.target.value);
        this.setState({newTask:e.target.value});
    }
    addTask(e){
         e.preventDefault();
         console.log("adding task")
    }
    render(){
        return (
        <div>
            <ul>
                <li> <a href="/mydemoreact/hello.html"> getAlltask</a> </li>
            </ul>
            <form onSubmit={this.addTask}>
            <input type="text" value={this.state.newtask} onChange={this.handelerChange} placeholder="enter discription"/>
                <input type="submit" value="addTask"/>

            </form>

           {/* <TaskList tasks={this.alltasks()} title="all task"/>
            <TaskList tasks={this.completeTask()} title="complete task"/>
            <TaskList tasks={this.incompleteTask()} title="incomplete task"/>*/}
            {this.renderRoute()}
        </div>
        )
    }
}
const TaskList=(props)=>(
    <div>
        <h1> {props.title}</h1>
        {props.tasks.map(task=><MyTask key={task.id} details={task}/>)}
        {/*<h1> incomplete task</h1>
                {this.inompleteTask().map(task=><MyTask key={task.id} details={task}/>)}*/}
    </div>
);
const notFound=()=> <h1> page non trouve</h1>;


/*class TaskList extends React.Component{
  /!* completeTask(){
       return this.state.tasks.filter(task=>task.complete);
   }
   inompleteTask(){

           return this.state.tasks.filter(task=>!task.complete);

   }*!/
   /!* constructor(prop){
        super(prop);
   this.state={
       tasks:[
           {
               id:1,
               description:" go to bed",
               complete:true
           },

           {
               id:2,
               description:" recod tutorial",
               complete:false
           },
           {
               id:3,
               description:" watch movie",
               complete:false
           }


       ]

   }
    }
*!/

    render(){
      /!*  const taskComplete=this.state.tasks.filter(task=>task.complete);
      const tasknoComplete=this.state.tasks.filter(task=>!task.complete);*!/
       /!* const tasks=[
            {
                id:1,
                description:" go to bed",
                complete:true
            },

            {
                id:2,
                description:" recod tutorial",
                complete:false
            },
            {
                id:3,
                description:" watch movie",
                complete:false
            }


        ]*!/
        return(
            <div>
             <h1> {this.props.title}</h1>
                {this.props.tasks.map(task=><MyTask key={task.id} details={task}/>)}
                {/!*<h1> incomplete task</h1>
                {this.inompleteTask().map(task=><MyTask key={task.id} details={task}/>)}*!/}
            </div>

           )
    }
                }*/
 const MyTask=(props)=>(

         <article>
             <h1>
                 #{props.details.id}- {props.details.description}
                 {props.details.complete?' ok':' not yet'}
             </h1>
         </article>

);
/*class MyTask extends React.Component{
    render(){
        return (
            <article key={this.props.details.id}>
                <h1>
                    #{this.props.details.id}- {this.props.details.description}
                    {this.props.details.complete?' ok':' not yet'}
                </h1>
            </article>
        )
    }
}*/
ReactDOM.render(<TaskApp/>, document.getElementById('root'));