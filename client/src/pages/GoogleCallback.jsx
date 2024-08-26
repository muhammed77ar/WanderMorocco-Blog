// src/GoogleCallback.js

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login, setUserInfo } from '../redux/slices/authSlice';
import axiosClient from '../axios/axios';


function GoogleCallback() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const navigate = useNavigate()
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get(`/api/auth/google/callback${location.search}`);
                setData(response.data);
                setLoading(false);

                // Save token and user info to Redux store
                dispatch(login({
                    token: response.data.access_token,
                    role: response.data.user.role
                }));
                dispatch(setUserInfo(response.data.user));

                // Optionally, redirect to another page or handle post-authentication logic here

            } catch (error) {
                if (error.response && error.response.data && error.response.data.error) {
                    // Backend validation errors
                    console.log(error.response.data.error);
                  } else {
                    // Other errors
                    console.log(error);
                  }
                
            }finally{
                setLoading(false);
                navigate('/');
            }
        };

        fetchData();
    }, [location.search, dispatch, navigate]);

    const fetchUserData = async () => {
        try {
            const response = await axiosClient.get('/api/user');
            // Save user data to Redux store
            dispatch(setUserInfo(response.data));
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchUserData();
        }
    }, [isAuthenticated, dispatch]);
    

    if (loading) {
        return <>
            <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
                <div
                    className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                >
                    <div
                        className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                    ></div>
                </div>
            </div>
        </>;
    }
}

export default GoogleCallback;
