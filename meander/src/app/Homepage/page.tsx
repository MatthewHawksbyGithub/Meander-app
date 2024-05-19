import NavigationButton from "../components/navigationbutton";

export default function Page() { 
    return (
        <div>
        <div className="grid grid-rows-3 grid-flow-col gap-2 max-w-md bg-gray-200 p-2 md:opacity-0 md:h-0" >
            <div className="row-span-auto bg-purple-400 p-4 justify-items-center">
                <NavigationButton text="Button Text" href="/Meander" />
            </div>
          
            <div className="row-span-auto bg-purple-400 p-4">3</div>
        </div>  
        <div className="row-span-auto bg-black-400 p-4 flex justify-center items-center h-0 opacity-0 md:opacity-100 md h-100">
           Don't take your laptop hiking with you! Try our mobile version! 
            </div>
            </div>
    );
}
