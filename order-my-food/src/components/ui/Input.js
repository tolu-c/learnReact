function Input(props) {
  return (
    <div className="">
      <label htmlFor={props.input.id} className="">
        {props.label}
      </label>
      <input {...props.input} />
    </div>
  );
}

export default Input;
