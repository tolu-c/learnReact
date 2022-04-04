import Button from "./Button";
import Card from "./Card";

export default function ErrorModal(props) {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full h-screen z-10 bg-black/75"
        onClick={props.onConfirm}
      />
      <div className="fixed top-[30vh] left-[10%] w-5/6 z-50 overflow-hidden">
        <Card>
          <div className="flex flex-col gap-4 border w-full text-left">
            <header className="bg-black p-1 px-2">
              <h2 className="text-white capitalize text-xl">{props.title}</h2>
            </header>
            <div className="p-2">
              <p className="text-base text-gray-600 first-letter:uppercase">
                {props.message}
              </p>
            </div>
            <footer>
              <Button onClick={props.onConfirm}>close</Button>
            </footer>
          </div>
        </Card>
      </div>
    </div>
  );
}
