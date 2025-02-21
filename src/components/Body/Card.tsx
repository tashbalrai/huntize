"use client";
import { FaShareAlt } from "react-icons/fa";
import type { ICard } from "../../utils/types";
import Box from "./Box";
import { useBoxAttributes } from "../../utils/hooks/UseBoxAttributes";

const Card = ({ data }: ICard) => {
    const { width } = useBoxAttributes();

    return (
        <Box height="h-article-height" width={`${width / 16}rem`}>
            <article className="group flex flex-col h-full px-5 pt-11 pb-6 justify-between hover:bg-(--hover-bg-card-color) hover:cursor-pointer ">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row w-full justify-between">
                        <h6>/ {data.category}</h6>
                        <FaShareAlt
                            style={{ fontSize: "1.25rem" }}
                            className="hidden group-hover:inline-flex"
                        />
                    </div>
                    <h4>{data.title}</h4>

                    <p>{data.excerpt}</p>
                </div>
                <div className="flex flex-row items-baseline gap-2">
                    <p>{data.author}</p>
                    <p>{data.publishedAt}</p>
                </div>
            </article>
        </Box>
    );
};

export default Card;
