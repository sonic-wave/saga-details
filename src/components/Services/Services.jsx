import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { searchServicesRequest } from '../../actions/actionCreators';
import Loader from '../Loader/Loader';
import './Services.css'


export const Services = () => {
    const { items, loading, error } = useSelector(
        (state) => state.services
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickHandler = (service) => {
        navigate(`/${service.id}/details`, { state: { service } })
        dispatch(searchServicesRequest(service.id))
    }

    const retryHandler = () => {
        dispatch(searchServicesRequest(''));
    }


    return (
        <div className='services-container'>
            {loading && <Loader />}
            {error ? (
                <div className='error-container'>
                    <div>Произошла ошибка!</div>
                    <button className='errorBtn' onClick={retryHandler}>Повторить запрос</button>
                </div>
            ) : (
                <div className='services-container'>
                    {items.map((o) => (
                        <div className='service-component' key={o.id} onClick={() => onClickHandler(o)}>
                            <p className='service-name'><strong>Услуга:</strong> {o.name}</p>
                            <p className='service-price'><strong>Цена:</strong> {o.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
