import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import {dateTrans} from "../../utils/DateParce"

export const CryptoHistory = ({props}) => {
  return <BaseTable>
  <THead>
    <tr>
      <Th>№</Th>
      <Th>PRICE</Th>
      <Th>AMOUNT</Th>
      <Th>DATE</Th>
    </tr>
  </THead>

    <tbody>
      {props.map(({id, price, amount, date}, index) => {
return (<Tr key={id}>
      <Td>{index + 1}</Td>
      <Td>{price}</Td>
      <Td>{amount}</Td>
      <Td>{dateTrans(date)}</Td>
    </Tr>
      )})}
  </tbody>
</BaseTable>
};
