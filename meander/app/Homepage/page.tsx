import NavigationButton from "../components/navigationbutton";

export default function Page() { 
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-2 max-w-md bg-gray-200 p-2">
            <div className="row-span-auto bg-purple-400 p-4 justify-items-center">
                <NavigationButton text="Button Text" href="/Meander" />
            </div>
        <div className="row-span-auto bg-purple-400 p-4">3</div>
    </div>
    );
}
