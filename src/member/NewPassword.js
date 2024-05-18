import React, { useState } from 'react';
import './NewPasswordStyle.css';
import logoImage from '../img/semohan-logo.png';
import lock from "../img/lock.png"
import beforeCheck from "../img/free-icon-checkmark-656971.png"
function NewPassword() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [certificationNum, setCertificationNum] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div>
            <header>
                <img src={logoImage} alt="logo" />
            </header>

            <form id="newPassword" onSubmit={handleSubmit}>

                <label htmlFor="username">아이디</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <label htmlFor="password">비밀번호</label>
                <div>
                    <input
                        className="blank"
                        type="password"
                        name="pwd"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <img src={lock} alt="lock"/>
                </div>

                <label htmlFor="passwordCheck">비밀번호 재확인</label>
                <div>
                    <input
                        className="blank"
                        type="password"
                        id="passwordCheck"
                        value={passwordCheck}
                        onChange={(e) => setPasswordCheck(e.target.value)}
                    />
                    <img src={beforeCheck} alt="check" />
                </div>

                <label htmlFor="phoneNum">휴대전화</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="phoneNum"
                        id="phoneNum"
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                    />
                    <input className="button" type="button" value="인증번호" />
                </div>

                <input
                    className="blank"
                    type="number"
                    name="certificationNum"
                    id="certificationNum"
                    placeholder="인증번호를 입력하세요"
                    value={certificationNum}
                    onChange={(e) => setCertificationNum(e.target.value)}
                />
                <input className="button" type="submit" value="비밀번호 변경" />
            </form>
        </div>
    );
}

export default NewPassword;
