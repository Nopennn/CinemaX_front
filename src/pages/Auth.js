import React, {useState} from 'react';

const Auth = () => {
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    return (
        <div>
            <h1>Авторизация</h1>
            <form action="https://google.com/search" method="get" encType="multipart/form-data">
                <input
                    type="text"
                    name="q"
                    placeholder="Ваш логин"
                    value={loginValue}
                    onChange={event => setLoginValue(event.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Ваш пароль"
                    value={passwordValue}
                    onChange={event => setPasswordValue(event.target.value)}
                />
                <input type="submit" name={"submitButton"} value="Подтвердить"/>
            </form>
        </div>
    );
};

export default Auth;