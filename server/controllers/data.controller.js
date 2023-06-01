import { spawn } from "child_process";

const predictData = async (req, res) => {
  try {
    const { forecastData } = req.body;
    console.log(forecastData);

    let scriptOutput = ""; // Variable to store the script output

    // Call the Python script with the data as arguments
    const pythonProcess = spawn("python", [
      "../server/python/index.py",
      JSON.stringify(forecastData),
    ]);

    // Handle data output from the Python script
    pythonProcess.stdout.on("data", (data) => {
      console.log(`Python script output in Backend: ${data}`);
      scriptOutput += data; // Append the output to the scriptOutput variable
    });

    // Handle errors from the Python script
    pythonProcess.stderr.on("data", (data) => {
      console.error(`Python script error: ${data}`);
      res.status(500).send("Internal server error"); // Send an error response back to the client
    });

    // Handle the Python script process exit
    pythonProcess.on("exit", (code) => {
      console.log(`Python script exited with code ${code}`);

      if (code !== 0) {
        console.log("Error executing Python script.");
        res.status(500).send("Internal server error"); // Send an error response back to the client
      } else {
        console.log("Sending response...");
        console.log("this is scriptOutput to client: ", scriptOutput);
        res.json({ result: JSON.parse(scriptOutput) }); // Send the output back to the client as a JSON response
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error"); // Send an error response back to the client
  }
};

export { predictData };
