import React, {Component, useState} from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useNavigate} from "react-router-dom";
import {Nav} from "react-bootstrap";
import FestivalDetails from "./FestivalDetails";


const Container = styled.div`
  //overflow:hidden;
`;

const StyledSlider = styled(Slider)`
    //.slick-slide div{
    //  outline: none;
    //}

    .slick-prev:before, .slick-next:before {
        color: #eed136;
        z-index: 999;
        font-size: 30px;
    }
`;

const ImageContainer = styled.div`
    margin: 0 auto;
    position: relative;  
    overflow: hidden;    
`;

const Image = styled.img`
    max-width:100%;
    max-height:100%;
    padding: 10%;
`;

const InfoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    //display: none;
    display: ${props => props.show ? 'flex' : 'none'}; /* props에 따라 보이도록 설정 */
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const InfoText = styled.div`
    color: white;
    font-size: 16px;
    text-align: center;
`;

const LinkButton = styled.button`
    //background-color: #eed136;
    background-color: transparent;
    color: white;
    //padding: 10px 20px;
    //border: none;
    border: 1px solid white; /* 테두리: 흰색 2px 실선 */
    border-radius: 50%; /* 동그란 모양으로 만들기 위해 반지름 추가 */
    //border-radius: 5px; /* 기존 스타일 */
    margin-top: 50px;
    cursor: pointer;
    width: 80px; /* 버튼 너비 */
    height: 80px; /* 버튼 높이 */
    font-size: 1.5rem; /* 텍스트 크기 */
`;



const FestivalSlider = ( myProp ) => {

    const [hoveredFestivalId, setHoveredFestivalId] = useState(null);
    const navigate = useNavigate();

    const handleMouseEnter = (id) => {
        setHoveredFestivalId(id);
    };

    const handleMouseLeave = () => {
        setHoveredFestivalId(null);
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        centerMode: false,
    };
        console.log("myProp:::",myProp)

        return (
            <Container>
                <h2></h2>
                {myProp.myProp && myProp.myProp.length > 0 ? (
                    <StyledSlider {...settings}
                    >
                        {myProp.myProp && myProp.myProp.map(festival=> {
                            return (
                                <div key={festival.id}
                                     onMouseEnter={() => handleMouseEnter(festival.FestivalID)}
                                     onMouseLeave={handleMouseLeave}
                                >
                                    <ImageContainer>

                                        <Image src={myProp.imgURL+"/"+festival.ImageName.split(";")[0]} style={{margin:'0 auto',minHeight:"100%"}}/>
                                            <InfoOverlay show={hoveredFestivalId  === festival.FestivalID}>
                                                <InfoText>
                                                    {/*{overlayContent.zone}*/}
                                                    <h3>{festival.FestivalName}</h3>
                                                    <span style={{fontSize: '1.4rem'}}>
                                                        {festival.RoadAddress === "주소 X" ? festival.JibunAddress : festival.RoadAddress}
                                                    </span><br/>
                                                    <span style={{fontSize: '1.2rem'}}>
                                                        {festival.StartDate}~{festival.EndDate}
                                                    </span><br/>
                                                    {/*<a href={`/festivaldetails/${festival.FestivalID}`}><LinkButton>자세히보기</LinkButton></a>*/}
                                                    {/*<Nav.Link onClick={()=>{navigate(`/festivaldetails/${festival.FestivalID}`)}}>자세히보기</Nav.Link>*/}
                                                    {/*<LinkButton onClick={() => navigate(`/festivaldetails/${festival.FestivalID}`)}>*/}
                                                    <LinkButton onClick={() => navigate(`/festivaldetails/${festival.FestivalID}`)}>
                                                       더보기
                                                    </LinkButton>
                                                    {/*<FestivalDetails FestivalID={festival.FestivalID} />*/}
                                                </InfoText>
                                            </InfoOverlay>
                                    </ImageContainer>
                                </div>
                            );
                        })}
                    </StyledSlider>
                ) : (
                    <span>진행중인 축제가 없습니다.</span>
                )}
            </Container>
        );
    };


export default FestivalSlider;