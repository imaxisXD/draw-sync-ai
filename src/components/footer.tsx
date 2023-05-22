"use client";

import Link from "next/link";
// import { Github, Logo, Twitter } from "@/components/shared/icons";
import { useParams } from "next/navigation";

export default function Footer() {
    const { domain = "dub.sh" } = useParams() as { domain: string };

    return (
        <div className="z-10 flex h-20 items-center justify-center space-x-12 border-t border-gray-200">
            <a href="https://twitter.com/dubdotsh" target="_blank" rel="noreferrer">
                <span className="sr-only">Twitter</span>

            </a>
            <Link href={domain === "dub.sh" ? "/" : `https://dub.sh`}>
                <span className="sr-only">Dub.sh Logo</span>

            </Link>
            <a
                href="https://github.com/steven-tey/dub"
                target="_blank"
                rel="noreferrer"
            >
                <span className="sr-only">Github</span>
            </a>
        </div>
    );
}
