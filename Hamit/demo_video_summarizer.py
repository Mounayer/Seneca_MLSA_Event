''' Demonstration of Youtube Video Summarizer '''

import gradio as gr
from video_summarizer import generate_summarization as summarize_video

# Video Summarization Function
def summarize_video_interface(youtube_link):
    ''' returns the result of summarize_video function'''
    summary=summarize_video(youtube_link)
    return summary

# Configuring Gradio Interface
iface=gr.Interface(
    fn=summarize_video_interface,
    inputs=gr.Textbox(placeholder="Please paste the YouTube Video Link",label="YouTube Video Link"),
    outputs=gr.Textbox(placeholder="Summary will appear here",label="Summary of the Video",show_copy_button=True),
)


iface.launch(share=True)
