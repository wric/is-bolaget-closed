import { Box, VStack } from "@chakra-ui/react";
import { Site } from "../models/Site";

type Props = {
  sites: Site[];
};

export const SiteList = ({ sites }: Props) => {
  if (!sites) {
    return null;
  }

  return <VStack
    mt={8}
    spacing={2}
    align="stretch"
  >
    {sites.map((site) =>
      <Box key={site.siteId} h="40px">
        {site.displayName}, {site.city}
      </Box>
    )}
  </VStack>;
};
