// import { IoAccessibilitySharp } from "react-icons/io5";
 
import { Suspense } from "react";
import "./App.css";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import NavBar from "./Components/NavBar/NavBar";
import Rating from "./Components/Rating/Rating";
import SelectProducts from "./Components/SelectProducts/SelectProducts";
import StepSection from "./Components/StepSection/StepSection";
import PricingSection from "./Components/PricingSection/PricingSection";
import TransformSection from "./Components/TransformSection/TransformSection";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const toolsFetch =async ()=>{
  const res = await fetch('/cardData.json')
  return res.json()
}
function App() {
  
  // const [selectedTools, setSelectedTools ] = useState([]);
  // const totalPrice = selectedTools.reduce((sum , tool) => sum + tool.price,0 )
const toolsPromis = toolsFetch()
  return (
    
    < >
      <NavBar 
      // selectedTools={selectedTools}
      //  setSelectedTools={setSelectedTools}
       ></NavBar>
      <HeroBanner></HeroBanner>
      <Rating></Rating>

      <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
        <SelectProducts toolsPromis = {toolsPromis} 
          // setSelectedTools={setSelectedTools}
          // selectedTools={selectedTools}
          // totalPrice={totalPrice}>
        ></SelectProducts>
      </Suspense>
      <StepSection></StepSection>
      <PricingSection></PricingSection>
      <TransformSection></TransformSection>
      <Footer></Footer>
      {/* <IoAccessibilitySharp />  */}
      <ToastContainer/>
    </>
  );
}

export default App;
