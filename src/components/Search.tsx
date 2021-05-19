import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Site } from "@components/Site";
import { BolagetSite } from "@models/Site";
import { ChangeEvent, FormEvent, useState } from "react";

export const SearchList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [sites, setSites] = useState<BolagetSite[] | null>(null);

  const onChange = async (ev: ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.currentTarget.value);
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setIsLoading(true);
    const res = await fetch(`/api/sites?search=${search}`);
    const sites: BolagetSite[] = await res.json();
    setSites(sites);
    setIsLoading(false);
  };

  return <Box w="100%" borderRadius="lg" pt="16" maxWidth="32rem">
    <form onSubmit={onSubmit}>
      <Flex alignItems="center" borderColor="gray.300">
        <FormControl>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.2em"
              children={<SearchIcon />}
            />
            <Input
              placeholder="Find store"
              required={true}
              value={search}
              onChange={onChange}
              size="md"
              variant="filled"
            />
            <InputRightElement width="4.5rem">
              <Button
                mr="0.5rem"
                size="sm"
                isLoading={isLoading}
                type="submit"
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Flex>
    </form>
    {sites && <VStack mt={4} spacing={2} align="stretch">
      {sites.length === 0 && <Text paddingY={2} paddingX={3}>No hits.</Text>}
      {sites.map((site) => <Site key={site.siteId} site={site} />)}
    </VStack>}
  </Box>;
};
