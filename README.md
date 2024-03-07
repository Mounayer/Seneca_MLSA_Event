# Seneca Polytechnic - Microsoft Learn Event

## Speakers

- [Majd Al Mnayer](https://mvp.microsoft.com/en-US/studentambassadors/profile/a9c7e159-8323-4ec9-8804-21f67fce6a1e) - [GitHub](https://github.com/Mounayer) - Microsoft Learn Student Ambassador
- [Hamit Sehjal](https://mvp.microsoft.com/en-US/studentambassadors/profile/359c1cbf-2337-4cd7-ba06-ffa7923900ff) - [GitHub](https://github.com/hamitsehjal) - Microsoft Learn Student Ambassador

## Topic

Generative AI and Azure OpenAI.

Join us at the Microsoft Learn Event: "Generative AI and Azure OpenAI." Explore the fundamentals of Generative AI, understand its impact on the developer landscape, and discover practical ways to integrate it into your projects using Azure OpenAI. Whether you're a Senior Year or Freshman, this event provides insights into the world of Generative AI and its seamless integration with Azure OpenAI. Learn how this transformative technology can enhance your projects and stay ahead in the rapidly evolving tech landscape. Don't miss the opportunity to gain valuable knowledge and skills.

## Event Place & Time

- College: [Seneca Polytechnic](https://www.senecapolytechnic.ca/home.html)
- Location: 1750 Finch Ave E, North York, ON, CA, M2J 2X5
- Date: Thu, Mar 7, 2024
- Time: 1 PM - 2:15 PM EST (GMT-5)
- Room: K3272

## Majd's Demo

Thanks to Azure OpenAI and their easily accessible GPT models, this app can do the following:
- Allows you to talk with a GPT-model.
- Generates HTML element designs using CSS.
- Generates entire web pages that follow design principles with one click.

And the best thing is, you can see the code as well!

### Prerequisites

Environment variables must be supplied for the Backend:

    - AZURE_OPENAI_KEY: your azure openai key
    - AZURE_OPENAI_ENDPOINT: your azure openai endpoint
    - OPENAI_DEPLOYMENT_NAME: what you named your model

### Installation

Frontend:

    npm install

Backend:

    npm install

### How To Run

Frontend:

    npm run dev

Backend:

    npm run dev

## Hamit's Demo
The Project consists of two small LLM powered apps built using minimal lines of code.

1. Tweet Generator: Generate a tweet based on events, topics, hashtags specified by user. Tone and Style of the tweet can be configured by User on Go.

2. Video Summarizer: Paste the link of the YouTube Video and it summarizes the content of the video for you. See the Key Highlights and Summary of any Video in seconds

The Frontend is configured using [Gradio](https://www.gradio.app) - *Awesome tool*
### Prerequisites

Python Version:
Python 3.7 or higher is required.

### Setup
1. Clone the Repository and change the directory
```
git clone https://github.com/Mounayer/Seneca_MLSA_Event.git
cd Hamit
```

2. Install Dependencies
```
pip install -r requirements.txt
```

3. Configure Environment
```
cp .env.example .env
```

4. Run the scripts
- To run Tweet Generator
```python
python demo_tweet_generator.py
```
- To run Video Summarizer
```python
python demo_video_summarizer.py
```
