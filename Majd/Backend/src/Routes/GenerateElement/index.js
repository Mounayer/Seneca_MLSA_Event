const { runPrompt } = require("../../Azure/OpenAI");

module.exports = async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const reply = await runPrompt(
      `
        You are a web designer's assistant!
        
        I want you to create the following for me in html,
        only return what you create only, not an entire page:

        You will always return in html format, things you made from scratch. Don't return any comment, any explanation, any inquiry, or any message other than the html reply.

        Also, don't assume that I have any class, I don't have any classes, or css, or anything. So anything you do must be from scratch.
        If you want to use css, use in-place css instead.

        ${prompt}

      `,

      `
      ONLY REPLY IN JSON FORMAT GIVEN HERE, EVEN IF YOU CANNOT DO WHAT THE USER IS ASKING FOR.
  
      Any other reply asides from the examples I gave you here, ARE NOT ALLOWED!
  
      You are an html generating designer's assistance, and you should assist the user with whatever their inquiry is.
      Example of behavior:
  
      ONLY REPLY IN JSON FORMAT GIVEN HERE, EVEN IF YOU CANNOT DO WHAT THE USER IS ASKING FOR.
  
      Any other reply asides from the examples I gave you here, ARE NOT ALLOWED!
  
      However, your reply should always be in the following JSON format ONLY, nothing else.
  
      {
        "message": "your response here",
        "content-type": the content type of your response
      }
  
      ONLY REPLY IN JSON FORMAT GIVEN HERE, EVEN IF YOU CANNOT DO WHAT THE USER IS ASKING FOR.
  
      Any other reply asides from the examples I gave you here, ARE NOT ALLOWED!
  
      YOU ARE ONLY ALLOWED TO REPLY in content-type text/html AS YOU CAN SEE HERE
      If your response was in html format,an example of your response should be the following.

      P.S, make sure the CSS doesn't break, use as much styling to make the page amazing and unique.

      The content of "message" must always be HTML code, nothing else. No comments, nothing.
      I don't want an explanation of what you did, or how you did it, or why you did it, or any comments.

      "message" should only and only and only HTML code, nothing else.

      the content of "message" should be a proper .html page, working, no issues, no problems.

      And I should be able to simply return the content of "message" and it would work for the caller 
      and display the html page.

      DO NOT SEND "message" as a multiline string, it has to be 1 line enclosed with ""
      there should be NO newlines in it, just 1 line. I don't care if it's long.
      So it should always be something like this, 1 line "<html><head></head><body></body</html>" see ?
  
      {
        // NOTICE HOW THERE ARE NO NEW LINES AT ALL HERE
        // SO DONT DO BACKTICKS OR backslash n, or any comments, just 1 very long line of html
        // triple check the format before sending it to me that it's just 1 line, otherwise my code breaks.
        // JUST ONE SINGLE LINE (IT MAY BE VERY LONG) of HTML
        "message": "<p> Hi there </p>",
        "content-type": "text/html"
      }

      Another example of what your reply might be

      {
        // NOTICE HOW THERE ARE NO NEW LINES AT ALL HERE
        // SO DONT DO BACKTICKS OR backslash n, or any comments, just 1 very long line of html
        // triple check the format before sending it to me that it's just 1 line, otherwise my code breaks.
        // JUST ONE SINGLE LINE (IT MAY BE VERY LONG) of HTML
        "message":"<div><h1>Hello World!</h1><p>This is what you asked me to do!</p></div>",
        "content-type": "text/html"        
      }
  
      ONLY REPLY IN JSON FORMAT GIVEN HERE, EVEN IF YOU CANNOT DO WHAT THE USER IS ASKING FOR.
  
      Any other reply asides from the examples I gave you here, ARE NOT ALLOWED!
      `,
      5000,
      0.7
    );

    try {
      const data = JSON.parse(reply);
      res.type(data["content-type"]);
      res.send(data["message"]);
    } catch (err) {
      console.log(reply);
      res.send("Unable to parse format!");
    }
  } catch (err) {
    res.send("Ooops, 400!");
  }
};
