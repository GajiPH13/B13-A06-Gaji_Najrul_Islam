// import { IoAccessibilitySharp } from "react-icons/io5";
// import { toast, ToastContainer } from 'react-toastify'
import { Suspense } from "react";
import "./App.css";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import NavBar from "./Components/NavBar/NavBar";
import Rating from "./Components/Rating/Rating";
import SelectProducts from "./Components/SelectProducts/SelectProducts";

const toolsFetch =async ()=>{
  const res = await fetch('/public/cardData.json')
  return res.json()
}
function App() {
  //  const notify = () => toast("Hallo")
const toolsPromis = toolsFetch()
  return (
    < >
      <NavBar></NavBar>
      <HeroBanner></HeroBanner>
      <Rating></Rating>

      <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
        <SelectProducts toolsPromis = {toolsPromis}></SelectProducts>
      </Suspense>
      {/* <IoAccessibilitySharp />  */}
      {/* <ToastContainer></ToastContainer> */}
    </>
  );
}

export default App;
