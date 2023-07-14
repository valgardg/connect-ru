import React from "react";
import ThreadList from "../Components/ThreadComponents/ThreadListComponent";

const MainView = () => {
    return (
        <div className="h-screen flex flex-col justify-start items-center p-4">
            <ThreadList/>
        </div>
    );
}

export default MainView;