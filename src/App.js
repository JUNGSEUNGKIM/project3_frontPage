import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import React, {useEffect, useState} from "react";
import SecondPage from "./routes/secondPage";
import Home from "./routes/home"
import Footer from "./component/Footer";
import Header from "./component/Header";
import Boarder from "./routes/boarder"
import ChatBotPage from "./routes/chatBotPage";
import axios from "axios";
import {useQuery} from "react-query";


function App() {
    let resultQuery = useQuery('getRegions', ()=>
        axios.get('http://localhost:3000/mapPage')
            .then((response)=>{
                // console.log('서버요청')
                // console.log(response.data)
                return response.data
            })
    )
    useEffect(() => {
        if (resultQuery.isSuccess) {
            // console.log('여기확인', resultQuery.data.totalPosts);
        }
    }, [resultQuery.isSuccess, resultQuery.data]);

    const [showChat, setShowChat] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    const openFullScreen = () => {
        setFullScreen(true);
    };

    const closeFullScreen = () => {
        setFullScreen(false);
    };
  return (
      <div className="App">
          {resultQuery.isLoading && <div>Loading...</div>}


          {resultQuery.isSuccess && (

              <React.Fragment>
                  {/*{resultQuery.data.mountName}*/}
          <Header/>


          <Routes>

              <Route path={"/home"} element={<Home/>}/>
              <Route path={"/second"} element={<SecondPage/>}/>
              <Route path={"/boarder"} element={<Boarder/>}/>



          </Routes>
          <ChatBotPage/>

          <Footer/>

          {
              // resultQuery.isSuccess ? console.log('1__여기확인'+resultQuery.data.currentPage) : 'no'
                // console.log('여기확인'+resultQuery.data)

          }
              </React.Fragment>
          )}




      </div>
  );
}

export default App;
