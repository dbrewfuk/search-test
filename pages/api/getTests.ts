// pages/api/getData.ts
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("Received request:", req.url);
  try {
    // Fetch the external JSON file
    const response = await axios.get(
      "https://demo.kctcs.edu/untitled/data.json",
    );

    // Extract the data from the response
    const jsonData = response.data;

    // Send the JSON data as the response
    res.status(200).json(jsonData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Unable to fetch data" });
  }
}
