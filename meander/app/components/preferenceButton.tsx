export default  function Box({ label, selected, onClick }) {
        return (
            <div
                className={`flex justify-center items-center w-200 h-400 ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} m-5 cursor-pointer`}
                onClick={onClick}
                style={{ fontSize: '32px' }}
            >
                {label}
            </div>
        );
    }
    