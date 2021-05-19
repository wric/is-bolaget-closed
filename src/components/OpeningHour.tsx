import { NotAllowedIcon } from "@chakra-ui/icons";
import { Tag, Text } from "@chakra-ui/react";
import { BolagetOpeningHour } from "@models/OpeningHour";

type Props = {
  openingHour: BolagetOpeningHour;
  display: string[];
};

export const OpeningHour = ({ openingHour, display }: Props) => {
  return <Tag
    size="sm"
    colorScheme={openingHour.isDeviant ? "red" : "gray"}
    display={display}
  >
    <Text>{openingHour.shortDescription}</Text>
    {openingHour.isClosed && <NotAllowedIcon ml={1} />}
  </Tag>;
};
