import React, {Component} from 'react';


export default class Footer extends Component{
	render(){
		return(
			<div>
				<small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      			<form>
        			<input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
      			</form>
			</div>
			);
	}
}
