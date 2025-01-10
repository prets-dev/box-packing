import { Box as BoxType} from "@/types";
import { Accordion, Alert, Box as MantineBox, Text } from "@mantine/core"
import Box from "./box";

const SelectedBoxes: React.FC<{
    boxes: BoxType[] | string;
}> = ({ boxes }) => {
    return (
        <MantineBox mt="lg">
            <Text size="sm" fw={500} pb={4}>Selected Boxes</Text>
            {
                boxes.length === 0 ? (
                    <Alert variant="light" color="cyan" ta="center">
                        No products selected.
                    </Alert>
                ) : (
                    Array.isArray(boxes) ? (
                        <Accordion>
                            {boxes.map((box) => <Box {...box} key={box.name} />)}
                        </Accordion>
                    ) : (
                        <Alert variant="light" color="red" ta="center">
                            {boxes}
                        </Alert>
                    )
                )
            }
        </MantineBox>
    )
}

export default SelectedBoxes
