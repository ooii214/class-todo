import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Todo, Name } from '../screen';

class MinRoute extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Todo} />
          <Route path='/name' component={Name} />
        </Switch>
      </Router>
    );
  }
}

export { MinRoute };
