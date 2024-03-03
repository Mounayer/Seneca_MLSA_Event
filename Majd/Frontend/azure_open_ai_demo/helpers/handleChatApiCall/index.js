// Function to handle the /chat API call
const handleChatApiCall = async (prompt) => {
  try {
    const response = await fetch("http://localhost:8080/chat", {
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
      console.error("Error making /chat API call:", response.statusText);
    }
  } catch (error) {
    console.error("Error making /chat API call:", error);
  }
};

export default handleChatApiCall;
