// Function to handle the /generateelement API call
const handleGeneratePage = async () => {
  try {
    const response = await fetch("http://localhost:8080/generatepage", {
      method: "GET",
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

export default handleGeneratePage;
