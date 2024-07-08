import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import { searchServicesRequest } from '../../actions/actionCreators';
import './ServiceDetails.css'

export const ServiceDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { loading, error } = useSelector(
        (state) => state.services
    );
    const { service } = location.state || {};


    const handleGoBack = () => {
        navigate('/');
    };

    const retryHandler = () => {
        dispatch(searchServicesRequest(service.id));
    }


    return (
        <div className='service-details-container'>
            {loading && <Loader />}
            {error ? (
                <div className='error-container'>
                    <div>Произошла ошибка!</div>
                    <button className='errorBtn' onClick={retryHandler}>Повторить запрос</button>
                </div>
            ) : (
                <div className='service-details-component'>
                    <button className="service-backBtn" onClick={handleGoBack}>
                        Go back
                    </button>
                    <p className='service-name'><strong>Услуга:</strong> {service.name}</p>
                    <p className='service-price'><strong>Цена:</strong> {service.price}</p>
                </div>
            )}
        </div>
    )
}
