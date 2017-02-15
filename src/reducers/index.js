import { combineReducers } from 'redux'
const initialState = {
  isFetchingAllTodos: false,
  data: []
}




function Items(state=initialState,action){
	switch(action.type){
		case 'START_FETCH_ALL_TODOS':
			return Object.assign({}, state, {
				isFetchingAllTodos: true
			});

		case 'FETCH_ALL_TODOS':
			return Object.assign({}, state, {
				isFetchingAllTodos: false,
				data: action.data.data.reduce(function(pre, cur) {
					//remove duplicates
					!pre.find(key => key.id === cur.id) && pre.push(cur);
					return pre;
				},[...state.data])
			});

		case 'FILTER_ITEMS':
				return Object.assign({},);
		case 'ADD_NEW_ITEM':
				return Object.assign({},state,{
					data:[
			{
				text:action.text,
				id:action.id
			}
			,...state.data]
		});
		case 'DELETE_ITEM':
			return Object.assign({},state,{data:state.data.filter((item)=>item.id!==action.id)});
			// return Object.assign({},state,{data:state.data.splice(indexOf(action.text),1);
		case 'EDIT_ITEM':
			return Object.assign({},state,{data:state.data.map((item)=>
					item.id===action.id?Object.assign({},item,{text:action.text}):item
				)});
		default :
			return state;
	}
};

const reducers=combineReducers({Items});
export default reducers;

// state.delete(action.id);
/*state.data.map((item)=>
					item.id===action.id?Object.assign({},item,{text:action.text}):item
				);*/