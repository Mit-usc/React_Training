import "./App.css";
import { useForm } from "react-hook-form";

function Edit(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Moves to-edit data to parent (App.js)
  const onSubmit = (data) => {
    props.editItem(data);
  };

  // Moves to-delete data to parent (App.js)
  const onSubmit2 = (data) => {
    props.deleteItem(data);
  };

  return (
    <div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Edit an item</h1>

        {/* include validation with required or other standard HTML validation rules */}
        <input
          defaultValue="Enter Index"
          {...register("id", { required: true })}
        />
        <input
          defaultValue="Enter To-Do Item"
          {...register("item", { required: true })}
        />
        <input type="submit" />
        <br></br>

        {/* errors will return when field validation fails  */}
        {errors.id && <span>This field is required</span>}
      </form>

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit2)}>
        <h1>Delete an item</h1>

        {/* include validation with required or other standard HTML validation rules */}
        <input
          defaultValue="Enter Index"
          {...register("id2", { required: true })}
        />
        <input type="submit" />
        <br></br>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
}

export default Edit;
