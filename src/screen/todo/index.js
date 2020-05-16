import React, { Component } from 'react';
import styled from 'styled-components';
import { Name } from '../name';
class Todo extends Component {
  //생각을 해보자
  constructor(props, context) {
    super(props, context);
    this.state = {
      newItem: '',
      list: [{ text: '할일목록', check: false, modify: false }],
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
      modify: false,
      check: false,
      //1 + Math.random() 를 통해서  매번 다른  uniue id 를 부여한다
      //현재 가지고 있는  list 연산자를 이용하여  현재 list의 item를 추가하고  newItem에 push 를한다
      text: this.state.newItem.slice(),
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

  handleModify = (i, e) => {
    let todos = this.state.list;
    console.log('두투', todos);
    if (e) {
      console.log('두투리스트 :', todos[i]);
      todos[i].text = e.target.value;
    } else {
      // console.log('이 값을 뭘까 :', todos[i].modify);
      todos[i].modify = !todos[i].modify;
    }
    this.setState({
      list: todos,
    });
  };

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
        <TodoButton onClick={() => this.addItem()}> 추가 </TodoButton>
        <TodoDiv>
          {this.state.list.map((item) => {
            console.log('아이템', item);
            return (
              <TodoData key={item.id}>
                {item.text}
                <TodoButton onClick={() => this.deleteItem(item.id)}>
                  <i> X</i>
                </TodoButton>
                <TodoButton onClick={() => this.handleModify(item.modify)}>
                  {item.modify ? '완료' : '편집'}
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

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: powderblue;
`;
const TodoInput = styled.input``;
const Title = styled.div``;

const TodoButton = styled.button``;
const TodoDiv = styled.div``;
const TodoData = styled.div``;

export { Todo };
