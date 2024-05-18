import React, { useState } from 'react';
import './UpdateRestaurantStyle.css';

function UpdateRestaurant() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNum: '',
        address: '',
        detailedAddress: '',
        businessHours: '',
        price: '',
        password: '',
        passwordCheck: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div>
            <header>
                <img src="/img/semohan-logo.png" alt="logo" />
            </header>

            <form id="updateRestaurant" method="post" action="" onSubmit={handleSubmit}>
                <label htmlFor="name">상호명</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        placeholder="기존 이름"
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="phoneNum">전화번호</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="phoneNum"
                        id="phoneNum"
                        value={formData.phoneNum}
                        placeholder="전화번호"
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="address">주소</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="detailedAddress"
                        id="detailedAddress"
                        value={formData.detailedAddress}
                        placeholder="상세 주소"
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="businessHours">영업시간</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="businessHours"
                        id="businessHours"
                        value={formData.businessHours}
                        placeholder="영업시간"
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="price">가격 안내</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="price"
                        id="price"
                        value={formData.price}
                        placeholder="기존 가격"
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="password">새로운 비밀번호</label>
                <div>
                    <input
                        className="blank"
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <img src="/img/lock.png" alt="lock" />
                </div>

                <label htmlFor="passwordCheck">비밀번호 재확인</label>
                <div>
                    <input
                        className="blank"
                        type="password"
                        name="passwordCheck"
                        id="passwordCheck"
                        value={formData.passwordCheck}
                        onChange={handleChange}
                    />
                    <img src="/img/check.png" alt="check" />
                </div>

                <div>
                    <input className="button" type="submit" value="저장" />
                </div>
            </form>
        </div>
    );
}

export default UpdateRestaurant;
