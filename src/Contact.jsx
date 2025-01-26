import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import FadeContent from './FadeContent ';
import confetti from "canvas-confetti";

const Contact = () => {
    const validate = useFormik({
        initialValues: {
            name: '',
            email: '',
            textmessage: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().trim().min(4, 'Name must be atleast 4 characters').max(15, 'Name cannot exceed 15 characters').required('Please Enter your Name!'),
            email: Yup.string().trim().email('Enter proper E-mail format!').required('Please Enter your Email!'),
            textmessage: Yup.string().min(6,'Mininum 6 characters!').required('This field is required!'),
        }),
        onSubmit: (values,{ resetForm }) => {
            toast.success('Thanks for your Response!',{position:'top-center'})
            resetForm();
            localStorage.setItem('Responses',JSON.stringify(values))
        },
    
    });
    const confetties=()=>{
        confetti(
          {
            particleCount:200,
            spread:50
          }
        )
      }
    return (
        <div>
             <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>

           
            <div className="container-fluid p-4 d-flex justify-content-center pt-2" style={{ minHeight: '100vh',backgroundColor:'green' }}>
                <div className="row w-100" onClick={confetties}>
                    <div className="col-12 col-md-12 col-sm-12 col-lg-12" >
                        <form className="card p-4  mt-2 fw-bold" style={{boxShadow:' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',color:'black'}} onSubmit={validate.handleSubmit}>
                    <h3 className='fw-bold fs-3 '>Share your Thoughts! </h3>
                           
                            <label htmlFor="Text"> Name*
                                <input  type="text"  name="name"  className="form-control p-2"  id="Text"  onChange={validate.handleChange}  onBlur={validate.handleBlur}  value={validate.values.name}
                                />
                                 {validate.errors.name && validate.touched.name && (
                                <span className="text-danger fw-bold">{validate.errors.name}</span>
                            )}
                            </label><br />
                           


                            <label htmlFor="email">E-mail*
                                <input type="email" name="email" className="form-control p-2" id="email" onChange={validate.handleChange} onBlur={validate.handleBlur} value={validate.values.email}
                                />
                            {validate.errors.email && validate.touched.email && (
                                <span className="text-danger fw-bold">{validate.errors.email}</span>
                            )}
                            </label><br />

                            
                            <label htmlFor="textarea">Your message* <br />
                                <textarea
                                    name="textmessage" id="textarea" rows={5} cols={50} className="form-control p-2" onChange={validate.handleChange}
                                    
                                    value={validate.values.textmessage}
                                ></textarea>
                            {validate.errors.textmessage && validate.touched.textmessage && (
                                <span className="text-danger fw-bold">{validate.errors.textmessage}</span>
                            )}
                            </label>

                            <button className="btn  mx-auto mt-3" type="submit" style={{backgroundColor:'black',color:'white'}}>Submit</button>
                        </form>
                         <footer className='text-center mt-5'>
                            <p>&copy; 2025 JAYA SURYA N. All rights reserved. <br />
                           <span><i href='https://www.linkedin.com/in/jayasurya7200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='bi bi-linkedin me-2 fs-4 text-white'></i></span> 
                            <span><i href='https://github.com/jayasuryajayasurya?tab=repositories'className='bi bi-github text-white fs-4'></i></span> <br />
                            Designed By Jayasurya N.</p>
                         </footer>
                    </div>
                </div>
            </div>
            </FadeContent>

        </div>
    );
};

export default Contact;
