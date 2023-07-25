import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/user/userSlice";
import {FiEdit} from 'react-icons/fi';
const ProfileSchema = yup.object({
  firstname: yup.string().required("First Name Required!"),
  lastname: yup.string().required("Last Name Required!"),
  email: yup.string().email("Invalid email").required("Email Required"),
  mobile: yup.number().required("Mobile Number Required!"),
});
const Profile = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state=>state.auth.user)
    const [edit,setEdit]=useState(true)

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
          firstname:userState?.firstname,
          lastname:userState?.lastname,
          email: userState?.email,
          mobile:userState?.mobile,
      },
      validationSchema:ProfileSchema,
      onSubmit:values=>{
        dispatch(updateProfile(values));
        setEdit(true)
      },
    });
  return (
    <>
      <BreadCrumb title="My Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="my-3">Update Profile</h3>
                    <FiEdit className="fs-3"
                    onClick={()=>setEdit(false)}/>
                </div>
            </div>
          <div className="col-12">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="example1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  id="example1"
                  value={formik.values.firstname}
                  onChange={formik.handleChange('firstname')}
                  onBlur={formik.handleBlur('firstname')}
                  disabled={edit}
                />
                <div className="error">
                    {formik.touched.firstname && formik.errors.firstname}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="example2" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  id="example2"
                  value={formik.values.lastname}
                  onChange={formik.handleChange('lastname')}
                  onBlur={formik.handleBlur('lastname')}
                  disabled={edit}
                />
                <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="example3" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="example3"
                  value={formik.values.email}
                  onChange={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                  disabled={edit}
                />
                <div className="error">
                    {formik.touched.email && formik.errors.email}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="example4" className="form-label">
                  Mobile No
                </label>
                <input
                  type="number"
                  name="mobile"
                  className="form-control"
                  id="example4"
                  value={formik.values.mobile}
                  onChange={formik.handleChange('mobile')}
                  onBlur={formik.handleBlur('mobile')}
                  disabled={edit}
                />
                <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                </div>
              </div>
              {
                edit ===false && <button type="submit" className="btn btn-primary">
                Submit
              </button>
              }
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
