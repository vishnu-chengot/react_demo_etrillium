// src/components/Pages/UserDashboard.jsx
import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import BannerSectionStyle11 from '../Section/BannerSection/BannerSectionStyle11';
// import './UserDashboard.css'; // Add this CSS file for styling
import ContactForm from '../ContactForm';

const UserDashboard = () => {
  return (
    <div>
        <BannerSectionStyle11
        bgUrl="/images/contact/banner_bg.svg"
        title="User Dashboard"
        subTitle="Kindly reach us to get the fastest response and treatment"
      />
      <div className="container cs_mt_minus_110">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <SearchBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

