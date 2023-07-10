import React, { useState } from "react";
import "./Register.scss";
import WithSocial from "../Login/WithSocial/WithSocial";
// import Input from "../../components/Input/Input";
import LoginImage from "../Login/LoginImage/LoginImage";
import Button from "../../components/Button/Button";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../store/actions/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  firstname: z.string().min(3),
  lastname: z.string().min(4),
  email: z.string().email(),
});

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = ({ firstname, lastname, email }) => {
    navigate("/login");
    userRegister({
      firstname,
      lastname,
      email,
    });
  };

  const [value, setValue] = useState();
  return (
    <div className="container register">
      <div className="register-content">
        <h3>Qeydiyyat</h3>
        <WithSocial />
        <span className="or">və ya</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputGroup">
            <label htmlFor="">Ad</label>
            <input
              type="text"
              {...register("firstname")}
              placeholder="Adınızı daxil edin"
            />

            <label htmlFor="">Soyad</label>
            <input
              type="text"
              {...register("lastname")}
              placeholder="Soyadınızı daxil edin"
            />

            <label htmlFor="">E-mail</label>
            <input
              type="text"
              {...register("email")}
              placeholder="nümunə@gmail.com"
            />
            {errors.email && <span>Yanlış email</span>}
          </div>
          <PhoneInput
            placeholder="+994-55-555-55-55"
            value={value}
            onChange={setValue}
            name={"Mobil nömrə"}
            defaultCountry="AZ"
          />

          <Button btn={"Qeydiyyat"} />
        </form>
      </div>
      <LoginImage
        question={"Artıq hesabınız var? "}
        page={"/login"}
        message={"Daxil olun "}
      />
    </div>
  );
};

export default Register;

{
  /* <Input
            placeholder={"Ad və soyadınızı daxil edin"}
            type={"text"}
            name={"firstname"}
            register={register("firstname")}
            // pattern={pattern}
            errors={errors.firstname}
            label={"Ad Soyad"}
            validation={{
              pattern: {
                value: /^[a-zA-Z]+ [a-zA-Z]+$/,
              },
            }}
          /> */
}
{
  /* <Input
            placeholder={"nümunə@gmail.com"}
            type={"email"}
            name={"email"}
            register={register("email")}
            // pattern={pattern}
            errors={errors.email}
            label={"e-mail"}
            // validation={{
            //   pattern: {
            //     value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            //   },
            // }}
          /> */
}
{
  /* <PhoneInput
            placeholder="00-000-0000"
            value={value}
            onChange={setValue}
            name={"Mobil nömrə"}
            defaultCountry="AZ"
          /> */
}
