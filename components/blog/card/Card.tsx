"use client";
import { Box, H36, P14, P18, S18 } from "@components/ui";
import { ICard } from "@/types/ui";
import { FaShareAlt } from "react-icons/fa";
import SplitText from "@/components/animate/Text";
import { useState } from "react";

const Card = ({ data, boxWidth }: ICard) => {
    const [play, setPlay] = useState(false);
    return (
        <Box height="h-ab" width={boxWidth}>
            <article
                className="group flex flex-col h-full px-5 pt-11 pb-6 justify-between hover:bg-cardHover hover:cursor-pointer hover:scale-105"
                onMouseOver={() => setPlay(true)}
                onMouseOut={() => setPlay(false)}
            >
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row w-full justify-between">
                        <S18>
                            <SplitText
                                text={`/ ${data.category}`}
                                play={play}
                            />
                        </S18>
                        <FaShareAlt
                            style={{ fontSize: "1.25rem" }}
                            className="hidden group-hover:inline-flex"
                        />
                    </div>
                    <H36>{data.title}</H36>

                    <P18>
                        <SplitText
                            text={data.excerpt}
                            play={play}
                            variants={{
                                from: {
                                    opacity: 1,
                                },
                                to: (hover) =>
                                    hover
                                        ? {
                                              color: "var(--text-highlight-color)",
                                              transition: {
                                                  staggerChildren: 0.01,
                                              },
                                          }
                                        : {},
                            }}
                        />
                    </P18>
                </div>
                <div className="flex flex-row items-baseline gap-2">
                    <P18>{data.author}</P18>
                    <P14>{data.publishedAt}</P14>
                </div>
            </article>
        </Box>
    );
};

export default Card;
