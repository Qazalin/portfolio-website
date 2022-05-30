import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const data = `t,tokenId,from,to,token_price,usd_price
2022-01-12,1419,0x8370fadc4f023a16721ec261fa22b1a94f2c9d88,0xeccec3f83f0506a8e480c1d966a18f91d610120b,2.0,6761.368941939241
2022-01-12,1362,0xfb315881feda1bc5bc1c229b349338f562affab7,0x9bc5536b6edd37fcf15f5e44e0a56c68397f5cef,1.97,6659.948407810152
2022-01-12,2442,0xd347f5acf924f14d4cad95ef848a176c46ba7173,0x2f47b6ae188860509871c05151fb8488316dc317,1.85,6254.266271293798
2022-01-12,845,0xdd74a5f502167c1bdd88968d058834170175277b,0x44dc2ec15b3483fc8590f6b396cea5f8f2fbf3bd,1.99,6727.562097229545
`;

export const RTable = () => {
  const rows = data.split("\n");
  const columns = rows[0].split(","); // The first row is the columns row
  const d = rows.slice(1, rows.length);
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {columns.map((col, i) => (
              <Th key={i}>{col}</Th>
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