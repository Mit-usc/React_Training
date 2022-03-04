import "./todo.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function Delete(props) {
  let params = useParams();
  let toDoId = params.id;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { id: toDoId, item: "" } });

  // Moves to-delete data to parent (App.js)
  const onSubmit2 = (data) => {
    props.deleteItem(data);
  };

  return (
    <div className="login-box3">
      <form onSubmit={handleSubmit(onSubmit2)}>
        <div className="user-box">
          <h2>Delete an item</h2>

          {/* include validation with required or other standard HTML validation rules */}
          <input
            defaultValue="Enter Index"
            {...register("id2", { required: true })}
          />
        </div>
        <input type="submit" />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
}

export default Delete;
