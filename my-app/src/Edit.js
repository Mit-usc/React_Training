import "./components/todo.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function Edit(props) {
  let params = useParams();
  let toDoId = params.id;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { id: toDoId, item: "" } });

  // Moves to-edit data to parent (App.js)
  const onSubmit = (data) => {
    props.editItem(data);
  };

  // Moves to-delete data to parent (App.js)
  const onSubmit2 = (data) => {
    props.deleteItem(data);
  };

  return (
    <div className="login-box2">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-box">
          <h2>Edit an item</h2>

          {/* include validation with required or other standard HTML validation rules */}

          <input
            defaultValue="Enter Index"
            {...register("id", { required: true })}
          />
        </div>
        <div className="user-box">
          <input
            defaultValue="Enter To-Do Item"
            {...register("item", { required: true })}
          />
        </div>
        <input type="submit" />
        <br></br>

        {/* errors will return when field validation fails  */}
        {errors.id && <span>This field is required</span>}
      </form>
      <br></br>
      <br></br>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
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
        <br></br>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
}

export default Edit;
