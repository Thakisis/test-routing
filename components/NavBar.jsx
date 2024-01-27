import React from "react"
import Link from "next/link"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react"


export default function NavBar({ children }) {
    const sectionList = [
        { name: "search", title: "search", url: "/search" },
        { name: "default", title: "root", url: "/" },
        { name: "about", title: "about", url: "/about" },

    ]
    const menus = sectionList.map(({ name, title, url }) => {

        return (<NavbarItem isActive key={name}>
            <Link href={url}

                aria-current="page">
                {title}
            </Link>
        </NavbarItem>)
    })
    return (
        <Navbar position="static">

            <NavbarContent className="hidden w-screen sm:flex gap-4 justify-between" >
                <div className="flex gap-5">{menus}</div>{children}
            </NavbarContent>

        </Navbar>
    )
}
