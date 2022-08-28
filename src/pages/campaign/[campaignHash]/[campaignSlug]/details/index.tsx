import { Heading, Box, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';

import CampaignLayout from '@/layouts/Campaign';

const Details = () => {
  return (
    <Box>
      <Heading fontSize='xl' fontWeight='500' mb='5'>
        <Trans>About the project</Trans>
      </Heading>
      <Box>
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
        <Image src='/images/long-story.jpg' my='5' />
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
          Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics,
          very popular during the Renaissance. The first line of Lorem Ipsum,
          "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </Text>
        <Image src='/images/long-story.jpg' my='5' />
        <Text>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>
      </Box>
    </Box>
  );
};

Details.withReward = true;
Details.PageLayout = CampaignLayout;

export default Details;
