import { Box, VStack, Heading, Text, Image, SimpleGrid, Link } from '@chakra-ui/react';
import { FaCalendarAlt, FaTrophy, FaImage } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={10} p={5}>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Venus Williams</Heading>
        <Text fontSize="xl">Professional Tennis Player</Text>
        <Image borderRadius="full" boxSize="150px" src="/images/venus-williams.jpg" alt="Venus Williams" mt={4} />
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} width="full">
        <Box as="section">
          <Heading as="h2" size="lg" mb={3}><FaTrophy /> Career Achievements</Heading>
          <Text>
            Venus Williams has won seven Grand Slam singles titles, including five at Wimbledon. She has also won fourteen Grand Slam doubles titles, all with her sister Serena Williams.
          </Text>
        </Box>
        <Box as="section">
          <Heading as="h2" size="lg" mb={3}><FaCalendarAlt /> Upcoming Events</Heading>
          <Text>
            Stay tuned for upcoming matches and events. Check back often for the latest schedule.
          </Text>
        </Box>
      </SimpleGrid>
      <Box as="section">
        <Heading as="h2" size="lg" mb={3}><FaImage /> Gallery</Heading>
        <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={5}>
          <Image src="/images/venus-action1.jpg" alt="Venus Playing Tennis" />
          <Image src="/images/venus-action2.jpg" alt="Venus Winning" />
          <Image src="/images/venus-action3.jpg" alt="Venus at an Event" />
          <Image src="/images/venus-action4.jpg" alt="Venus Smiling" />
        </SimpleGrid>
      </Box>
      <Box as="footer" textAlign="center" width="full" mt={10}>
        <Text>&copy; {new Date().getFullYear()} Venus Williams. All rights reserved.</Text>
        <Link href="https://www.wtatennis.com/players/230234/venus-williams" isExternal>
          More about Venus
        </Link>
      </Box>
    </VStack>
  );
};

export default Index;