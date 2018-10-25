import React from 'react';
import axios from 'axios';
import { LOAD_PHOTOS_COMPLETE } from './actionTypes';

const BASE_URL = 'https://api.unsplash.com/photos/';
const API_KEY = "476b2e5e4c0b0df9d1afd07d219196cbdfd76bf11462bbfbc92e6089deeb6973";


export const loadPhotos = () => ((dispatch, getState) => {
    const { page } = getState().pagination
    const url = `${BASE_URL}?client_id=${API_KEY}&page=${page}`;
    console.log(url);
    axios.get(url)
        .then(res => {
            dispatch(
                {
                    type: LOAD_PHOTOS_COMPLETE,
                    photos: res.data
                }
            )
        });
});

export const loadMoreItems = () => {

}