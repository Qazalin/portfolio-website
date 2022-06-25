import { Flex, Text, Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

const MediaDetails = ({ slug }) => {
  return <Box>{slug}</Box>;
};

export default MediaDetails;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.query;
  return {
    props: {
      slug,
    },
  };
};
