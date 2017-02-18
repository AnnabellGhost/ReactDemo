import React from 'react';
import { connect } from 'react-redux';
import Item from './Item' ;
// import {deleteItem} from '../actions/DeleteItem';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import style from '../index.css';

class List extends React.Component{
    componentDidMount(){
      this.props.actions.fetchAllTodos();
    }

    render(){
    // if(this.props.urlFilter.params.filter==='a'){return(<FilterableTable/>)}
    // console.log(this.props.Items);
    var List=this.props.Items.data.map((item)=>(
       <Item key={item.id} {...item} {...this.props}/>
    ));
    return(
      <div>
           <ul className={style.List}>{List}</ul>
      </div>
      );

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

export default connect(mapStateToProps,mapDispatchToProps)(List);
// export default connect()(WeightList);



