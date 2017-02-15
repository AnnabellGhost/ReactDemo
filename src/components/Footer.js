import React, {Component} from 'react';
import { Link } from 'react-router';
// import { Button } from 'react-bootstrap';
import {Nav,NavItem} from 'react-bootstrap';
export default class Footer extends Component{
	render(){
		// console.log(this.props.urlFilter.routes);
		return(
// 				<Nav bsStyle="pills" activeKey={1}>
//     <NavItem eventKey={1} href='/'>Main</NavItem>
//                 <NavItem eventKey={2} href='/b'>Sub</NavItem>
//     <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
//   </Nav>
<div>
<small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_SECRET_CODE} />
      </form>
</div>

				
			);
	}
}
{/*<ul>
					<li><Link to="/a">About</Link></li>
					<li><Link to="/b">Main</Link></li>
				</ul>*/}