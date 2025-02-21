import { useBoxAttributes } from "../../utils/hooks/UseBoxAttributes";
import Slogan1 from "../SVG/Slogan1";
import Slogan2 from "../SVG/Slogan2";
import Box from "./Box";

const Slogans = () => {
    const { width: boxWidth, boxes } = useBoxAttributes();
    const noEmptyBoxes = boxes - 4;

    return (
        <>
            <Box height="h-article-height" width={`${boxWidth / 16}rem`}>
                <div className="h-article-height w-full justify-items-center inline-flex justify-center items-center">
                    <h1 className="mx-auto">HUNT</h1>
                </div>
            </Box>
            <Box height="h-article-height" width={`${boxWidth / 16}rem`}>
                <div className="h-article-height w-full justify-items-center inline-flex justify-center items-center">
                    <h1 className="mx-auto ">LEARN</h1>
                </div>
            </Box>
            <Box height="h-article-height" width={`${boxWidth / 16}rem`}>
                <div className="h-article-height w-full px-4 justify-items-center inline-flex justify-center items-center">
                    <h1 className="mx-auto ">WRITE</h1>
                </div>
            </Box>
            <Box height="h-article-height" width={`${boxWidth / 16}rem`}>
                <div className="h-article-height w-full px-4 justify-items-center inline-flex justify-center items-center">
                    <h1 className="mx-auto ">INSPIRE</h1>
                </div>
            </Box>
            {noEmptyBoxes > 0 &&
                [...Array(noEmptyBoxes)].map((_, i) => (
                    <Box
                        key={i}
                        height="h-article-height"
                        width={`${boxWidth / 16}rem`}
                    >
                        &nbsp;
                    </Box>
                ))}
        </>
    );
};

export default Slogans;
