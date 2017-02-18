// require("babel-core/register");
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './containers/index';
import FilterableTable from './containers/FilterableTable';

//middleware for log
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}


var store=createStore(reducers,applyMiddleware(logger,thunk));
render(
		<Provider store={store}>
			<App/>
		</Provider>,
		document.getElementById('root')
	);

/*<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={App}/>
					<Route path="a" component={FilterableTable}/>
				</Route>
			</Router>*/