import { Box } from "@/components/ui";
import Slogan1 from "@/components/ui/svg/Slogan1";
import Slogan2 from "@/components/ui/svg/Slogan2";
import { useBoxAttributes } from "@/utils/theme";

const Slogans = () => {
    const { width: boxWidth, boxes } = useBoxAttributes();
    const noEmptyBoxes = boxes - 3;

    return (
        <>
            <Box height="h-ab" width={`${boxWidth / 16}rem`}>
                <div className="h-ab w-full justify-items-center inline-flex justify-center items-center text-textColor">
                    <Slogan1 />
                </div>
            </Box>
            <Box
                height="h-ab"
                width={`${boxWidth / 16}rem`}
                boxClass={`${boxes <= 2 ? "hidden" : ""}`}
            >
                &nbsp;
            </Box>
            <Box height="h-ab" width={`${boxWidth / 16}rem`}>
                <div className="h-ab w-full justify-items-center inline-flex justify-center items-center text-textColor">
                    <Slogan2 />
                </div>
            </Box>
            {noEmptyBoxes > 0 &&
                [...Array(noEmptyBoxes)].map((_, i) => (
                    <Box key={i} height="h-ab" width={`${boxWidth / 16}rem`}>
                        &nbsp;
                    </Box>
                ))}
        </>
    );
};

export default Slogans;
