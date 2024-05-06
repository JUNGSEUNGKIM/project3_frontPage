import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import styles from './FestivalPage.module.css';
import axios from "axios";
import { Map, MapMarker } from "react-kakao-maps-sdk";

// const itemsPerPage = 5;
const marketItemsPerPage = 3; // 주변시장 페이지당 아이템 개수
const restaurantItemsPerPage = 3; // 주변맛집 페이지당 아이템 개수

function EventDetails() {

    const { EVENTID}  = useParams();
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log("EVENTID::::",EVENTID)

    // 지도관련
    const [zoomable, setZoomable] = useState(false);

    // // 페이징 처리
    // const [marketPage, setMarketPage] = useState(0);
    // const nextMarketPage = () => {
    //     setMarketPage(prev => prev + 1);
    // };
    // const prevMarketPage = () => {
    //     setMarketPage(prev => prev - 1);
    // };
    // const [restaurantPage, setRestaurantPage] = useState(0);
    // const nextRestaurantPage = () => {
    //     setRestaurantPage(prev => prev + 1);
    // };
    // const prevRestaurantPage = () => {
    //     setRestaurantPage(prev => prev - 1);
    // };


    // 전시정보 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/events`, {
                    params: {
                        EVENTID: EVENTID
                    }
                });
                setEventData(response.data);
                console.log("eventData:", response.data);

            } catch (error) {
                console.error('Error fetching event data:', error);
            }
            finally {
                setLoading(false); // 데이터 가져오기 완료 후 로딩 상태 해제
            }
        };

        fetchData();
    }, []);

    // console.log("festivalData::::", festivalData);
    // console.log("FestivalDataInfo::::", festivalData[0]);
    // console.log("FestivalName::::", festivalData[0].FestivalName);
    // console.log("eventData::::", eventData);


    if (loading) {
        return <p>Loading...</p>; // 로딩 중일 때 로딩 상태를 표시
    }


    ///// 축제장소와 맛집 사이의 거리를 계산하는 함수(직선거리)
    // const calculateDistance = (lat1, lon1, lat2, lon2) => {
    //     const R = 6371; // 지구의 반지름 (단위: km)
    //     const dLat = toRad(lat2 - lat1);
    //     const dLon = toRad(lon2 - lon1);
    //     const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //         Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    //         Math.sin(dLon / 2) * Math.sin(dLon / 2);
    //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     const distance = R * c;
    //     return distance;
    // };
    //
    // const toRad = (value) => {
    //     return (value * Math.PI) / 180;
    // };

    const startDate = new Date(eventData[0].STARTDATE);
    const endDate = new Date(eventData[0].ENDDATE);
    const formattedStartDate = startDate.toLocaleDateString(); // "2024-08-29"
    const formattedEndDate = endDate.toLocaleDateString();






    return (
        <div id="festival_details">
            <div className={styles.details_container}>

                <div className={styles.title_container}>
                    <div className={styles.main_title}>
                        <h3 style={{fontWeight:"bold"}}>{eventData[0].EVENTNAME}</h3>
                        <p style={{fontSize:"1.5rem"}}>
                            {eventData[0].LOCATION} ｜ {formattedStartDate} ~ {formattedEndDate}
                        </p>
                    </div>
                </div>

                <div className={styles.details_content}>

                    {/* 축제 내용 PART */}
                    <div className={styles.details_event_info}>
                        {/*<div className={styles.details_festival_info}>*/}
                        <h4 style={{fontWeight:"bold"}}>상세정보</h4>
                        <hr/>
                        <p>{eventData[0].DESCRIPTION}</p>
                        &nbsp;
                        <ul>
                            <li><span className={styles.label}>장소:</span>&emsp;&emsp;&emsp;{eventData[0].LOCATION}</li>
                            <li><span
                                className={styles.label}>기간:</span>&emsp;&emsp;&emsp;{formattedStartDate} ~ {formattedEndDate}
                            </li>
                            <li><span className={styles.label}>나이제한:</span>&emsp;{eventData[0].AGERESTRICTION}</li>
                            <li><span className={styles.label}>관람요금:</span>&emsp;{eventData[0].FEEINFO}</li>
                            <li><span
                                className={styles.label}>관람시간:</span>&emsp;{eventData[0].STARTTIME} ~ {eventData[0].ENDTIME}
                            </li>
                            <li><span
                                className={styles.label}>주소:</span>&emsp;&emsp;&emsp;{eventData[0].ROADADDRESS === "주소 X" ? eventData[0].JIBUNADDRESS : eventData[0].ROADADDRESS}
                            </li>
                            <li>주차가능여부: &emsp;{eventData[0].PARKINGAVAILABILITY}</li>
                        </ul>

                    </div>


                    {/* 축제 지도 PART */}
                    <div className={styles.festival_map}>

                            <Map
                                className={styles.map}
                                center={{lat: eventData[0].LATITUDE, lng: eventData[0].LONGITUDE}}
                                level={3} // 지도의 확대 레벨
                                zoomable={zoomable}

                            >
                                <div className={styles.buttonOverlay}>
                                    <button onClick={() => setZoomable(prevZoomable => !prevZoomable)}>
                                        {zoomable ? '확대/축소 끄기' : '확대/축소 켜기'}
                                    </button>
                                </div>
                                {/*//지도에 보여줄 위치 지정 (위도,경도)*/}

                                <MapMarker
                                    style={{border: 'tranparent'}}
                                    position={{lat: eventData[0].LATITUDE, lng: eventData[0].LONGITUDE}}
                                    // image={{
                                    //         // src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지주소
                                    //         src: process.env.PUBLIC_URL + '/assets/img/festival/festival.png', // 마커이미지주소
                                    //     size: {
                                    //         width: 50,
                                    //         height: 67,
                                    //     }, // 마커이미지의 크기입니다
                                    // }}
                                >

                                </MapMarker>
                            </Map>
                        {/*//핀에 적힐 이름 (위치 이름)*/}


                    </div>


                    {/*/!* 주변시장 *!/*/}
                    {/*<div className={styles.regional_market}>*/}
                    {/*    <h4 style={{fontWeight: "bold"}}>주변시장</h4>*/}
                    {/*    <hr/>*/}
                    {/*    {!marketAndRestaurantData.market_data || marketAndRestaurantData.market_data.length === 0 ? (*/}
                    {/*        <p>근처에 시장이 없습니다.</p>*/}
                    {/*    ) : (*/}
                    {/*        <div className={styles.market_container}>*/}
                    {/*            {marketAndRestaurantData.market_data*/}
                    {/*                .slice(marketPage * marketItemsPerPage, (marketPage + 1) * marketItemsPerPage)*/}
                    {/*                .map((market, index) =>(*/}
                    {/*                    <div key={index} className={styles.market_item}>*/}
                    {/*                        /!*<p><span className={styles.label}>시장이름:</span> &emsp;&emsp;&emsp;{market.MARKETNAME}</p>*!/*/}
                    {/*                        <h4 style={{fontWeight: "bold"}}>{market.MARKETNAME}</h4>*/}
                    {/*                        <hr style={{border:"dashed 1px rgba(213, 233, 183, 0.76)", margin:"0 0 5% 0",width: "95%"}} />*/}
                    {/*                            <p><span className={styles.label}>시장주소:</span>&emsp;&emsp;&emsp;{market.ROADADDRESS === "주소 X" ? market.JIBUNADDRESS : market.ROADADDRESS}</p>*/}
                    {/*                            <p><span className={styles.label}>시장유형:</span>&emsp;&emsp;&emsp;{market.MARKETTYPE}</p>*/}
                    {/*                            <p><span className={styles.label}>시장까지의 거리:</span>*/}
                    {/*                                {calculateDistance(festivalData[0].Latitude, festivalData[0].Longitude, market.LATITUDE, market.LONGITUDE).toFixed(2)} km*/}
                    {/*                            </p>*/}
                    {/*                    </div>*/}
                    {/*                ))}*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*    /!* 페이징 처리 *!/*/}
                    {/*    {marketAndRestaurantData.market_data.length > marketItemsPerPage && (*/}
                    {/*        <>*/}
                    {/*            <button onClick={prevMarketPage} disabled={marketPage === 0}>이전</button>*/}
                    {/*            <button onClick={nextMarketPage}*/}
                    {/*                    disabled={(marketPage + 1) * marketItemsPerPage >= marketAndRestaurantData.market_data.length}>다음*/}
                    {/*            </button>*/}
                    {/*        </>*/}
                    {/*        )}*/}
                    {/*        </div>*/}


                    {/*        <div className={styles.regional_yumyum}>*/}
                    {/*<h4 style={{fontWeight: "bold"}}>주변맛집</h4>*/}
                    {/*    <hr/>*/}
                    {/*    {!marketAndRestaurantData.yumyum_data || marketAndRestaurantData.yumyum_data.length === 0 ? (*/}
                    {/*        <p>근처에 맛집이 없습니다.</p>*/}
                    {/*    ) : (*/}
                    {/*        <div className={styles.restaurant_container}>*/}
                    {/*            {marketAndRestaurantData.yumyum_data*/}
                    {/*                .slice(restaurantPage * restaurantItemsPerPage, (restaurantPage + 1) * restaurantItemsPerPage)*/}
                    {/*                .map((restaurant, index) =>(*/}
                    {/*                    <div key={index} className={styles.restaurant_item}>*/}
                    {/*                        /!*<p>식당명: {restaurant.RESTAURANTNAME}</p>*!/*/}
                    {/*                        <h4 style={{fontWeight: "bold"}}>{restaurant.RESTAURANTNAME}</h4>*/}
                    {/*                        <hr style={{*/}
                    {/*                            border: "dashed 1px rgba(213, 233, 183, 0.76)",*/}
                    {/*                            margin: "0 0 5% 0",*/}
                    {/*                            width: "95%"*/}
                    {/*                        }}/>*/}
                    {/*                        <p>식당주소: {restaurant.RESTAURANTADDRESS}</p>*/}

                    {/*                        /!* 위도와 경도를 사용하여 거리 계산 후 출력 *!/*/}
                    {/*                        <p>식당까지의 거리:*/}
                    {/*                            {calculateDistance(festivalData[0].Latitude, festivalData[0].Longitude, restaurant.LATITUDE, restaurant.LONGITUDE).toFixed(2)} km*/}
                    {/*                        </p>*/}
                    {/*                    </div>*/}
                    {/*                ))}*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*            /!* 페이징 처리 버튼 *!/*/}
                    {/*            {marketAndRestaurantData.yumyum_data.length > restaurantItemsPerPage && (*/}
                    {/*        <>*/}
                    {/*            <button onClick={prevRestaurantPage} disabled={restaurantPage === 0}>이전</button>*/}
                    {/*            <button onClick={nextRestaurantPage}*/}
                    {/*                    disabled={(restaurantPage + 1) * restaurantItemsPerPage >= marketAndRestaurantData.yumyum_data.length}>*/}
                    {/*               다음*/}
                    {/*            </button>*/}
                    {/*        </>*/}
                    {/*    )}*/}
                    {/*</div>*/}


                    {/*<div className={styles.details_insta}>*/}
                    {/*    <p>인스타업로드</p>*/}
                    {/*</div>*/}

                </div>

            </div>
        </div>
    );
}

export default EventDetails;