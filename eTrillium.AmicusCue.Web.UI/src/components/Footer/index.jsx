import React from 'react';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import Newsletter from '../Widget/Newsletter';
import TextWidget from '../Widget/TextWidget';
const menuDataOne = [
  { title: 'About Us', href: '/about' },
  { title: 'Departments', href: '/departments' },
  { title: 'Lawyers', href: '/doctors' },
  { title: 'Timetable', href: '/timetable' },
  { title: 'Appointment', href: '/appointments' },
  { title: 'Testimonials', href: '/' },
];
const menuDataTwo = [
  { title: 'Blog', href: '/blog' },
  { title: 'Contact Us', href: '/contact' },
  { title: 'FAQs', href: '/' },
  { title: 'Privacy Policy', href: '/' },
  { title: 'Terms and Conditions', href: '/' },
];

export default function Footer() {
  return (
    <footer className="cs_footer cs_style_1 cs_heading_color">
      <div
        className="cs_footer_logo_wrap"
        style={{ backgroundImage: 'url(/images/footer_bg_1.svg)' }}
      >
        <div
          className="cs_footer_brand"
          // style={{ backgroundImage: 'url(/images/footer_logo_bg.svg)' }}
          style={{ backgroundImage: 'url(/images/footer_logo_just.svg)' }}
        >
          {/* <img
            src="/images/logo_icon.svg"
            alt="Logo Icon"
            className="cs_footer_brand_icon"
          /> */}
          {/* <h2 className="cs_footer_brand_text">ProHealth</h2> */}
        </div>
      </div>
      <div className="cs_footer_main">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <TextWidget text="<h3>AmicusCue</h3> Your Legal Buddy" />
                <ContactInfoWidget />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataOne} />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="cs_footer_item">
                <MenuWidget data={menuDataTwo} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_footer_item">
                <p>---Newsletter here---</p>
                {/* <Newsletter
                  title="Be Our Subscribers"
                  subTitle="To get the latest news about health from our experts"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_accent_bg">
        <div className="container">
          <div className="cs_footer_bottom_in">
            <SocialWidget />
            <div className="cs_copyright">
              Copyright © 2024 AmicusCue. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
