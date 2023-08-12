import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer} from '@chakra-ui/react';
import { Address } from '../models/Address';

type AddressViewType = {
    chain: string,
    slip: string,
    items: Array<Address>
}

export const AddressView = ({chain, slip, items}: any) => {
    return (<TableContainer>
        <Table variant='simple' size='sm'>
          <TableCaption>{chain} (SLIP0044: {slip})</TableCaption>
          <Thead>
            <Tr>
              <Th>Address</Th>
              <Th>Private Key</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item: Address, index: number) => (
                <Tr>
                    <Td>{item.address}</Td>
                    <Td>{item.privateKey}</Td>
                </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Address</Th>
              <Th>Private Key</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>);
}