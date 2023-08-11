import { Box, Button, VStack } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { RepeatIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { ViewData } from "../data/ViewData";
import { EthGenerator } from "../client/EthGenerator";
import { Address } from "../models/Address";
import { AddressView } from "../components/AddressView";

export const GuestPage = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [items, setItems] = React.useState(new Array<Address>());
    
    const refresh = () => {
        setRefreshing(true);
        try{
            const newItems = ViewData.ethGenerator?.generate();
            console.log(newItems);
            if(newItems)
                setItems([...newItems]);
        }
        finally{
            setRefreshing(false);
        }
    }

    useEffect(() => {
        // React advises to declare the async function directly inside useEffect
        async function loadMyRunesData() {
        };
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        if(!ViewData.ethGenerator)
            ViewData.ethGenerator = new EthGenerator();
        refresh();
      }, []);

    return (
        <VStack spacing={4}>
            <NavBar />
            <Box ml={5} mr={5} p={5}>
                <Button variant='outline' size='md' height='48px' width='200px' border='2px'
                    leftIcon={<RepeatIcon />}
                    isLoading={refreshing} onClick={refresh}>Refresh</Button>
            </Box>
            <AddressView items={items} chain="Ethereum" slip="60" />
            <Footer />
        </VStack>
    );
}