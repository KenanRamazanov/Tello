import React from "react";
import WithSocial from "./WithSocial/WithSocial.jsx";
import "./Login.scss";
import Button from "../../components/Button/Button.jsx";
import LoginImage from "./LoginImage/LoginImage.jsx";
import { useForm } from "react-hook-form";
import LoginMessage from "./LoginMessage/LoginMessage.jsx";
import { userLogin } from "../../store/actions/login.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const schema = z.object({
  email: z.string().email(),
});
const Login = () => {
  const [loginMessage, setLoginMessage] = React.useState(false);
  const baseUrl = window.location.origin;
  const {
    register,
    handleSubmit,
    pattern,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = ({ email }) => {
    userLogin({ email, baseUrl });
    setLoginMessage(true);
  };

  return (
    <div>
      {loginMessage ? (
        <LoginMessage />
      ) : (
        <div className="login container">
          <div className="login-form">
            <h3>Daxil ol</h3>
            <WithSocial />
            <span className="or">və ya</span>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <Input
                placeholder={"nümunə@gmail.com"}
                name={"E-mail"}
                register={register}
                errors={errors}
                label={"e-mail"}
                validation={{
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  },
                }}
              /> */}
              <div className="inputGroup">
                <label htmlFor="">E-mail</label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="nümunə@gmail.com"
                />
                {errors.email && <span>Yanlış Ad</span>}
              </div>

              <Button btn={"Daxil ol"} />
            </form>
          </div>
          <LoginImage
            question={"Hesabınız yoxdur? "}
            page={"/register"}
            message={"Qeydiyyatdan keçin"}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
