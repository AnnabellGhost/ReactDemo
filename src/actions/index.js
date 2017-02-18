
import * as APIs from '../constants/ServerAPIs';
function shouldFetchAllTodos(state) {
	const data = state.data;
	if (data && data.isFetchingAllTodos) {
		return false
	}
	return true;
}
export function fetchAllTodos() {
	return async(dispatch, getState) => {
		//verify
		if (!shouldFetchAllTodos(getState())) {
			return Promise.resolve();
		}
		//dispatch fetch start action
		dispatch({
			type: 'START_FETCH_ALL_TODOS'
		});
		
		//fetching
		const response = await fetch('/allItems.json');

		console.log(response.headers.get('Content-Type'));
		
		//response
		const data = await response.json();

		//dispatch fetch end action
		return dispatch({
			type: 'FETCH_ALL_TODOS',
			data
		});
	}
}


var i=0;
export function addNewItem(text){
return {
		type:'ADD_NEW_ITEM',
		text:text,
		id:++i
	}
};
export function deleteItem(id){
	return{
		type:'DELETE_ITEM',
		id:id
	}
};
export function editItem(id,text){
	return{
		type:'EDIT_ITEM',
		id:id,
		text:text
	}
};
//http://localhost:8080/allItems.json
// export default {...addNewItem,...deleteItem,...editItem};
/*TRYING TO TEST ... 
		response.setContentType("application/json");
		console.log(response.headers.get('Content-Type'));
		const data = await response.text();*/