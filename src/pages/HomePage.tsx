import { Box, Button, HStack, Spacer, VStack } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { CkbIcon, JoyIDIcon } from "../icons/Icons";
import { Footer } from "../components/Footer";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { RoutesData } from "../data/RoutesData";

export const HomePage = () => {
    const nav = useNavigate();
    
    return (
        <VStack spacing={4}>
            <NavBar />
            <Box m={10} p={5}>
                <Button variant='outline' size='2xl' height='64px' width='360px' onClick={(e) => { nav(RoutesData.Guest); }}>Try as a Guest</Button>
            </Box>
            <Box m={10} p={5}>
                <HStack spacing={10}>
                    <JoyIDIcon width="300px" height="300px" />
                    <CloseIcon width="30px" height="30px"/>
                    <CkbIcon width="300px" height="300px" />
                </HStack>
            </Box>
            <Footer />
        </VStack>
    );
}