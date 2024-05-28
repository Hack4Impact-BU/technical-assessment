import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Community = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/emails")
      .then((response) => setEmails(response.data))
      .catch((error) => console.error("Error fetching emails:", error));
  }, []);

  return (
    <div
      style={{ padding: "20px", backgroundColor: "#ffffff", marginTop: "64px" }}
    >
      <h2>Community Mailing List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emails.map((email, index) => (
              <TableRow key={index}>
                <TableCell>{email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Community;
