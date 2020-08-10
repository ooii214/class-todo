import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Todo, Name, Modal, SignUp } from '../screen';

class MinRoute extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Modal} />
          <Route path='/todo' component={Todo} />
          <Route path='/name' component={Name} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export { MinRoute };
