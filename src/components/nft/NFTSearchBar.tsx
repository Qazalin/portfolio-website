import {
  ScaleFade,
  useDisclosure,
  HStack,
  Input,
  Icon,
  Box,
  Stack,
} from "@chakra-ui/react";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { CollectionSearchCard } from ".";
import { AiOutlineSearch } from "react-icons/ai";
import { NFTCollectionType } from "@qazalin/types";
import { NFTCollections } from "./constants";

/**
 * SearchBar components with Autocomplete, listen to enter key and recommendations
 */
export const NFTSearchBar: React.FC<{ collections: NFTCollectionType[] }> = ({
  collections,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // show a differnt UI for the search state
  const [isUserSearching, setIsUserSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(collections);

  /* const filter = (e) => {
    const keyword: string = e.target.value;

    if (keyword !== "") {
      const results = Object.keys(NFTCollections).filter((name) => {
        return name.startsWith(keyword.toLowerCase());
      });
      setSearchResults(results);
    }
  }; */

  // side-effects of typing into the search bar: 1. Change the UI, 2. Filter the results
  useEffect(() => {
    if (!searchValue) setIsUserSearching(false);
    else setIsUserSearching(true);
  }, [searchValue]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
      setSearchValue("");
    }
  }

  function handleSearchValueChange(e: string) {
    setSearchValue(e);
    console.log(e);
    searchCollections(e);
  }

  const searchCollections = (value: string) => {
    if (value !== "") {
      const allResults: NFTCollectionType[] = collections.filter((c, i) => {
        return c.name.toLowerCase().startsWith(value.toLowerCase());
      });
      if (allResults.length == 0) {
        console.log("not found");
      }
      setSearchResults(allResults);
    } else {
      setSearchResults(collections);
    }
  };

  return (
    <>
      <Stack>
        <HStack>
          <Icon aria-label="search" as={AiOutlineSearch} fontSize="20px" />
          <Input
            // function
            value={searchValue}
            onChange={(e) => handleSearchValueChange(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            // style
            _focus={{
              border: "1px",
              borderColor: "primary",
            }}
            borderRadius="10px"
            onFocus={onOpen}
            onBlur={onClose}
            bg="gray.700"
            border="none"
            placeholder={"NFT Collection"}
          />
        </HStack>
        <ScaleFade initialScale={0.9} in={isOpen} unmountOnExit={true}>
          <Box
            mt="10px"
            borderRadius="10px"
            w="100%"
            h="300px"
            p="15px"
            px="40px"
            bg="gray.700"
          >
            <CollectionSearchCard collections={searchResults} />
            {/* isUserSearching && searchResults && searchResults.length > 0 ? (
              <CollectionSearchCard collections={collections} />
            ) : (
              <CollectionSearchCard collections={collections} />
            ) */}
          </Box>
        </ScaleFade>
      </Stack>
    </>
  );
};
