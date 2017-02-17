import React from 'react';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from '../index.css';
// import Button from 'react-bootstrap/lib/Button';
// import addNewItem from '../actions';
// import * as Actions from '../actions';

class AddWeightItem extends React.Component{
	
/*handleSubmit=(e)=>{
  e.preventDefault();
	this.props.actions.addNewItem(this.refs.input.value);
  input.value = '';
}*/

render(){
  let input;
  // console.log(this.props.actions.addNewItem);
	return (
    // <form onSubmit={e => {
        // e.preventDefault();
        // console.log('dispatching', this.props.actions.addNewItem(input.value));
        // this.props.actions.addNewItem(input.value);
        // this.props.dispatch(addNewItem(input.value));
        // input.value = '';}}>
        // <input ref={node => {input = node}} />
        // <button type="submit">Add Todo</button>
    // </form>

      <div className={style.addItemStyle}>

        <label for="addI">Text:<input id="addI" ref={node => {input = node}} className={style.inputStyle}/></label>
        <button 
          className={style.btnStyle}
          onClick={()=>{this.props.actions.addNewItem(input.value);input.value='';}}>
          Add Item
        </button>

      </div>





    
  )
}
  
}
function mapStateToProps(state) {
  return {
    Items: state.Items
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
    /*a:()=>{
      dispatch(addNewItem())
    }*/
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(AddWeightItem);
// export default AddWeightItem;
