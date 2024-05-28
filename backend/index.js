const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let emails = [];

app.get("/api/emails", (req, res) => {
  res.json(emails);
});

app.post("/api/emails", (req, res) => {
  const { email } = req.body;
  if (email) {
    emails.push(email);
    res.status(201).json({ message: "Email added successfully" });
  } else {
    res.status(400).json({ message: "Email is required" });
  }
});

app.get("/api/newspapers", async (req, res) => {
  try {
    const response = await axios.get(
      "https://chroniclingamerica.loc.gov/newspapers.json"
    );
    const newspapers = response.data.newspapers;

    const page = parseInt(req.query.page) || 1;
    const limit = 100;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = newspapers.slice(startIndex, endIndex);
    const totalPages = Math.ceil(newspapers.length / limit);

    res.json({
      newspapers: result,
      page,
      totalPages,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data from API" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
