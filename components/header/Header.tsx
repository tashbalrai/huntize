"use client";
import BorderBox from "@/components/box";

export default function Header() {
    return (
        <header className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
            <BorderBox height="h-hb">Huntize</BorderBox>
            <BorderBox height="h-hb">Huntize</BorderBox>
            <BorderBox height="h-hb">Huntize</BorderBox>
            <BorderBox height="h-hb">Huntize</BorderBox>
        </header>
    );
}
