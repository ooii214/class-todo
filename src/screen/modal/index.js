import React, { Component } from 'react';
import styled from 'styled-components';
class Modal extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderModal = () => {
    return (
      <React.Fragment>
        <ModalOverlay />
        <ModalHalf>
          <LoginModal>
            <LoginText>LOGIN</LoginText>
            <LoginInput placeholder='이메일' type='text'></LoginInput>
            <LoginInput placeholder='비밀번호' type='password'></LoginInput>
            <Lbotton onClick={() => alert('하이')}>로그인</Lbotton>
            <LoginText>Forgot Password ?</LoginText>
            <Lbotton>비밀번호 찾기</Lbotton>
            <Lbotton>네이버 로그인</Lbotton>
            <Lbotton>카카오 로그인</Lbotton>
            <Lbotton>구글 로그인</Lbotton>
            <LoginText> Not yet an min member?</LoginText>
            <Lbotton>Sign up</Lbotton>
          </LoginModal>
        </ModalHalf>
      </React.Fragment>
    );
  };

  render() {
    return <Container>{this.renderModal()}</Container>;
  }
}
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
  font-size: 34px;
  font-weight: 700;
  color: #ed2553;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginInput = styled.input`
  display: flex;
`;

const Lbotton = styled.button``;
export { Modal };
