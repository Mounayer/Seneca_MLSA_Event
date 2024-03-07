''' Working with YouTube API '''
import sys
import uuid
import os
from pathlib import Path
from openai import AzureOpenAI
from youtube_transcript_api import YouTubeTranscriptApi as yta
from dotenv import load_dotenv


load_dotenv()

# generate a random file name
def generate_filename(extension='txt'):
    '''generate a uuid and convert it to the string'''
    filename=str(uuid.uuid4())
    filename+=f".{extension}"
    return filename

def delete_file(file_path):
    ''' delete a file from system '''
    try:
        os.remove(file_path)
    except OSError:
        print("Error Deleting File with name ${file_path}")

def generate_summarization(link):
    ''' Generate summarization for the YouTube Video '''
    # client object to talk to Azure OpenAI
    client=AzureOpenAI(
        azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
        api_key=os.getenv("AZURE_OPENAI_API_KEY"),
        api_version=os.getenv("AZURE_API_VERSION"),
    )

    # File that stores the Transcript
    transcript_file=f"Transcripts/{generate_filename()}"
    path = Path(transcript_file)
    video = link.split('/')
    vid_id = video[-1]

    data = yta.get_transcript(vid_id)
    video_text=""
    for item in data:
        video_text+=item['text'] + " "      
    # print(video_text)
    path.write_text(video_text,encoding='utf-8')

    # Read the transcript file
    with open(transcript_file,'r',encoding='utf-8') as f:
        transcript=f.read()

    DEPLOYMENT_NAME=os.getenv("AZURE_DEPLOYMENT_NAME")
    # Call the OpenAI ChatCompletion endpoint using GPT-35-Turbo model
    summarized_video=client.chat.completions.create(
        model=DEPLOYMENT_NAME,
        messages=[
            {"role":"system","content":"You will be provided with a Video Transcript, and your task is to summarize the transcript as follows: \
                -Generate a Title for the Summary \
                -Overall summary of discussion\
                -Key takeaways \
                -If applicable, a list of topics that the transcript highlights; Give headings to each section"
    },
            {"role":"user","content":transcript},
        ])
    delete_file(transcript_file) # delete file from server

    return summarized_video.choices[0].message.content 
        
