// Function to handle the /generateelement API call
const handleGenerateElementApiCall = async (prompt) => {
  try {
    const response = await fetch("http://localhost:8080/generateelement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (response.ok) {
      const data = await response.text();
      return data;
    } else {
      console.error(
        "Error making /generateelement API call:",
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error making /generateelement API call:", error);
  }
};

export default handleGenerateElementApiCall;
