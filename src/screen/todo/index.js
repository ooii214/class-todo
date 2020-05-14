import React, { Component } from 'react';
import styled from 'styled-components';
import { Name } from '../name';
class Todo extends Component {
  //생각을 해보자
  constructor(props, context) {
    super(props, context);
    this.state = {
      newItem: '',
      list: [],
    };
  }

  updateInput(k, v) {
    this.setState({
      [k]: v,
    });
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: '',
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({
      list: updatedList,
    });
  }

  render() {
    return (
      <Container>
        <Title>오늘의 이야기</Title>
        <TodoInput
          type='text'
          placeholder='입력하새요'
          value={this.state.newItem}
          onChange={(e) => this.updateInput('newItem', e.target.value)}
        />
        <TodoButton onClick={() => this.addItem()}></TodoButton>
        <TodoDiv>
          {this.state.list.map((item) => {
            return (
              <TodoData key={item.id}>
                {item.value}
                <TodoButton onClick={() => this.deleteItem(item.id)}>
                  <i> X</i>
                </TodoButton>
              </TodoData>
            );
          })}
        </TodoDiv>
        <Name pick='정민경' />
        <Name pick='개미 핣기' />
      </Container>
    );
  }
}

const Container = styled.div``;

const TodoInput = styled.input``;
const Title = styled.div``;

const TodoButton = styled.button``;
const TodoDiv = styled.div``;
const TodoData = styled.div``;

export { Todo };
