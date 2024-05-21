"use client";
import {User} from "@prisma/client";
import Image from "next/image";
import GoChatButton from './GoChatButton';
import SearchBar from "./SearchBar";
import AccountMenu from "./AccountMenu";
import { use, useCallback, useState } from "react";

interface NavbarProps {
    currentUser: User
}

const Navbar: React.FC<NavbarProps> = (
    {currentUser}
) => {
    const [showAccountMenu, setShowAccountMenu] = useState(false);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    return (
            <nav className="flex w-full items-center p-4">
                <div className="my-2 mx-3 hidden lg:block">
                    <img src="/img/logo_blanc.png" className="h-24 w-auto object-contain" alt="Logo" />
                </div>
                <SearchBar />
                <GoChatButton />
                <div className="relative">
                    <div
                    onClick={toggleAccountMenu}
                    className="
                    relative
                    rounded-full
                    overflow-hidden
                    h-10
                    w-10
                    mx-5
                    md:h-11
                    md:w-11
                    cursor-pointer
                    hover:opacity-75
                    flex
                    items-center
                    "
                    >
                    <Image
                    alt="Avatar"
                    src={currentUser?.image || '/img/placeholder.jpg'}
                    fill
                    />
                    </div>
                    <AccountMenu visible={showAccountMenu}/>
                </div>
            </nav>
    )
}

export default Navbar;