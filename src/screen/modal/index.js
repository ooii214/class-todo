import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import {userActions} from '../actions';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

export const Modal = withRouter((props) => {
  const dispatch = useDispatch();
  const defaultState = useSelector((state) => state);
  const [input, setInput] = useState({
    useName: '',
    usePassword: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { useName, usePassword } = input;
  // const loggingIn = useSelector((state) => state.authentication.loggingIn);
  //리덕스의 상태값을 조회하기 위한 hook 함수로 이전의 connect 를 통해 상태값을 조회하는 것보다 훨씬 간결하게 작성하고 코드가독성이 상승되는 장점이 있는 함수입니다. 사용방법은 다음과 같습니다.
  // const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((input) => ({ ...input, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (useName && usePassword) {
      // dispatch(userActions.login(userName ,usePassword))
    }
  }
  return (
    <Container>
      <ModalOverlay />
      <ModalHalf>
        <LoginForm onSubmit={handleSubmit}>
          <LoginModal>
            <LoginText>LOGIN</LoginText>
            <LoginInput
              placeholder='이메일'
              type='text'
              value={useName}
              onChange={handleChange}
            />
            {submitted && !useName && <div>UseName is required</div>}
            <LoginInput
              placeholder='비밀번호'
              type='password'
              value={usePassword}
              onChange={handleChange}
            />
            {submitted && !usePassword && <div>Password is required</div>}
            <Lbotton>로그인</Lbotton>
            <LoginText>Forgot Password ?</LoginText>
            <Lbotton>비밀번호 찾기</Lbotton>
            <Lbotton>네이버 로그인</Lbotton>
            <Lbotton>카카오 로그인</Lbotton>
            <Lbotton>구글 로그인</Lbotton>
            <LoginText> Not yet an min member?</LoginText>
            <Lbotton>Sign up</Lbotton>
          </LoginModal>
        </LoginForm>
      </ModalHalf>
    </Container>
  );
});

const Container = styled.div``;

const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: transparent;
  /* height: 668px; */
`;

const ModalHalf = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 180px;
  /* max-width: 768px; */
  top: 0px;
  left: 0;
  right: 0;
  z-index: 100;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

const LoginModal = styled.div`
  max-width: 360px;
  max-height: 530px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const LoginForm = styled.form`
  max-width: 360px;
  max-height: 530px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const LoginText = styled.div`
  font-size: 34px;
  font-weight: 700;
  color: #ed2553;
`;

// const LoginForm = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
const LoginInput = styled.input`
  display: flex;
`;

const Lbotton = styled.button``;
