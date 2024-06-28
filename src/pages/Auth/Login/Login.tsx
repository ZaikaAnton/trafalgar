import styled from 'styled-components';
import React, { useRef, useEffect, useState } from 'react';
import Headling from '../../../components/Headling/Headling';
import Input from '../../../components/Input/Input';
import { Link, Navigate } from 'react-router-dom';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
import Form from '../../../components/Form/Form';

const Wrapper = styled.div`
  width: 560px;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 28px;
  cursor: pointer;
`;

const Label = styled.label`
  margin-right: auto;
`;

const ForgotPasswordLink = styled(Link)`
  color: blue;
  text-decoration: none;
`;

const BntEntry = styled.button`
  padding: 16px 261px;
  background: rgb(69, 143, 246);
  box-sizing: border-box;
  border: 2px solid rgb(69, 143, 246);
  color: white;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.5px;
  width: 100%;

  margin-bottom: 48px;
  cursor: pointer;
`;

const LinkToRegistration = styled(Link)`
  color: rgb(0, 29, 108);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: left;
  text-decoration: none;
`;

const LabelTag = styled.label`
  color: rgb(33, 39, 42);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0%;
  text-align: left;
`;

const Hr = styled.hr`
  border: 1px solid rgb(221, 225, 230);
  margin: 48px 0px;
`;
const INITIAL_STATE = {
  email: '',
  password: '',
  isValid: false,
};
const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState(INITIAL_STATE);

  const handleInputChange = () => {
    const email = emailRef.current?.value || '';
    const password = passwordRef.current?.value || '';
    const isValid = email !== '' && password !== '';

    setState({
      email,
      password,
      isValid,
    });
  };

  useEffect(() => {
    const handleEmailInput = () => handleInputChange();
    const handlePasswordInput = () => handleInputChange();

    emailRef.current?.addEventListener('input', handleEmailInput);
    passwordRef.current?.addEventListener('input', handlePasswordInput);

    return () => {
      emailRef.current?.removeEventListener('input', handleEmailInput);
      passwordRef.current?.removeEventListener('input', handlePasswordInput);
    };
  }, [state.isValid]);

  return (
    <Wrapper>
      <Headling>Вход</Headling>

      <Form>
        <LabelTag htmlFor="email">Email</LabelTag>
        <Input id="email" name="email" placeholder="Email" ref={emailRef} defaultValue={state.email} />

        <LabelTag htmlFor="password">Пароль</LabelTag>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
          defaultValue={state.password}
        />
      </Form>

      <LoginContainer>
        <Checkbox id="rememberMe" />
        <Label htmlFor="rememberMe">Запомнить меня</Label>
        <ForgotPasswordLink to="/forgot-password">Забыли пароль?</ForgotPasswordLink>
      </LoginContainer>

      <BntEntry onClick={() => console.log(state.isValid)}>Вход</BntEntry>

      <ButtonLink />

      <Hr />

      <LinkToRegistration to="/trafalgar/auth/register">Нет аккаута? Зарегестрироваться</LinkToRegistration>
    </Wrapper>
  );
};

export default Login;
