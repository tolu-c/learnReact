export default function Button(props) {
  return (
    <button
      className="w-full bg-black text-white capitalize py-3 text-lg font-medium flex items-center justify-center"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
