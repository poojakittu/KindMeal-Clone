import Directory1 from "./Directory1";
import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import Card from "./Cart";
import { useEffect, useState } from "react";
import { getaddress } from "./api";
import Pagination from "./Pagination";

const Directory = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [find, setfind] = useState("");

  const fetchCitiesDataAndUpdate = (page,find) => {
    getaddress({ page, limit: 4 ,find})
      .then((res) => setData(res.data))
      .catch((err) => console.log("error is ", err))
      .finally(() => console.log("call completed"));
  };

  useEffect(() => {
    fetchCitiesDataAndUpdate(page,find);
  }, [page,find]);

  const getData = (el) => {
    setfind(el);
  };

  return (
    <Box>
      {/* ################################################################# */}
      <Directory1 onSubmit={getData} />
      {/* ########################################################################## */}
      <Stack
        direction="row"
        spacing={50}
        px
        align="center"
        width="80%"
        margin="auto"
        padding={10}
        gap="30px"
      >
        <Text fontSize="20px">Page</Text>
        <Pagination
          total={6}
          current={page}
          onChange={(value) => setPage(value)}
        />
        {/* &rbrace; */}
      </Stack>

      {/* ########################################################################## */}

      <Grid
        width="80%"
        margin="auto"
        templateColumns="repeat(2, 1fr)"
        gap="80px"
        padding="10px"
      >
        {data.map((el) => (
          <Card
            id={el.id}
            name={el.name}
            des={el.description}
            phone={el.phone}
            opening={el.opening}
            address={el.address}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Directory;
