import { FC, ReactNode } from 'react';
import { Box, Text } from '@chakra-ui/react';

export interface ITimelineData {
  logo: ReactNode;
  title: string;
  date: string;
}

export interface ITimeline {
  timelines: ITimelineData[];
}

export const Timeline: FC<ITimeline> = ({ timelines }) => {
  return (
    <Box>
      {timelines
        .map(({ logo, title, date }, idx) => {
          return (
            <Box
              key={idx}
              display='flex'
              justifyContent='start'
              mb='5px'
              overflow='hidden'
            >
              <Box display='flex' alignItems='flex-start' h='full'>
                <Box
                  pr='2'
                  h='78px'
                  minH='78px'
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                >
                  <Box>{logo}</Box>
                  {idx !== 0 ? (
                    <Box w='2px' h='full' bg='gray.200'></Box>
                  ) : null}
                </Box>
                <Box>
                  <Text fontWeight='500'>{title}</Text>
                  <Text fontSize='sm' color='blackAlpha.600' mb='2'>
                    {date}
                  </Text>
                </Box>
              </Box>
            </Box>
          );
        })
        .reverse()}
    </Box>
  );
};
