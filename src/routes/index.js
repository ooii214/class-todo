import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Todo, Food } from '../screen';

class MinRoute extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Todo} />
          <Route path='/food' component={Food} />
        </Switch>
      </Router>
    );
  }
}

export { MinRoute };
