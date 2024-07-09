import React from "react";
import Hero from "../Hero";
import AboutSection from "../Section/AboutSection";
import BrandsSection from "../Section/BrandsSection";
import Banner from "../Section/BannerSection";
import Section from "../Section";
import FeaturesSection from "../Section/FeaturesSection";
import TestimonialSection from "../Section/TestimonialSection";
import BlogSection from "../Section/BlogSection";
import AppointmentSection from "../Section/AppointmentSection";
import FaqSection from "../Section/FaqSection";
import AwardSection from "../Section/AwardSection";
import DepartmentSection from "../Section/DepartmentSection";
import { pageTitle } from "../../helpers/PageTitle";
const featureListData = [
  {
    iconSrc: "/images/home_1/compassion.svg",
    title: "Compassion",
    subTitle:
      "We understand that seeking legal advise can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our clients at ease.",
  },
  {
    iconSrc: "/images/home_1/excellence.svg",
    title: "Excellence",
    subTitle:
      "We are committed to providing excellent legal advise to our clients. We believe in continuously improving our skills, knowledge, and resources to ensure that we deliver the highest quality care possible.",
  },
  {
    iconSrc: "/images/home_1/integrity.svg",
    title: "Integrity",
    subTitle: `We believe in practicing legal services with integrity and honesty. We are transparent in our communication and decision-making processes, and we always put our client's interests first & provide best solution.`,
  },
  {
    iconSrc: "/images/home_1/respect.svg",
    title: "Respect",
    subTitle:
      "We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. We believe that every person deserves to be treated with compassion and kindness.",
  },
  {
    iconSrc: "/images/home_1/teamwork.svg",
    title: "Teamwork",
    subTitle:
      "We believe in working collaboratively with our team members and other legal professionals to provide comprehensive and effective solutions to our clients.",
  },
];
const brandData = [
  { imgUrl: "images/brand_1.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_2.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_3.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_4.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_5.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_6.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_7.png", imgAlt: "Brand" },
  { imgUrl: "images/brand_8.png", imgAlt: "Brand" },
];
const faqData = [
  {
    title: "What services does AmicusCue offer?",
    content:
      "We offer a comprehensive range of legal services, including criminal law, family law, public interest litigation (PIL), litigation, prosecution, tax law, labor law, and corporate law.",
  },
  {
    title: "How do I schedule an appointment with AmicusCue?",
    content:
      "Select the service you need, filter the available lawyers by available slots or experience and proceed to payment. Once payment is received the appointment would be successfully booked.",
  },
];
const blogData = [
  {
    title: "The Benefits of Mindfulness Meditation for Stress and Anxiety",
    thumbUrl: "images/home_1/post_1.jpeg",
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "Healthy Eating on a Budget: Tips and Strategies",
    thumbUrl: "images/home_1/post_2.jpeg",
    date: "May 4, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
  {
    title: "The Importance of Regular Cancer Screenings and Early Detection",
    thumbUrl: "images/home_1/post_3.jpeg",
    date: "May 1, 2023",
    btnText: "Learn More",
    href: "/blog/blog-details",
    socialShare: true,
  },
];
const awardData = [
  {
    title: "Malcolm Baldrige National Quality Award",
    subTitle:
      "This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "HIMSS Davies Award",
    subTitle:
      "This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Healthgrades National’s Best Hospital",
    subTitle:
      "This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.",
    iconUrl: "images/icons/award.svg",
  },
  {
    title: "Joint Commission Gold Seal of Approval",
    subTitle:
      "This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.",
    iconUrl: "images/icons/award.svg",
  },
];
const departmentData = [
  {
    title: "Criminal Law",
    iconUrl: "images/home_1/department_icon_1.svg",
    href: "/departments/department-details",
  },
  {
    title: "Family Law",
    iconUrl: "images/home_1/department_icon_2.svg",
    href: "/departments/department-details",
  },
  {
    title: "Labour Law",
    iconUrl: "images/home_1/department_icon_3.svg",
    href: "/departments/department-details",
  },
  {
    title: "Corporate Law",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
  {
    title: "Tax Lawyer",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
  {
    title: "Civil Litigation",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
  {
    title: "Consumer Protection",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
  {
    title: "Divorce",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
  {
    title: "Prosecutor",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
  {
    title: "Public Interest Lawyer",
    iconUrl: "images/home_1/department_icon_6.svg",
    href: "/departments/department-details",
  },
];

export default function Home() {
  pageTitle("Home");
  return (
    <>
      <Hero
        title="Expertise You Can Trust, Results You Deserve"
        subTitle="We are committed to provide you with the best legal services at your fingertips."
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="/images/home_1/hero-img-etrillium_.png"
        videoBtnText="See how we work Now under development"
        videoUrl="https://www.etrillium.in/"
        infoList={[
          {
            title: "Contact Us",
            subTitle: "+91 808952xxxx",
            iconUrl: "/images/contact/icon_1.svg",
          },
          {
            title: "Location",
            subTitle: "Malaparamba, Kozhikode",
            iconUrl: "/images/icons/pin.svg",
          },
        ]}
        btnText="Book Now"
        btnUrl="/login-page"
      />
      {/* Start Feature Section */}
      <Section topMd={185} topLg={150} topXl={110}>
        <DepartmentSection
          sectionTitle="Departments(Provide a good title)"
          bgUrl="images/home_1/department_bg.svg"
          data={departmentData}
        />
      </Section>
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section>
      {/* End Feature Section */}
      {/* Start About Section */}

      <Section>
        <AboutSection
          imgUrl="/images/home_1/about_.webp"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="AmicusCue"
          featureList={[
            {
              featureListTitle:
                "AmicusCue has a team of experienced legal professionals",
              featureListSubTitle:
                "Possessing a wealth of experience and a proven track record of success. We understand the challenges you face and are dedicated to providing strategic guidance and achieving the best possible outcome for your unique situation.",
            },
          ]}
        />
      </Section>
      {/* End About Section */}
      {/* Start Departments Section */}

      {/* End Departments Section */}
      {/* Start Award Section */}
      {/* <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="Departments" data={awardData} />
      </Section> */}
      {/* End Award Section */}
      {/* Start Testimonial */}
      {/* <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Some Reviews"
          sectionTitleDown="Of our clients"
        />
      </Section>   Testimonial section end*/}
      {/* End Testimonial */}
      {/* Start Banner Section */}
      {/* <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/lawyer.webp"
          title="Don't Let Legal Issues Stall Your Life. Get the Experienced Help You Need Today!"
          subTitle="Schedule an appointment with one of our experienced legal professionals today!"
        />
      </Section> */}
      {/* End Banner Section */}
      {/* Start Blog Section */}
      {/* <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section> */}
      {/* End Blog Section */}
      {/* Start Appointment Section */}
      {/* <Section topMd={150} topLg={145} topXl={10} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.webp"
        />
      </Section> */}
      {/* End Appointment Section */}
      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}
      {/* Start Brand Section */}
      <Section topMd={200}>{/* <BrandsSection data={brandData} /> */}</Section>
      {/* End Brand Section */}
    </>
  );
}
