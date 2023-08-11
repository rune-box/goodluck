import { Box, Button, CircularProgress, CircularProgressLabel, HStack, Progress, Select, Text, VStack } from "@chakra-ui/react";

type SecondsCountdownType = {
    hours: number,
    minutes: number,
    seconds: number,
    completed: boolean //() => any
}
export const SecondsCountdown = ({ seconds, completed }: SecondsCountdownType) => {
    if (completed) {
        // Render a complete state
        return <></>
    } else {
        // Render a countdown
        return (
            // <CircularProgress value={40} color='green.400'>
            //     <CircularProgressLabel>40%</CircularProgressLabel>
            // </CircularProgress>
            <Text fontSize='lg' colorScheme="gray">Auto refresh in {seconds} seconds</Text>
        );
    }
}