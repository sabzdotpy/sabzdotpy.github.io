import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

export default function TwoPaneContaier() {


    return (
        <>

            <div className="twoPane z-0 flex flex-col mt-20 md:mt-0 md:flex-row top-0 min-h-screen w-screen">
                <LeftPane className="leftPane w-full md:w-1/4 h-auto md:h-screen" />
                <RightPane className="rightPane w-full md:w-3/4 h-auto md:h-screen overflow-y-auto" />
            </div>
        
        </>
    )
}