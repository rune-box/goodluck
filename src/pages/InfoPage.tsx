import { Box, HStack, Spacer, Tabs, TabList, TabPanels, Tab, TabPanel, VStack, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { CkbIcon, JoyIDIcon } from "../icons/Icons";
import { Footer } from "../components/Footer";
import { CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { RoutesData } from "../data/RoutesData";
import { ViewData } from "../data/ViewData";

export const InfoPage = () => {
    const nav = useNavigate();

    return (
        <VStack spacing={4}>
            <NavBar />
            <Box m={5} p={5}>
                <Tabs variant="unstyled">
                    <TabList>
                        <Tab>Ethereum</Tab>
                        <Tab isDisabled>Bitcoin</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <UnorderedList spacing={1}>
                                {ViewData.EthAddrs.map((item: string, index: number) => (
                                    <ListItem><Link href={`https://etherscan.io/address/${item}`}>{item}</Link></ListItem>
                                ))}
                            </UnorderedList>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            <Footer />
        </VStack>
    );
}