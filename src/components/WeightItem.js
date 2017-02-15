import React, {Component} from 'react';
import style from '../index.css';
// import Button from 'react-bootstrap/lib/Button';
// import Panel from 'react-bootstrap/lib/Panel'
// import EditItem from './EditItem';

class WeightItem extends Component{
	constructor(props){
		super(props);
		this.state={isEdit:false}
		this.handleDoubleClick=this.handleDoubleClick.bind(this);
		this.handleSave=this.handleSave.bind(this);
	}
	handleDoubleClick(){
		this.setState({
			isEdit:true,
			inputText:this.props.text
		});
	}
	handleSave(id,text){
		this.props.actions.editItem(id,text);
		this.setState({isEdit:false});
	}
	getItem(){
		console.log("here");
		 console.log(this.props);
		let input;
		let {id,text}=this.props;
		if(this.state.isEdit){
			// return(<EditItem text={text} onSave={(text)=>this.handleSave(id,text)}></EditItem>);
			// console.log(this.props.id);
			return(
				<li>
					<input 
						className={style.inputStyle} 
						ref={node => {input = node}}
						onChange={()=>this.setState({inputText:input.value})} 
						value={this.state.inputText}
					></input>
					<button 
						className={style.btnStyle}
						onClick={()=>this.handleSave(this.props.id,input.value)}>
						Save
					</button>
				</li>
				);
		}else
		{
			return(
			
				<li onDoubleClick={this.handleDoubleClick}>
					<span>{text}</span>
					<button
					className={style.btnStyle}
					onClick={()=>{this.props.actions.deleteItem(id);}}>
					Delete
					</button>

				</li>
				
			
			);
		}
	}
	render(){
		
		return(<div>{this.getItem()}</div>);
		
	};
}

export default WeightItem;

