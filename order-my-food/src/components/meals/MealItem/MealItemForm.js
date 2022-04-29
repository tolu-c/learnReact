import Input from "../../ui/Input";

function MealItemForm(props) {
  return (
    <form className="">
      <Input label='Amount' input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button>add</button>
    </form>
  );
}

export default MealItemForm;
