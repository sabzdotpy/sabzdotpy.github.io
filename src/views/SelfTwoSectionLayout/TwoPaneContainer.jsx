import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

export default function TwoPaneContaier() {


    return (
        <>

            <div className="twoPane z-0 flex flex-col md:flex-row h-[calc(100vh-3rem)] w-full">
                <LeftPane className="leftPane w-full md:w-1/4 h-auto md:h-full" />
                <RightPane className="rightPane w-full md:w-3/4 h-auto md:h-full overflow-y-auto" />
            </div>
        
        </>
    )
}