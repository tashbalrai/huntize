"use client";
import BorderBox from "@/components/box";
import { useRef } from "react";

export default function Header() {
    let count = useRef<number>(1);
    return (
        <section className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4">
            <BorderBox index={count.current++}>Huntize</BorderBox>
            <BorderBox index={count.current++}>Huntize</BorderBox>
            <BorderBox index={count.current++}>Huntize</BorderBox>
            <BorderBox index={count.current++}>Huntize</BorderBox>
        </section>
    );
}
