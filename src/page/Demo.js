const MyInput=({value='',onChange})=>{
    return <input value={value} onChange={onChange}/>;
}

class Demo extends React.Component{
    state={
        text:'',
    }
    onTextChange=(event)=>{
        console.log(event.target.value);
        this.setState({text:event.target.value});
    }

    onTextReset=()=>{
        this.setState({text:''});
    }

    render(){
        return (
            <div>
                <span>please input:</span>
                <MyInput value={this.state.text} onChange={this.onTextChange}/>
                <button onClick={this.onTextReset}>reset</button>
            </div>
        )
    }
}

export default Demo;
