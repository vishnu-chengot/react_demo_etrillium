import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <form action="#" className="row">
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Name</label>
        <input type="text" className="cs_form_field" placeholder="Jitesh Singh" />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">Phone Number</label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="+91 1234567890"
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      {/* <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">
          Medical Record Number
        </label>
        <input
          type="text"
          className="cs_form_field"
          placeholder="123456-7890-0987"
        />
        <div className="cs_height_42 cs_height_xl_25" />
      </div> */}
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">
          Preferred Date
        </label>

        <div className="cs_with_icon_input">
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            isClearable
            placeholderText="dd/mm/yyyy"
          />
          <i>
            <Icon icon="fa6-solid:calendar-days" />
          </i>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-6">
        <label className="cs_input_label cs_heading_color">
          Preferred Time
        </label>
        <div className="cs_with_icon_input">
          <input
            type=""
            className="cs_form_field cs_timepicker"
            placeholder="10:00 AM"
          />
          <i>
            <Icon icon="fa6-regular:clock" />
          </i>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      {/* <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">
          Reason for Visit
        </label>
        <div className="cs_radio_group">
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="reasonForVisit"
              id="routineCheckup"
              defaultValue="routineCheckup"
            />
            <label className="cs_radio_label" htmlFor="routineCheckup">
              Routine Checkup
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="reasonForVisit"
              id="newPatientVisit"
              defaultValue="newPatientVisit"
              defaultChecked=""
            />
            <label className="cs_radio_label" htmlFor="newPatientVisit">
              New Patient Visit
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="reasonForVisit"
              id="specificConcern"
              defaultValue="specificConcern"
            />
            <label className="cs_radio_label" htmlFor="specificConcern">
              Specific Concern
            </label>
          </div>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div> */}
      <div className="col-lg-12">
        <label className="cs_input_label cs_heading_color">Department</label>
        <div className="cs_radio_group">
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="civil-litigation"
              defaultValue="pediatric"
            />
            <label className="cs_radio_label" htmlFor="pediatric">
              Civil Litigation
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="tax-lawyer"
              defaultValue="obstetricsGynecology"
              defaultChecked=""
            />
            <label className="cs_radio_label" htmlFor="obstetricsGynecology">
              Tax Lawyer
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="consumer-protection"
              defaultValue="cardiology"
            />
            <label className="cs_radio_label" htmlFor="cardiology">
              Consumer Protection
            </label>
          </div>
          <div className="cs_radio_wrap">
            <input
              className="cs_radio_input"
              type="radio"
              name="department"
              id="pil"
              defaultValue="neurology"
            />
            <label className="cs_radio_label" htmlFor="neurology">
              Public Interest Lawyer
            </label>
          </div>
        </div>
        <div className="cs_height_42 cs_height_xl_25" />
      </div>
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1">
          <span>Submit</span>
          <i>
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
            <img src="/images/icons/arrow_white.svg" alt="Icon" />
          </i>
        </button>
      </div>
    </form>
  );
}
