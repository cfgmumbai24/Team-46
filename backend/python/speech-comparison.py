from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq

import os

from dotenv import load_dotenv
load_dotenv()

groq_api_key = os.getenv("GROQ_API_KEY")

chat = ChatGroq(temperature=0, groq_api_key=groq_api_key, model_name="mixtral-8x7b-32768")

system = "You are a teacher and your job is the compare the 2 texts and give us the accuracy in percentage. Just answer in 1 word."
human = "{text}"
prompt = ChatPromptTemplate.from_messages([("system", system), ("human", human)])

chain = prompt | chat
    

def get_answer(original_text, our_text):
    str = "Original text: "+ original_text + "\n" + "Our text: " + our_text
    ans = chain.invoke({"text": str})
    return ans.content

# ans = get_answer("hello im a cat", "hello")
# print(ans)

    