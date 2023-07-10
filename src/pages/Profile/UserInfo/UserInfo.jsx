import React from "react";
import "./UserInfo.scss";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import Edit from "../../../assets/edit.svg";
import { useForm } from "react-hook-form";
import { updateUser } from "../../../store/actions/login";
// import PhoneInput from "react-phone-number-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { commerce } from "../../../commerce";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const schema = z.object({
  firstname: z.string().min(3),
  lastname: z.string().min(4),
  email: z.string().email(),
});
const UserInfo = () => {
  const {
    register,
    handleSubmit,
    pattern,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    commerce.customer.about().then((customer) => setUser(customer));
  }, []);
  const notifyMe = () => {
    toast.success("Məlumat dəyişdi");
  };

  const onSubmit = (data) => {
    updateUser(data, user.id);
    notifyMe();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="userInfo">
      <h1>Şəxsi məlumatlar</h1>
      <div className="infos">
        <div className="inputGroup">
          <label htmlFor="firstname">Ad</label>
          <input
            defaultValue={user.firstname}
            type="text"
            {...register("firstname")}
            placeholder="Kenan"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="lastname">Soyad</label>
          <input
            defaultValue={user.lastname}
            type="text"
            {...register("lastname")}
            placeholder="Ramazanov"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">E-mail</label>
          <input
            defaultValue={user.email}
            type="text"
            {...register("email")}
            placeholder="kenan.kenan@gmail.com"
          />
          {errors.email && <span>Yanlış email</span>}
        </div>
        <div className="inputGroup">
          <label>Mobil nömrə</label>
          <input
            type="text"
            // {...register("phone")}
            placeholder="055-55-55-55"
          />
        </div>

        <Button img={Edit} btn={"Məlumatları yenilə"} />
      </div>
      <ToastContainer />
    </form>
  );
};

export default UserInfo;
