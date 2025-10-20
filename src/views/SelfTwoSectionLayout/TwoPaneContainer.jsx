import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

export default function TwoPaneContaier() {


    return (
        <>

            <div className="twoPane z-0 flex top-0 h-screen w-screen overflow-y-hidden">
                <LeftPane className="leftPane flex-1" />
                <RightPane className="rightPane flex-3" />
            </div>
        
        </>
    )
}