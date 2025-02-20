"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validationSchema from "../../validation-schema/contactSchema";
import { toast } from "react-toastify";
import Fade from "../animation/Fade";
import { merriweather } from "../../lib/utils";
import Title from "../landingpage/Title";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMarkEmailRead, MdOutlinePhone } from "react-icons/md";
import Breadcrumb from "../breadcum/Breadcum";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
    toast.success("Form submitted successfully !");
  };
  return (
    <div className="flex flex-col justify-center items-center py-14 md:py-20 lg:py-24 h-auto bg-gray-100">
      <Breadcrumb />
      <Title title="Get in touch with Gimmy Juice Shop!" />
      <Fade direction="right" delay={0.2}>
        <p
          className={`${merriweather.className} w-10/12 md:w-7/12 lg:w-6/12 mx-auto mb-10 md:mb-12 text-xl text-center`}
        >
          Fill out our contact form for any inquiries, feedback, or assistance.
          We're here to help and look forward to hearing from you.
        </p>
      </Fade>
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-2">
            <div className="h-[86px]">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                name="name"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="h-[86px]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="h-[146px]">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="mt-20 md:mt-28 lg:mt-32 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-500">
        <Fade direction="right" delay={0.2}>
          <div className="w-[340px] h-[260px] bg-[#f0bbc9] text-center flex flex-col justify-center items-center rounded-lg">
            <div className="bg-[#f46f93] mb-8 p-5 rounded-full">
              <SlLocationPin className="mx-auto text-3xl text-white " />
            </div>
            <h1 className="text-xl">Location</h1>
            <h2>Arjundhara-5, Jhapa</h2>
            <h3>Nepal</h3>
          </div>
        </Fade>
        <Fade direction="down" delay={0.2}>
          <div className="w-[340px] h-[260px] text-center bg-[#e6d2aa] flex flex-col justify-center items-center rounded-lg">
            <div className="bg-[#cdbc9e] mb-14 p-5 rounded-full">
              <MdOutlineMarkEmailRead className="mx-auto text-3xl text-white" />
            </div>
            <h1 className="text-xl">Email us</h1>
            <h2>shambhavibeversges@gmail.com</h2>{" "}
          </div>
        </Fade>
        <Fade direction="left" delay={0.2}>
          <div className="w-[340px] h-[260px] text-center bg-[#c6de9e] flex flex-col justify-center items-center rounded-lg">
            <div className="bg-[#bee77f] mb-8 p-5 rounded-full">
              <MdOutlinePhone className="mx-auto text-3xl text-white" />
            </div>
            <h1 className="text-xl">Call us</h1>
            <h2>KTM Valley: 9801444928</h2>
            <h2>Eastern Nepal: 9801444914</h2>
            <h2>Western Nepal: 9857832096</h2>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
