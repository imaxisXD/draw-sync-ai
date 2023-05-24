"use client";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";
import useScroll from "@/lib/hooks/use-scroll";
import { useEffect, useState } from "react";


export default function Nav() {
    const { domain = "dub.sh" } = useParams() as { domain: string };
    const scrolled = useScroll(80);
    const segment = useSelectedLayoutSegment();



    return (
        <div
            className={clsx(`sticky inset-x-0 top-0 z-30 w-full transition-all bg-black`, {
                "border-b border-gray-700 bg-black ": scrolled,
            })}
        >
            <div className="mx-auto w-full max-w-screen-xl px-5 md:px-5">
                <div className="flex h-16 items-center justify-between">
                    <Link href='/'>
                        <RoughNotation iterations={4} type="underline" show={true} color="#ffff" strokeWidth={1}>
                            <h1 className="font-extrabold animate-text text-transparent text-2xl md:text-3xl bg-clip-text bg-gradient-to-r from-blue-600 via-pink-400 to-purple-400">
                                Draw Sync
                                <span className="ml-1">
                                    AI
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white inline ml-2">
                                        <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
                                    </svg>

                                </span>
                            </h1>
                        </RoughNotation>
                    </Link>

                    <div className="flex items-center invisible md:visible">
                        <div className="grid gap-8 items-start justify-center">
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                                <button className="relative px-4 py-2 bg-black rounded-lg leading-none flex items-center md:divide-x md:divide-gray-600">
                                    <span className="flex items-center space-x-2  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-400">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                        </svg>
                                        <span className="pr-6 text-gray-100">Beta Release</span>
                                    </span>
                                    <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">Invite &rarr;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
