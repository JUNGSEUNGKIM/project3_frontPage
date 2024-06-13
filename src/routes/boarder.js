import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import styles from './boarder.module.css';
import axios from "axios";
import {useQuery} from "react-query";

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드럽게 스크롤
    });
}
function Borader(props){
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState({});
    const [params, setParams] = useState('')
    const [resultQue,setResultQue]=useState({});
    const [trueResult, setTrueResult] = useState(false)
    //
    //  setResultQue( useQuery('boardData', () =>
    //     axios.get(props.serverURL+'/boardmain'+params, { withCredentials: true })
    //         .then(response => response.data)
    // ));

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(props.serverURL+'/svboardmain'+params,{params:{user_id:props.loginId}}, { withCredentials: true });
            setResultQue(result.data);
            resultQue ? setTrueResult(true) : setTrueResult(false)
            // console.log(result.data)
            scrollToTop();
        };

        fetchData();

        // console.log(resultQue)
    }, [params,setResultQue]);



    // const { createProxyMiddleware } = require("http-proxy-middleware");
    //
    // module.exports = function (app) {
    //     app.use(
    //         "/items",
    //         createProxyMiddleware({
    //             target: "http://localhost:8081",
    //             changeOrigin: true,
    //         })
    //     );
    //     console.log("프록시 설정이 작동되었습니다.");
    // };






    useEffect(() => {
        console.log(resultQue); // resultQue가 업데이트될 때마다 실행됨
    }, [resultQue]);

    const [reqData, setReqData] = useState();


    const toggleExpanded = id => {
        setIsExpanded(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };


    return (

        <div className="main-page-content">

            {/* <!-- ============================================== SERVICE ===================================================== --> */}
            {/*{resultQue}*/}
            {!trueResult  && <div>Loading...</div>}

            {trueResult  && (

            <div id="service">
                <div className="service-content">
                    <div className="service-grid text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-title text-center wow fadeIn">
                                        <h3>자유 게시판</h3>
                                        <div className="underline1"></div>
                                        <div className="underline2"></div>
                                        <p>
                                            축제 후기를 올려주세요

                                        </p>
                                    </div>
                                    <button onClick={() => {

                                        navigate("/create");
                                    }}
                                        style={{
                                            marginTop: "20px",
                                            padding: "4px 12px",
                                            textAlign: "center",
                                            backgroundColor: "#7fccde",
                                            color: "white",
                                            border: "solid gray 2px",
                                            width: "120px",
                                            height: "50px",
                                            fontSize: "20px"
                                        }}
                                    >글쓰기
                                    </button>
                                </div>
                            </div>
                            <div className="row love-row wow fadeIn">
                                {
                                    resultQue.board.map(board => (
                                        <div className="col-md-4 col-sm-6" >
                                            <div className="service-details" data-wow-delay=".1s"
                                                 style={{maxHeight: '35em', minHeight:"35em"}}>
                                                <div className="service-head">
                                                    <a  onClick={()=>{
                                                        navigate("/detailboard/"+board[0])}}>
                                                    <img // src="assets/img/service/design-development.jpg"
                                                        src={props.imgURL + "/" + board[7].split(';')[0]}
                                                        alt="design-development"
                                                        style={{maxHeight: "200px"}}
                                                    /></a>

                                                </div>
                                                <div className="service-bottom">

                                                    <a  onClick={()=>{
                                                        navigate("/detailboard/"+board[0])

                                                    }}><h3 >{board[1]}&nbsp;&nbsp;[{board[8]}]</h3></a>
                                                    <div className="underline1"></div>
                                                    <div className="underline2"></div>
                                                    <div style={{
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                                        gap: '10px'
                                                    }}>
                                                        <a onClick={() => toggleExpanded(board[0])}>
                                                            {isExpanded[board[0]] ? '접기' : '더보기'}
                                                        </a>
                                                        <h6>작성자 : {board[2]}</h6>
                                                        <h6>좋아요 : {board[5]}</h6>
                                                    </div>

                                                    <p style={{
                                                        maxHeight: isExpanded[1] ? 'none' : '100px',
                                                        overflow: 'hidden',
                                                        textAlign: 'center',
                                                        marginLeft: 0
                                                    }}>
                                                        {board[6]}


                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                {
                                    resultQue.currentPage > 1 ?
                                        <a style={{
                                            background:`url("./이전화살표.png")`,
                                            backgroundSize: "cover",
                                            padding:"4px 9px",
                                            fontSize:"20px",
                                            border:"solid gray 1px",
                                            color:"black"
                                        }}> &lt; </a> :
                                        null
                                }
                                {
                                    Array(resultQue.endPage - resultQue.startPage + 1).fill().map((_, index) => {
                                        const pageNumber = resultQue.startPage + index;
                                        return (
                                            pageNumber === resultQue.currentPage ? (
                                                <span className="current-page" key={pageNumber}
                                                    style={{
                                                        border: "solid black ",
                                                        backgroundColor: "navy",
                                                        marginLeft: "5px",
                                                        padding: "4px 12px",
                                                        textAlign: "center",
                                                        fontSize: "20px",
                                                        color: "white",
                                                    }}
                                                >{pageNumber}</span>
                                            ) : (
                                                <a onClick={() => {
                                                    setParams('/?page=' + pageNumber)
                                                    // if (resultQue.isSuccess) {
                                                    //     console.log('여기 확인:', resultQue.data);
                                                    // }

                                                }} key={pageNumber}
                                                    style={{
                                                        border:"solid grey 1px",
                                                        marginLeft: "5px",
                                                        padding: "4px 12px",
                                                        textAlign: "center",
                                                        color: "black",
                                                        fontSize: "20px"
                                                    }}
                                                >{pageNumber}</a>
                                            )
                                        );
                                    })
                                }
                                {
                                    resultQue.tatalPage - resultQue.currentPage + 1 > resultQue.maxPageNumber ?
                                        <a>[다음]</a> : null
                                }
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            )}

            {/* <!-- ================================ BLOG ========================== --> */}


            {/* <!-- ================================ CONTACT ========================== --> */}


        </div>

    )
}

export default Borader;