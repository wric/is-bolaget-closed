import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Site } from "../models/Site";
import { SiteSearch } from "../models/SiteSearch";
import { SiteList } from "./SiteList";

export const SearchList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [sites, setSites] = useState<Site[]>([]);

  const handleChange = async (ev: ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.currentTarget.value);
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    setIsLoading(true);
    const res = await fetch(`/api/sites?search=${search}`);
    const data: SiteSearch = await res.json();
    setSites(data.siteViewModel);
    setIsLoading(false);
  };

  return <Container>
    <form onSubmit={handleSubmit}>
      <FormControl>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<SearchIcon />}
          />
          <Input
            pr="4.5rem"
            placeholder="Search store"
            required={true}
            value={search}
            onChange={handleChange}
            size="md"
          />
          <InputRightElement width="4.5rem">
            <Button
              // h="1.75rem"
              mr="1.5"
              size="sm"
              isLoading={isLoading}
              type="submit"
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
    <SiteList sites={sites} />
  </Container>;
};
