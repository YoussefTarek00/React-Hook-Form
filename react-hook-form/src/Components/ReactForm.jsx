import bgimg from "../assets/image/img1.jpg";
import { useForm } from "react-hook-form";

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("username"));
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>register and enjoy the service</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username", { required: true, minLength: 3 })}
              placeholder="username"
            />
            {errors.username?.type === "required" && "User Name is required"}
            {errors.username?.type === "minLength" && "Min Length 3"}

            <input
              type="text"
              {...register("password", { required: true, minLength: 5 })}
              placeholder="password"
            />
            {errors.password?.type === "required" && "Password  is required"}
            {errors.username?.type === "minLength" && "Min Length 5"}

            <input
              type="text"
              {...register("confirm password", {
                required: true,
                minLength: 5,
              })}
              placeholder="confirm password"
            />
            {errors.confirmpassword?.type === "required" &&
              "Confirm Password is required"}
            {errors.username?.type === "minLength" && "Min Length 5"}

            <input
              type="text"
              {...register("mobile number", { required: true, minLength: 11 })}
              placeholder="mobile number"
            />
            {errors.mobilenumber?.type === "required" &&
              "Mobile Number is required"}
            {errors.username?.type === "minLength" && "Min Length 11"}

            <button className="btn">Sign In</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgimg} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default ReactForm;
