import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const NewsTable = () => {
  const [newsData, setNewsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [states, setStates] = useState([]);
  const [lccns, setLccns] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedLccn, setSelectedLccn] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    axios
      .get(`http://localhost:5000/api/newspapers?page=${page}`)
      .then((response) => {
        const newspapers = response.data.newspapers;
        setNewsData(newspapers);
        setFilteredData(newspapers);
        setTotalPages(response.data.totalPages);

        const states = [...new Set(newspapers.map((news) => news.state))];
        const lccns = [...new Set(newspapers.map((news) => news.lccn))];
        setStates(states);
        setLccns(lccns);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    filterData(event.target.value, selectedLccn);
  };

  const handleLccnChange = (event) => {
    setSelectedLccn(event.target.value);
    filterData(selectedState, event.target.value);
  };

  const filterData = (state, lccn) => {
    let filtered = newsData;
    if (state) filtered = filtered.filter((news) => news.state === state);
    if (lccn) filtered = filtered.filter((news) => news.lccn === lccn);
    setFilteredData(filtered);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/emails", { email })
      .then((response) => {
        setEmail("");
        alert("Email added successfully!");
      })
      .catch((error) => alert("Error adding email."));
  };

  return (
    <div
      style={{ padding: "20px", backgroundColor: "#ffffff", marginTop: "64px" }}
    >
      <FormControl
        variant="outlined"
        fullWidth
        style={{ marginBottom: "20px" }}
      >
        <InputLabel>State</InputLabel>
        <Select
          value={selectedState}
          onChange={handleStateChange}
          label="State"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        variant="outlined"
        fullWidth
        style={{ marginBottom: "20px" }}
      >
        <InputLabel>LCCN</InputLabel>
        <Select value={selectedLccn} onChange={handleLccnChange} label="LCCN">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {lccns.map((lccn) => (
            <MenuItem key={lccn} value={lccn}>
              {lccn}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TableContainer component={Paper} style={{ marginBottom: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>State</TableCell>
              <TableCell>LCCN</TableCell>
              <TableCell>URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((news) => (
              <TableRow key={news.lccn}>
                <TableCell>{news.title}</TableCell>
                <TableCell>{news.state}</TableCell>
                <TableCell>{news.lccn}</TableCell>
                <TableCell>{news.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </Button>
        <span style={{ margin: "0 20px" }}>
          Page {page} of {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </Button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Join Our Mailing List</h2>
        <form onSubmit={handleEmailSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            style={{ marginBottom: "20px" }}
          />
          <Button type="submit" variant="contained" color="primary">
            Join Mailing List
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsTable;
