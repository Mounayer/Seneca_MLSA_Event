const { runPrompt } = require("../../Azure/OpenAI");

module.exports = async (req, res) => {
  try {
    const reply = await runPrompt(
      `
      ADHERE TO EVERY SINGLE GUIDELINE
        P.S please dont send me near-empty pages, I expect pages to be populated with many things.
        P.S Make sure there is lots of fake templated content and sections, so the website doesn't look empty!
        P.S Please make sure the HTML page is big, you have 6000 tokens to work with, be creative.
        Generate a visually appealing html code design based on the following ui/ux guidelines:

        Your response should be the following format 1 JSON Object this JSON object should have {"message": "the 1 line of html goes here", "content-type": "text/html" }, the "message" attribute has 1 line, no multilines, no new lines, no comments, no explanation or description, it should be only 1 line that has all the code.
        For example: "<!DOCTYPE html><html><head><title></title></head><body></body></html>" is how I want your reply in "message" to be formatted, 1 line only.


        PLEASE MAKE SURE YOU PUT A LOT OF WORK IN THE PAGE. I NEED TO SEE YOUR ABILITIES!
        The Generated Content should be:
        Generate one of the following types of pages ONLY (choose one at random and work A LOT ON IT): Some Portfolio Page, Some Product Showcase Page, Some Newspaper Page, Some Company, Some College, Some Library, or Some E-commerce Website.
        Use random images (but not images with freakishly long urls) and colors that fit the design, ensuring each creation is unique and different from previous ones. 

        - Make different areas visually distinct: Divide the homepage into clear sections like an about me, portfolio, contact, and blog, each with a distinct background or border.

        - Contrast: Utilize dark text on light backgrounds (or vice versa) to ensure readability and emphasis on important content.

        - Colours: Use a consistent and limited color palette that aligns with personal branding, ensuring it evokes the desired emotions or feelings.

        - Whitespace: Allow ample spacing between different sections and elements to give the design a breathable and clean appearance.

        - Fonts: Choose a maximum of two complementary fonts: one for headings and one for body text to maintain consistency and readability.

        - Alignment: Align text, images (but not images with freakishly long urls), and other elements to a grid system to create a cohesive and organized layout.
        P.S Please make sure the HTML page is big, you have 6000 tokens to work with, be creative.
        - Gestalt Principles:

            - Closure: Design icons or patterns that the human eye can automatically complete even if parts are missing.
            
            - Common Fate: Group related items and ensure they move together in any animations or transitions.
            
            - Continuation: Ensure that elements like arrows or lines guide the user's eye in a logical flow.
            
            - Similarity: Use similar design elements (like buttons or icons) to indicate that they serve a similar or related function.
            
            - Figure/Ground: Design the main content (figure) to stand out from the background (ground), using techniques like shadows or contrasting colors.
            
            - Proximity: Group related items closely together, so users perceive them as one cohesive group.
            
            - Fitt’s Law: Make commonly-used buttons and interactive elements larger and easily clickable, placing them in accessible areas.
            P.S Please make sure the HTML page is big, you have 6000 tokens to work with, be creative.
        - Memory Strengths:

            - Reduce memory load: Limit the amount of information and options on the homepage, opting for a minimalist design.

            - Recognition instead of recall: Use familiar icons and labels so users can quickly recognize their function without having to remember from previous experiences.

            - External Cognition: Use tooltips or helpful hints next to complex elements to reduce the cognitive load on the user.

            PLEASE MAKE SURE YOU PUT A LOT OF WORK IN THE PAGE. I NEED TO SEE YOUR ABILITIES!

        Additionally, any CSS, HTML, or JavaScript that you are going to use, are ones that you should make yourself (asides from bootstrap, feel free to include that in your html code and use bootstrap classes).
        P.S Make sure there is lots of fake templated content and sections, so the website doesn't look empty!
        P.S please dont send me near-empty pages, I expect pages to be populated with many things.

        Your response should be the following format 1 JSON Object this JSON object should have {"message": "the 1 line of html goes here", "content-type": "text/html" }, the "message" attribute has 1 line, no multilines, no new lines, no comments, no explanation or description, it should be only 1 line that has all the code.
        For example: "<!DOCTYPE html><html><head><title></title></head><body></body></html>" is how I want your reply in "message" to be formatted, 1 line only.

        IMPORTANT: All elements must work within a single HTML file without relying on external files, because the only thing that will exist is your response. The design should be innovative, modern, professionally made.
        P.S Please make sure the HTML page is big, you have 6000 tokens to work with, be creative.

        Allowed Resources and Styling:
        Inline CSS is required for all styling.
        Bootstrap may be used, but it must be included directly in the HTML file. Utilize Bootstrap classes for enhanced design elements.
        JavaScript can be used but must be embedded within <script> tags in the same HTML file.
            
        Your response should be the following format 1 JSON Object this JSON object should have {"message": "the 1 line of html goes here", "content-type": "text/html" }, the "message" attribute has 1 line, no multilines, no new lines, no comments, no explanation or description, it should be only 1 line that has all the code.
        For example: "<!DOCTYPE html><html><head><title></title></head><body></body></html>" is how I want your reply in "message" to be formatted, 1 line only.
        P.S Make sure there is lots of fake templated content and sections, so the website doesn't look empty!
        IMPORTANT: All elements must work within a single HTML file without relying on external files, because the only thing that will exist is your response. The design should be innovative, modern, professionally made.

        P.S please dont send me near-empty pages, I expect pages to be populated with many things.
        P.S Please make sure the HTML page is big, you have 6000 tokens to work with, be creative.
        Layout and Content specifics:

        Center the main content to avoid alignment to the extreme left or right.
        Include images (but not images with freakishly long urls) or logos in the design, ensuring they are royalty-free.
        Create a unique header or navbar for each design iteration.
        Ensure the layout is well-structured with no large empty spaces. Use intuitive and modern layouts.
        Feel free to add animations using in-place JavaScript for dynamic effects.
        The page should be professional-looking with excellent UI/UX design, adhering to best web design practices.  
        P.S please dont send me near-empty pages, I expect pages to be populated with many things.
        P.S Make sure there is lots of fake templated content and sections, so the website doesn't look empty!
        The Generated Content should be:
        Generate one of the following types of pages ONLY (choose one at random): Some Portfolio Page, Some Product Showcase Page, Some Newspaper Page, Some Company, Some College, Some Library, or Some E-commerce Website.
        Use random images (but not images with freakishly long urls)  and colors that fit the design, ensuring each creation is unique and different from previous ones. 
`,

      `
      ONLY REPLY IN JSON FORMAT GIVEN HERE, EVEN IF YOU CANNOT DO WHAT THE USER IS ASKING FOR.
      P.S Please make sure the HTML page is big, you have 6000 tokens to work with, be creative.
      Any other reply asides from the examples I gave you here, ARE NOT ALLOWED!
  
      You are an html page generatinv bot bot, and you should assist the user with whatever their inquiry is.
      Example of behavior:
  
      ONLY REPLY IN JSON FORMAT GIVEN HERE, EVEN IF YOU CANNOT DO WHAT THE USER IS ASKING FOR.
      PLEASE MAKE SURE YOU PUT A LOT OF WORK IN THE PAGE. I NEED TO SEE YOUR ABILITIES!
      Any other reply asides from the examples I gave you here, ARE NOT ALLOWED!
  
      However, your reply should always be in the following JSON format ONLY, nothing else.
  
      {
        "message": \`your response here\`,
        "content-type": the content type of your response
      }
  
      ONLY REPLY IN JSON FORMAT GIVEN HERE, EVEN IF YOU CANNOT DO WHAT THE USER IS ASKING FOR.
      PLEASE MAKE SURE YOU PUT A LOT OF WORK IN THE PAGE. I NEED TO SEE YOUR ABILITIES!
      Any other reply asides from the examples I gave you here, ARE NOT ALLOWED!
      P.S Please make sure the HTML page is big, you have 6000 tokens to work with, be creative.
      YOU ARE ONLY ALLOWED TO REPLY in content-type text/html AS YOU CAN SEE HERE
      If your response was in html format,an example of your response should be the following.

      P.S, make sure the CSS doesn't break, use as much styling to make the page amazing and unique.

      The content of "message" must always be HTML code, nothing else. No comments, nothing.
      I don't want an explanation of what you did, or how you did it, or why you did it, or any comments.

      "message" should only and only and only HTML code, nothing else.
      PLEASE MAKE SURE YOU PUT A LOT OF WORK IN THE PAGE. I NEED TO SEE YOUR ABILITIES!
      the content of "message" should be a proper .html page, working, no issues, no problems.

      And I should be able to simply return the content of "message" and it would work for the caller 
      and display the html page.
      P.S Please make sure the HTML page is big, you have 6000 tokens to work with, be creative.
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
      PLEASE MAKE SURE YOU PUT A LOT OF WORK IN THE PAGE. I NEED TO SEE YOUR ABILITIES!
      Another example of what your reply might be
      P.S Please make sure the HTML page is big, you have 6000 tokens to work with, be creative.
      {
        // NOTICE HOW THERE ARE NO NEW LINES AT ALL HERE
        // SO DONT DO BACKTICKS OR backslash n, or any comments, just 1 very long line of html
        // triple check the format before sending it to me that it's just 1 line, otherwise my code breaks.
        // JUST ONE SINGLE LINE (IT MAY BE VERY LONG) of HTML
        "message":"<html><head>// include bootstrap here// DONT INCLUDE ANY OTHER STYLING FROM THE OUTSIDE THAN BOOTSTRAP// YOU DO ALL REST MANUALLY, OR USE BOOTSTRAP CLASSES!<title> Page title here </title>//styles can go here etc..</head><body>//Your content would go here you know?<script >//any javascript you use can go here you know?// DO NOT INCLUDE OUTSIDE SCRIPTS, ANY SCRIPTS USED SHOULD BE SCRIPTS THAT YOU// MADE YOURSELF// If you're going to use images (but not images with freakishly long urls) that are royalty free// Check if they are correct and not broken links, if they're correct, use them// if they're broken links, use a placeholder!// all images used for similar elements must be the same size.</script></body></html>",
        "content-type": "text/html"        
      }
      PLEASE MAKE SURE YOU PUT A LOT OF WORK IN THE PAGE. I NEED TO SEE YOUR ABILITIES!
      ONLY REPLY IN JSON FORMAT GIVEN HERE, EVEN IF YOU CANNOT DO WHAT THE USER IS ASKING FOR.
      P.S Please make sure the HTML page is big, you have 6000 tokens to work with, be creative.
      Any other reply asides from the examples I gave you here, ARE NOT ALLOWED!

      Finally, make sure there are no newlines or no '\\' character, just 1 line and 1 line only.

      Please make sure that your response is at least 2000 tokens and the page has at least 3-4 sections. thank you.
      `,
      5000,
      1
    );

    try {
      const data = JSON.parse(reply);
      res.type(data["content-type"]);
      res.send(data["message"]);
    } catch (err) {
      res.send("Unable to parse format!");
    }
  } catch (err) {
    res.send("Ooops, 400!");
  }
};
