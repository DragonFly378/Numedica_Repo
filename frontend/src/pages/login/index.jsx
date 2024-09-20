import Layout from "@/widget/Layout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import image from "../../../public/assets/images/login.png";
import { loginSchemas } from "../../components/Form/Schemas";
import Image from "next/image";
import Swal from "sweetalert2";
import CustomInput from "@/components/Form/CostumInput";
import Button from "@/components/Button";

const Index = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onSubmitHandler = async (values, actions) => {
    // getLogin(values);
    console.log(values);
    Swal.fire({
      title: "Success",
      text: "Yeay akun masuk !",
      icon: "success",
      confirmButtonText: "OK",
      timer: 1500,
      timerProgressBar: true,
    });
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  console.log(isChecked);

  return (
    <>
      <Head>
        <title>Numedica365 - Your healthcare space</title>
        <meta property="og:title" content="Numedica365" key="title" />
        <link rel="icon" type="image/png" href="/logoBrand.png" />
      </Head>
      <Layout>
        <section className="login w-11/12 mx-auto  md:my-[120px] mt-[150px] mb-[90px]">
          <div className="login-contents mx-auto grid grid-cols-12 items-center">
            <div className="left-content col-span-12 md:col-span-6 items-center mx-auto mb-14 md:mb-0 ">
              <div className="image w-64 md:w-96">
                <Image
                  src={image}
                  width={0}
                  alt="hero-img"
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
                {/* <img src={jumbotron_image} alt="image jumbotron" /> */}
              </div>
            </div>{" "}
            <div className="right-content col-span-12 w-11/12 md:w-10/12 md:col-span-6 items-center mx-auto mb-14 md:mb-0 ">
              <div className="header-login md:mb-5 mb-2 w-full md:w-3/4 mx-auto text-center ">
                <h3 className="md:text-3xl text-lg text-primary-dark font-bold">
                  Fácil y también cuidamos tu economía Visita médica virtual
                </h3>
                <p className="text-primary-dark md:text-lg text-base mt-2">
                  Regístrate en Numédica35 Nombre de usuario Contraseña
                </p>
              </div>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={loginSchemas}
                onSubmit={onSubmitHandler}
                enableReinitialize={true}
              >
                {(props) => (
                  <Form>
                    <div className="form-item flex flex-col md:gap-y-2 text-primary mb-3 md:mb-4">
                      <CustomInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Silahkan masukkan email..."
                        classLabel="font-medium pl-3 md:text-xl text-md"
                        classInput="rounded-md bg-light text-sm md:text-base px-3 py-3 md:px-5 md:py-3"
                      />
                    </div>
                    <div className="form-item flex flex-col md:gap-y-2 text-primary mb-3 md:mb-4">
                      <CustomInput
                        autocomplete="new-password"
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Silahkan masukkan password..."
                        classLabel="font-medium pl-3 md:text-xl text-md"
                        classInput="rounded-md bg-light text-sm md:text-base px-3 py-3 md:px-5 md:py-3"
                      />
                    </div>
                    {/* <button
                      type="submit"
                      className="btn-submit w-full text-center bg-primary rounded py-1 text-white"
                    >
                      {" "}
                      Submit{" "}
                    </button> */}
                    <div className="agreement-check flex">
                      <input
                        type="checkbox"
                        className="checkbox-area"
                        id="agreement"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        name="agreement"
                      />
                      <label
                        for="agreement"
                        className="label-checkbox pl-2 text-primary-dark md:text-sm text-xs"
                      >
                        Al continuar, confirma que eres mayor de 18 años de edad
                        y da tu consentimiento a NuMédica365 a los Términos y
                        condiciones y a la Política de privacidad.
                      </label>
                    </div>
                    <Button
                      btnType={"submit"}
                      isDisabled={!isChecked}
                      href={"/"}
                      text={"Registrarme"}
                      // icon={isOpen === true ? closeIcon : hamburgerIcon}
                      style={`btn-submit flex justify-center mt-3 py-2 w-full text-center ${
                        isChecked ? "bg-primary" : "bg-page-bg-300"
                      }  rounded py-1 text-white`}
                    />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      </Layout>{" "}
    </>
  );
};

export default Index;
