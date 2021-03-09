import React from 'react'
import moment from 'moment'

const HomeContent = ({ item }) => {
    function truncateString(str, num) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }
    return (
        <div className="rounded-md bg-white shadow-md w-full h-28 flex justify-between items-center p-2 space-x-2">
            <div className="w-3/4 h-full flex flex-col justify-between">
                <div className="flex flex-col">
                    <p className="font-mono text-md font-semibold text-red-600">
                        {truncateString(item.title, 20)}
                    </p>
                    <p className="font-mono text-sm">
                        {truncateString(item.content, 60)}
                    </p>
                </div>
                <p className="font-mono text-xs text-gray-400">
                    {moment().format("DD/MM/YYYY HH:mm")}
                </p>
            </div>
            <div className="w-1/4 h-full flex justify-end items-center">
                <div className="w-20 h-20 bg-gray-200" />
            </div>
        </div>
    )
}

export default HomeContent
