import { LinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Code,
  Heading,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";

export const InfoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        onClick={onOpen}
        aria-label="About"
        size="sm"
        colorScheme="gray"
      >
        ?
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <VStack alignItems="left" spacing="1rem">
              <Heading size="md" pt="1rem">
                Is bolaget closed?
              </Heading>
              <Text>
                This site provides endpoints to query for deviation in opening
                hours for Systembolaget. I created this site due to my own
                inability to remember and plan for more than a few days ahead.
                This backfired more than once when forgetting about holidays etc
                and lead to me missing out of on great beverages and memories.
              </Text>

              <Text>
                All data and search funcitonality is provided by Systembolaget
                official API. You can find more information about it on{" "}
                <Link href="https://api-portal.systembolaget.se/">
                  https://api-portal.systembolaget.se/
                </Link>{" "}
                and everything else on Systembolaget official website{" "}
                <Link href="https://www.systembolaget.se/">
                  https://www.systembolaget.se/
                </Link>.
              </Text>

              <Heading size="md">
                Instructions
              </Heading>

              <Text>
                Search and find your favorite store. Today's and tomorrow's
                closing time will show in the list. If the store is closed one
                day a closed sign is visible instead of the time. If the store's
                closing time deviates from the normal it will be flagged with a
                red color. Click the <LinkIcon />{" "}
                button to get to the status endpoint. Create an automated daily
                request to the endpoint, use the <Code>daysAhead</Code>{" "}
                query parameter and let technology warn you when opening hours
                are deviating. Check <Code>isDeviant</Code> for deviations.
              </Text>

              <Heading size="md">
                Gotchas
              </Heading>

              <Text>
                <UnorderedList>
                  <ListItem>
                    Sundays are always closed and are therefore not a deviation.
                  </ListItem>
                  <ListItem>
                    Stores always open at 10:00 and therefore opening time is
                    not displayed.
                  </ListItem>
                </UnorderedList>
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="gray"
              onClick={onClose}
              size="sm"
              ref={initialRef}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
