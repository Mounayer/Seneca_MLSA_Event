''' Azure OpenAI Project - Tweet Generator '''

import os
from openai import AzureOpenAI
from dotenv import load_dotenv
# load environmental variables
load_dotenv()
# Configure AzureOpenAI Client
client=AzureOpenAI(
azure_endpoint = os.getenv("AZURE_OPENAI_ENDPOINT"),
api_key = os.getenv("AZURE_OPENAI_API_KEY"),
api_version = os.getenv("AZURE_API_VERSION"),
)
DEPLOYMENT_NAME=os.getenv("AZURE_DEPLOYMENT_NAME")

def ask_gpt(my_client,messages):
    '''make request to OpenAI GPT model using client and messages'''
    response=my_client.chat.completions.create(model=DEPLOYMENT_NAME,messages=messages,temperature=0.8)
    return response.choices[0].message.content

SYSTEM_PROMPT="You are a tweet generator. \
Your task is to generate tweets, based on the TOPICS and HASHTAGS that are given to you. \
You should respect the instructions: the TONE, the LENGTH, and the STYLE \
    DO NOT include more than 3 HASTAGS Include emojis to make the tweet more expressive"

def generate_tweet(
        topics: str, 
        hashtags: str, 
        tone: str='Casual', 
        style: str='informal',
        length_characters: int=240, 
        ):
    '''Generate tweet based on the parameters'''
    
    user_prompt=f"\
        TOPICS: {topics} \
        HASHTAGS: {hashtags} \
        TONE: {tone} \
        LENGTH: {length_characters} characters \
        STYLE: {style}"
    
    return ask_gpt(client,[
        {"role":"system","content":SYSTEM_PROMPT},
        {"role":"system","content":"“TOPICS: India, Politics, Narendra Modi HASHTAGS: dictatorship, democracy TONE: humorous LENGTH: 240 characters STYLE: informal”"},
        {"role":"assistant","content":"Just spotted Narendra Modi sipping tea in a teacup shaped like India! 🇮🇳☕️ Apparently, it's the latest trend in dictator fashion. Who knew democracy could be so stylish? 😂 #TeaTimeWithModi #DemocracyWithStyle #FashionableDictatorship"},
        {"role":"user","content":user_prompt}
        ])
    
     
