import {
  Avatar,
  Box,
  Center,
  Flex,
  Link,
  Spacer,
  Text
} from '@chakra-ui/react';

import siteConfig from '../../../../config/site.config';

const CopyrightNotice = () => {
  return (
    <Box
      id={'copyright'}
      py={5}
      px={{ base: 10, md: 20 }}
      bg={'gray.800'}
      color={'white'}
    >
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Text>{siteConfig.copyrightText}</Text>
        <Spacer />
        <Text>v{siteConfig.siteVersion}</Text>
      </Flex>
      <Center>
        <Text>
          &lt;/&gt; with 💖 &amp;{' '}
          <Avatar
            size={'xs'}
            name={'NextJs'}
            src={
              'https://pbs.twimg.com/profile_images/1468045715083509767/JrehsCpb_400x400.png'
            }
          />{' '}
          by{' '}
          <Link href={'https://itsrakesh.co'} isExternal>
            Rakesh
          </Link>
        </Text>
      </Center>
    </Box>
  );
};

export default CopyrightNotice;
