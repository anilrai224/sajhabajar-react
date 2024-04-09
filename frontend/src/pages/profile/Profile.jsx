import React from 'react';
import './Profile.scss';
import {useDispatch, useSelector} from 'react-redux'
import {setLoginStatus} from '../../redux/LoginStatusSlice'
import { useNavigate } from 'react-router-dom';
import { setUserDetail } from '../../redux/userDetailSlice';

const Profile = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector(state=>state.userDetail)
  
  const handleLogout=()=>{
    dispatch(setLoginStatus(false))
    dispatch(setUserDetail({}))
    localStorage.clear();
    navigate('/')
  }
  return (
    <div className="profile-container">
      <h2>Profile Details</h2>
      <div className="profile-info">
        <div className="info-item">
          <span className="label">Name:</span>
          <span>{user.name}</span>
        </div>
        <div className="info-item">
          <span className="label">Email:</span>
          <span>{user.email}</span>
        </div>
        <div className="info-item">
          <span className="label">Account Created At:</span>
          <span>{user.createdAt}</span>
        </div>
        <div className="info-item">
          <span className="label">Last Updated At:</span>
          <span>{user.updatedAt}</span>
        </div>
      </div>
      <button className='logout' onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default Profile;
