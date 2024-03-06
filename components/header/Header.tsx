"use client";
import BorderBox from "@/components/box";
import { useRef } from "react";

export default function Header() {
    return (
        <section className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
            <BorderBox>Huntize</BorderBox>
            <BorderBox>Huntize</BorderBox>
            <BorderBox>Huntize</BorderBox>
            <BorderBox>Huntize</BorderBox>
        </section>
    );
}
