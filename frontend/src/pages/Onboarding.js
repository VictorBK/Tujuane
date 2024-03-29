import React from 'react';
/* import { useState } from 'react'; */
import Nav from "../components/Nav";

const Onboarding = () => {
  return (
    <>
        <Nav
            minimal={true}
            setShowModal={() => {}}
            showModal={false}     
        />
        <div className='onboarding'>
          <h2>Create Account</h2>

          <form onSubmit={handleSubmit}>
            <section>
              <label htmlFor="first_name">First Name</label>
              <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required={true}
                  value={""}
                  onChange={handleChange}              
              />

              <label>Birthday</label>
              <div className='multiple-input-container'>
              <input
                  id="dob_day"
                  type="number"
                  name="dob_day"
                  placeholder="DD"
                  required={true}
                  value={""}
                  onChange={handleChange}              
              />
              <input
                  id="dob_month"
                  type="number"
                  name="dob_month"
                  placeholder="MM"
                  required={true}
                  value={""}
                  onChange={handleChange}
              />

              <input
                  id="dob_year"
                  type="number"
                  name="dob_year"
                  placeholder="YYYY"
                  required={true}
                  value={""}
                  onChange={handleChange}
              />
              </div>

              <label>Gender</label>
              <div className="multiple-input-container">
              <input
                  id="man-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="man"
                  onChange={handleChange}
                  checked={false}
              />
              <label htmlFor='woman-gender-identity'>Woman</label>
              <input
                  id="woman-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="woman"
                  onChange={handleChange}
                  checked={false}
              />

              <label htmlFor='more-gender-identity'>More</label>
              <input
                  id="more-gender-identity"
                  type="radio"
                  name="gender_identity"
                  value="more"
                  onChange={handleChange}
                  checked={false}
              />
              </div>              
            </section>

          </form>

        </div>
    </>
  )
}

export default Onboarding
