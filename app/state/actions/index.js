import React from 'react';
import axios from 'axios';
import { LOAD_PHOTOS_COMPLETE } from './actionTypes';

export const loadPhotos = () => {
    return (dispatch) => {
        axios.get('https://api.unsplash.com/photos/?client_id=476b2e5e4c0b0df9d1afd07d219196cbdfd76bf11462bbfbc92e6089deeb6973')
            .then(res => {
                dispatch(
                    {
                        type: LOAD_PHOTOS_COMPLETE,
                        photos: res.data
                    }
                )
            });
    };
};