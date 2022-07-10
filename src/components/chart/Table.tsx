import {
  Table,
  Box,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export const RTable: React.FC<{ data: { data: string } }> = ({ data }) => {
  const rows = data.data.split("\n");
  const columns = rows[0].split(","); // The first row is the columns row
  const d = rows.slice(1, rows.length);
  return (
    <TableContainer h="400px" overflowY="auto" my="10px">
      <Table variant="simple">
        <Thead>
          <Tr>
            {columns.map((col, i) => (
              <Th key={`col-${i}`}>{col}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {d.map((r, i) => {
            const nums = r.split(",").slice(0, r.length);
            return (
              <Tr key={`${i}-row`}>
                {nums.map((n, i) => (
                  <Td>{n}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
