import { Tooltip } from '@material-ui/core'
import moment from 'moment'
import React from 'react'
const HeaderContent = () => {
    return (
        <section className="flex space-y-4 md:space-y-0 md:space-x-4 items-stretch flex-wrap md:flex-nowrap">
            <div className="rounded-md bg-white shadow-md w-full md:w-2/6 h-28 flex p-2 flex-col space-y-2">
                <p className="font-mono text-sm">Current Playing</p>
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-200"></div>
                </div>
            </div>
            <div className="rounded-md bg-white shadow-md w-full md:w-4/6 h-28 flex p-2 space-y-2 flex-wrap">
                <div className="flex justify-between w-full">
                    <p className="font-mono text-sm">Current Team</p>
                    <p className="font-mono text-sm">
                        {moment().format("DD/MM/YYYY")}
                    </p>
                </div>
                <div className="flex w-full justify-between">
                    <Tooltip arrow title="Sobble">
                        <div className=" w-14 h-14 md:w-16 md:h-16">
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage:
                                        "url(/images/sobble.png)",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Unknown">
                        <div className=" w-14 h-14 md:w-16 md:h-16">
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage:
                                        "url(/images/pokeball-icon.png)",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Unknown">
                        <div className=" w-14 h-14 md:w-16 md:h-16">
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage:
                                        "url(/images/pokeball-icon.png)",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Unknown">
                        <div className=" w-14 h-14 md:w-16 md:h-16">
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage:
                                        "url(/images/pokeball-icon.png)",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Unknown">
                        <div className=" w-14 h-14 md:w-16 md:h-16">
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage:
                                        "url(/images/pokeball-icon.png)",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </Tooltip>
                    <Tooltip arrow title="Unknown">
                        <div className=" w-14 h-14 md:w-16 md:h-16">
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage:
                                        "url(/images/pokeball-icon.png)",
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </Tooltip>
                </div>
            </div>
        </section>
    )
}

export default HeaderContent