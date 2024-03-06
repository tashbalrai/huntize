"use client";
import BorderBox from "@/components/box";

export default function Header() {
    const boxHeight = "h-[6.25rem]";
    return (
        <section className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
            <BorderBox height={boxHeight}>Huntize</BorderBox>
            <BorderBox height={boxHeight}>Huntize</BorderBox>
            <BorderBox height={boxHeight}>Huntize</BorderBox>
            <BorderBox height={boxHeight}>Huntize</BorderBox>
        </section>
    );
}
