import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import {userActions} from '../actions';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

export const Modal = withRouter((props) => {
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  const defaultState = useSelector((state) => state);
  //리덕스의 상태값을 조회하기 위한 hook 함수로 이전의 connect 를 통해 상태값을 조회하는 것보다 훨씬 간결하게 작성하고 코드가독성이 상승되는 장점이 있는 함수입니다. 사용방법은 다음과 같습니다.
  // const dispatch = useDispatch();
  const signIn = () => {
    if (userName === 'qwe' && password === '1234') {
      setSubmitted(false);
      setAlert('Login Successfully');
      props.history.push('/todo');
    } else {
      setSubmitted(true);
      setAlert('username or password is not correct');
    }
  };
  const signUp = () => {};

  return (
    <Container>
      <ModalOverlay />
      <ModalHalf>
        <LoginModal>
          <LoginText size={34}>LOGIN</LoginText>
          <LoginInput
            placeholder='아이디'
            type='text'
            onChange={(e) => setUserName(e.target.value)}
            submitted={submitted}
          />
          {/* {submitted && !useName && <div>UseName is required</div>} */}
          <LoginInput
            placeholder='비밀번호'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            submitted={submitted}
          />
          {alert}
          {/* {submitted && !usePassword && <div>Password is required</div>} */}
          <Lbotton onClick={() => signIn()}>로그인</Lbotton>
          <LoginText>Forgot Password ?</LoginText>
          <Lbotton>비밀번호 찾기</Lbotton>
          <Lbotton>네이버 로그인</Lbotton>
          <Lbotton>카카오 로그인</Lbotton>
          <Lbotton>구글 로그인</Lbotton>
          {/* <LoginText> Not yet an min member?</LoginText> */}
          <LoginText size={34}>SignUp</LoginText>
          <LoginInput placeholder='아이디' type='text' />
          <LoginInput placeholder='비밀번호' type='password' />
          <LoginInput placeholder='비밀번호확인' type='password' />
          <Lbotton onClick={() => signUp()}>Sign up</Lbotton>
        </LoginModal>
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

const LoginText = styled.div`
  font-size: ${(props) => props.size}px;
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
