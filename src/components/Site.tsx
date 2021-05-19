import { LinkIcon } from "@chakra-ui/icons";
import { Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import { OpeningHour } from "@components/OpeningHour";
import { BolagetSite } from "@models/Site";

type Props = { site: BolagetSite };

export const Site = ({ site }: Props) => {
  const statusEndpoint = () => {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = `/api/sites/${site.siteId}`;
    a.click();
  };

  return <Flex
    key={site.siteId}
    paddingX={1}
    paddingY={2}
    alignItems="center"
    cursor="default"
  >
    <Flex justify="space-between" alignItems="center" width="100%" mr={2}>
      <VStack alignItems="start" spacing={0}>
        <Text casing="capitalize">{site.name}</Text>
        <Text casing="capitalize" fontSize="xs">{site.address}</Text>
      </VStack>
      <HStack spacing={1}>
        <OpeningHour
          openingHour={site.openingHours[0]}
          display={["inline-flex", "inline-flex", "inline-flex"]}
        />
        <OpeningHour
          openingHour={site.openingHours[1]}
          display={["none", "inline-flex", "inline-flex"]}
        />
        <OpeningHour
          openingHour={site.openingHours[2]}
          display={["none", "none", "inline-flex"]}
        />
      </HStack>
    </Flex>
    <IconButton
      aria-label="Open API reference"
      icon={<LinkIcon />}
      onClick={statusEndpoint}
      size="xs"
    />
  </Flex>;
};
