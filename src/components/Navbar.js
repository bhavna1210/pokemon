import React, {useState} from 'react'

const Navbar = ({ getFilterData }) => {
    const [searchString, setSearchString] = useState();
    const searchingFunction = (val) => {
        setSearchString(val);
        getFilterData(val);
    }
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Pokemon</span>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    </div>
                    <div>
                        <input type="text" value={searchString} placeholder='search' onChange={(e) => {searchingFunction(e.target.value) }}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar