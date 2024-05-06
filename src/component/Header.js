import React, {useState} from "react";
import axios from "axios";
import  {useNavigate, useParams} from "react-router-dom";
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드럽게 스크롤
  });
}
function Header(props) {
  let [toggleButton, setToggleButton] = useState(false);
  // console.log("여기야??::::",props.isLoggedIn)
  // console.log("여기야??::::",props.loginId)

  function logoutSession(){
    // console.log(props.serverURL+'/logout')
    axios.get(props.serverURL+'/logout')
        .then(res => {
          // console.log(res)
          if(res.status===200){
            alert("로그아웃 되었습니다.")
          }
        })
  }

  const navigate = useNavigate()
  return (

      <div className="menubar">
        <div className="menubar-content">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3">
                  <div className="site-title">
                    <a  style={{ textDecoration: "none" }} onClick={()=>{
                      navigate('/home')
                      scrollToTop()
                    }}>
                      <h3>GARAGE</h3>
                    </a>
                  </div>
                </div>
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                    onClick={()=>{toggleButton?setToggleButton(false):setToggleButton(true)
                      }}
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div className="col-md-9 col-sm-9 navbar-style">
                  <div
                    className={`collapse navbar-collapse ${toggleButton ? 'in' : ''}`}
                    id="bs-example-navbar-collapse-1"
                  >
                    <ul className="nav navbar-nav">
                      <li>
                        <a onClick={()=>{
                          scrollToTop()
                          toggleButton?setToggleButton(false):setToggleButton(true)
                          navigate('/home')}} className="active">
                          HOME
                        </a>
                      </li>
                      <li>
                        <a onClick={()=>{
                          scrollToTop()
                          toggleButton?setToggleButton(false):setToggleButton(true)
                          navigate('/festival')}}>FESTIVAL</a>
                      </li>
                      <li>
                        <a onClick={()=>{
                          scrollToTop()
                          toggleButton?setToggleButton(false):setToggleButton(true)
                          navigate('/personalized')}}>PERSONALIZED</a>
                      </li>
                      <li>
                        <a onClick={()=>{
                          scrollToTop()
                          toggleButton?setToggleButton(false):setToggleButton(true)
                          navigate('/boarder')}}>BOARD</a>
                      </li>
                        {
                          props.isLoggedIn ? (
                              <React.Fragment>
                                  <li><a onClick={()=>{
                                    scrollToTop()
                                    toggleButton?setToggleButton(false):setToggleButton(true)
                                    logoutSession();
                                    props.setIsLoggedIn(false);
                                    props.setLoginId('')
                                  }}>LOGOUT</a></li>
                                  <li><a>{props.loginId} 님</a></li>
                              </React.Fragment>
                              ):(
                              <li><a onClick={()=>{
                                scrollToTop()
                                toggleButton?setToggleButton(false):setToggleButton(true)
                                navigate('/login')}}>LOGIN</a></li>)
                        }
                      {/*<li>*/}
                      {/*  <a href="/#blog">Blog</a>*/}
                      {/*</li>*/}
                      {/*<li>*/}
                      {/*  <a href="/#contact">Contact</a>*/}
                      {/*</li>*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

  );
}

export default Header;
