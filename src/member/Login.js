// import React, {useState} from 'react';
// import  "./LoginStyle.css"; // CSS 파일을 import
// import {Link} from 'react-router-dom';
//
// function Login() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//
//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };
//
//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };
//
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // 여기에서 입력된 아이디와 비밀번호를 처리하는 로직을 추가할 수 있습니다.
//         console.log('Username:', username);
//         console.log('Password:', password);
//         // 예를 들어, 서버로 로그인 요청을 보낼 수 있습니다.
//     };
//     return (
//         <div>
//             {/*<Link to="/login"></Link>*/}
//             <header>
//                 <img src="/img/semohan-logo.png" alt="logo" />
//             </header>
//
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">아이디</label>
//                 <div>
//                     <input className="blank" onChange={handleUsernameChange} type="text" id="username" value={username} />
//                 </div>
//
//                 <label htmlFor="password">비밀번호</label>
//                 <div>
//                     <input className="blank" onChange={handlePasswordChange} type="password" id="password" value={password} />
//                 </div>
//
//                 <button onClick={handleSubmit} type="submit">로그인</button>
//
//                 <div>
//                     <a href="findId.jsp">아이디 찾기</a>
//                     <a href="newPassword.jsp">비밀번호 재설정</a>
//                     <a href="registerForm.jsp">회원가입</a>
//                 </div>
//             </form>
//         </div>
//     );
// }
// export default Login;

// Login.js
import React, { useState } from 'react';
import "./LoginStyle.css"; // CSS 파일을 import
import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        // 로그인 처리 등의 로직 추가

        // 로그인 버튼 클릭시 입력창 reset
        setUsername("");
        setPassword("");
    };

    return (
        <div>
            <header>
                <img src={logoImage} alt="logo"/>
            </header>

            <form id="login" onSubmit={handleSubmit}>
                <label htmlFor="username">아이디</label>
                <div>
                    <input className="blank" onChange={handleUsernameChange} type="text" id="username"
                           value={username}/>
                </div>

                <label htmlFor="password">비밀번호</label>
                <div>
                    <input className="blank" onChange={handlePasswordChange} type="password" id="password"
                           value={password}/>
                </div>

                <div/>
                <div/>
                {/*<button type="submit" className="button">로그인</button>*/}
                <input className="button" type="submit" value="로그인"/>
                <div>
                    <Link to="/findId">아이디 찾기</Link>
                    <Link to="/newPassword">비밀번호 재설정</Link>
                    <Link to="/register">회원가입</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
