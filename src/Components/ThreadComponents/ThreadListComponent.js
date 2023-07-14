import React from "react";
import Thread from "./Thread";

const threads = [
    1,2,3,4,5,6,
    1,2,3,4,5,6,
    // 1,2,3,4,5,6,
    // 1,2,3,4,5,6,
    // 1,2,3,4,5,6,
    // 1,2,3,4,5,6,
]

const ThreadList = () => {
    return (
        <div className="flex flex-wrap justify-center gap-12 bg-gray-100 p-4">
            {threads.map((thread, index) => 
                <Thread />
                )}
        </div>
    );
}

export default ThreadList;