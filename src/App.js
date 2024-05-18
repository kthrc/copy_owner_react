// // import logo from './logo.svg';
// import './App.css';
//
// import React, {Component} from "react";
// import RestaurantInfo from "./member/RestaurantInfo";
// import restaurantInfo from "./member/RestaurantInfo";
// import Login from "./member/Login";
// import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
//
// class App extends Component{
//
//   render () {
//     return (
//         <div>
//           <Login/>
//           <RestaurantInfo
//               name={restaurantInfo.name}
//               phoneNumber={restaurantInfo.phoneNumber}
//               businessHours={restaurantInfo.businessHours}
//               prices={restaurantInfo.prices}
//               address={restaurantInfo.address}
//           />
//         </div>
//     );
//   }
// }
//
//
// // function App() {
// //     return (
// //         <Router>
// //             <Switch>
// //                 <Route exact path="/login" component={Login} />
// //                 <Route path="/restaurantInfo" component={restaurantInfo} />
// //             </Switch>
// //         </Router>
// //
// //     );
// // }
//
// export default App;

// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./member/Login";
import RestaurantInfo from "./member/RestaurantInfo";
import NewPassword from "./member/NewPassword";
import UpdateMenu from "./member/UpdateMenu";
import UpdateInfo from "./member/UpdateInfo";
import RegisterMenu from "./member/RegisterMenu";
import UpdateRestaurant from "./member/UpdateRestaurant";
class App extends Component {
    render() {
        return (
            <Router>
                <Routes>

                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/newPassword" element={<NewPassword />} />
                    <Route exact path="/restaurantInfo" element={<RestaurantInfo />} />
                    <Route exact path="/updateMenu" element={<UpdateMenu />} />
                    <Route exact path="/updateInfo" element={<UpdateInfo />} />
                    <Route exact path="/registerMenu" element={<RegisterMenu />} />
                    <Route exact path="/updateRestaurant" element={<UpdateRestaurant />} />

                    <Route path="/" element={<Login />} /> {/* 기본적으로 /login으로 이동 */}
                </Routes>
            </Router>
        );
    }
}

export default App;
