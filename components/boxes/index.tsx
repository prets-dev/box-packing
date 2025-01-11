import { Box as BoxType} from "@/types";
import { Accordion, Alert, Box as MantineBox, Text } from "@mantine/core"
import Box from "./box";

const Boxes: React.FC<{
    values: BoxType[] | string;
}> = ({ values }) => {
    return (
        <MantineBox mt="lg">
            <Text size="sm" fw={500} pb={4}>Selected Boxes</Text>
            {
                values.length === 0 ? (
                    <Alert variant="light" color="cyan" ta="center">
                        No products selected.
                    </Alert>
                ) : (
                    Array.isArray(values) ? (
                        <Accordion multiple>
                            {values.map((box) => <Box {...box} key={box.name} />)}
                        </Accordion>
                    ) : (
                        <Alert variant="light" color="red" ta="center">
                            {values}
                        </Alert>
                    )
                )
            }
        </MantineBox>
    )
}

export default Boxes
