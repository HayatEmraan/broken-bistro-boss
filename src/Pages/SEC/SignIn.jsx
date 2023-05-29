import React, { useContext, useEffect, useState } from "react";
import authentication from "../../assets/others/authentication2.png";
import { set, useForm } from "react-hook-form";
import { layerContext } from "../../Context/AuthContext";
import "./authentication.css";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link } from "react-router-dom";
const SignIn = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const { user, login, googleProvider, twitterProvider } =
    useContext(layerContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (e) => {
    login(e.email, e.password)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  const googleHandleer = () => {
    googleProvider()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  const twitterHandler = () => {
    twitterProvider()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  const [disable, setDisable] = useState(true);

  const handleCaptcha = (e) => {
    const captchaField = e.target.value;
    console.log(captchaField);
    if (validateCaptcha(captchaField) === true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div className="flex flex-row-reverse justify-around items-center p-12 authentication">
      <div className="w-1/3">
        <h2 className="font-inter font-bold text-4xl text-center mb-10">
          SignIn
        </h2>
        <form
          onSubmit={handleSubmit((data) => handleForm(data))}
          className="space-y-6"
        >
          <div>
            <label htmlFor="">Email</label>
            <input
              className="border bg-white text-black block w-full px-4 py-2 rounded-md "
              placeholder="Type here"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              className="border bg-white text-black block w-full px-4 py-2 rounded-md "
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
          </div>
          <LoadCanvasTemplate />
          <input
            className="border bg-white text-black block w-full px-4 py-2 rounded-md "
            placeholder="Enter Captcha" onBlur={handleCaptcha}
            name="captcha" required
          />
          {errors.lastName && <p>Last name is required.</p>}
          {errors.age && <p>Please enter number for age.</p>}
          <input
            className="btn border-0 w-full text-center text-white bg-[#d1a054]"
            type="submit"
            value="Sign In" disabled={disable && disable}
          />
        </form>
        <div>
          <p className="text-center my-4">
            New here?{" "}
            <Link to="/signup" className="text-[#d1a054]">Create a New Account</Link>
          </p>
        </div>
        <div className="divider">Or sign in with</div>
        <div className="flex gap-4 justify-center">
          <div
            onClick={googleHandleer}
            className="text-2xl bg-[#F1F2F4] p-1 border bottom-3 border-black rounded-full cursor-pointer"
          >
            <FaGoogle />
          </div>
          <div
            onClick={twitterHandler}
            className="text-2xl bg-[#F1F2F4] p-1 border bottom-3 border-black rounded-full cursor-pointer"
          >
            <FaTwitter />
          </div>
          <div className="text-2xl bg-[#F1F2F4] p-1 border bottom-3 border-black rounded-full">
            <FaGithub />
          </div>
        </div>
      </div>
      <div>
        <img className="" src={authentication} alt="" />
      </div>
    </div>
  );
};

export default SignIn;
