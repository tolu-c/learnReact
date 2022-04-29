import { Fragment } from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import meals from "../../assets/meals.jpg";

function Header(props) {
  return (
    <Fragment>
      <header className="w-full flex justify-between items-center text-white bg-orange-600 px-12 py-3">
        <h1 className='text-2xl font-bold font-sans'>MyMeals</h1>
        <ShoppingCartIcon className="h-6 w-6" />
      </header>

      <div className="w-full">
        <img src={meals} alt="a table full of food" className='h-40 w-full object-cover object-center' />
      </div>
    </Fragment>
  );
}

export default Header;
