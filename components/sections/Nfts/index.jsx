import React from 'react';
import {
    Box,
    chakra,
    Container,
    Text,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    useBreakpointValue
} from '@chakra-ui/react';
import Card from './Card';
import LineWithDot from './LineWithDot';
import EmptyCard from './EmptyCard';
import { colors } from '@/utils/colors';
import Wrapper from '@/components/Wrapper';
import { nfts } from '@/utils/nfts';

const Milestones = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Flex
            bg={colors.darkBg}
            justify="center"
            position="relative"
            py={20}
            flexDirection={"column"}
            alignItems={"center"}
            id="nfts"
          
        >
        <Wrapper my={0} mx={"auto"} flexDir={{ base: "column" }} alignItems={"center"} zIndex={2}>
          
            {nfts.map((nft) => (
                <Flex key={nft.id} mb="10px" w={"100%"}>
                    {isDesktop && nft.id % 2 !== 0 && (
                        <>
                            <EmptyCard {...nft}/>
                            <LineWithDot />
                            <Card {...nft} />
                        </>
                    )}

                    {isMobile && (
                        <>
                            <LineWithDot />
                            <Card {...nft} />
                        </>
                    )}

                    {isDesktop && nft.id % 2 === 0 && (
                        <>
                            <Card {...nft} />

                            <LineWithDot />
                            <EmptyCard {...nft}/>
                        </>
                    )}
                </Flex>
            ))}
        </Wrapper>
        </Flex>
    );
};


export default Milestones;