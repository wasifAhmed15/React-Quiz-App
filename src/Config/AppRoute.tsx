import { BrowserRouter,Routes,Route } from "react-router-dom";
import Quiz from "../QuizScreen/QuizApp";
import ControlledCarousel from "../text/slider";

export default function AppRout (){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Quiz/>}/>
        <Route path="Slider" element={<ControlledCarousel/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
}