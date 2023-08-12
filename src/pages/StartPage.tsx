import { Box, Button, HStack, Progress, Select, Text, VStack } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { RepeatIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { ViewData } from "../data/ViewData";
import { EthGenerator } from "../client/EthGenerator";
import { Address } from "../models/Address";
import { AddressView } from "../components/AddressView";
import Countdown, { CountdownApi } from 'react-countdown';
import { SecondsCountdown } from "../components/SecondsCountdown";
import { EthUtils } from "../utils/EthUtils";

export const StartPage = () => {
    const [autoSeconds, setAutoSeconds] = React.useState(3);
    const [countdownDate, setCountdownData] = React.useState(Date.now() + 1000);
    const [refreshing, setRefreshing] = React.useState(false);
    const [items, setItems] = React.useState(new Array<Address>());
    let countdownApi: CountdownApi | null = null;
    const setRef = (countdown: Countdown | null): void => {
        if (countdown) {
            countdownApi = countdown.getApi();
        }
    };

    const refresh = () => {
        setRefreshing(true);
        let found: boolean = false;
        try {
            const newItems = ViewData.ethGenerator?.generate();
            if (newItems) {
                setItems([...newItems]);
                found = EthUtils.found(newItems, ViewData.EthAddrs);
            }
        }
        finally {
            setRefreshing(false);
            if (!found) {
                setCountdownData(Date.now() + autoSeconds * 1000);
                if (countdownApi) countdownApi.start();
            }
        }
    }

    useEffect(() => {
        // React advises to declare the async function directly inside useEffect
        // async function loadMyRunesData() {
        // };
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        if (!ViewData.ethGenerator)
            ViewData.ethGenerator = new EthGenerator();
        refresh();
    }, []);

    return (
        <VStack spacing={4}>
            <NavBar />
            {/* <HStack ml={5} mr={5} p={5}>
                <Text>Auto refresh in </Text>
                <Select variant='outline' value={autoSeconds} onChange={(e) => {
                            const val = Number.parseInt(e.target.value);
                            setAutoSeconds(val);
                        }}>
                    <option value='3'>3</option>
                    <option value='5'>5</option>
                    <option value='7'>7</option>
                    <option value='10'>10</option>
                </Select>
            </HStack> */}
            {/* <Progress value={progress as number} height="2px" w="100%" onEnded={refresh} /> */}
            <Countdown date={countdownDate} renderer={SecondsCountdown} onComplete={refresh}
                ref={setRef}></Countdown>
            <AddressView items={items} chain="Ethereum" slip="60" />
            <Footer />
        </VStack>
    );
}