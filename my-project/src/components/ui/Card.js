export default function Card(props) {
  return (
    <div className="flex items-center justify-center my-10 bg-gray-100 container mx-auto p-3 py-6 border border-gray-400 shadow-lg shadow-gray-600/20 rounded-md">
      {props.children}
    </div>
  );
}
