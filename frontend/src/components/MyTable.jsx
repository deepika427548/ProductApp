import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  Container,
  TableBody,
} from "@mui/material";
import dummyData from "../assets/json/PRODUCT";

export default function MyTable() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(dummyData);
  }, []);

  return (
    <>
      <Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Sl no
                </TableCell>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Title
                </TableCell>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Description
                </TableCell>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Image
                </TableCell>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Price
                </TableCell>
                <TableCell sx={{ fontSize: 16, fontWeight: "bold" }}>
                  Quantity
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.serial_no}</TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.Description}</TableCell>
                  <TableCell>{row.image}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
