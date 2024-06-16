from twilio.rest import Client
from dotenv import load_dotenv
import os 

load_dotenv()
# Your Twilio account SID and Auth Token
account_sid = os.getenv("ACCOUNT_SID")
auth_token = os.getenv("AUTH_TOKEN")

client = Client(account_sid, auth_token)

message = client.messages.create(
    body='Hello from Python!',
    from_='+16364860919',  # Twilio sandbox number
    to='+918291025964'       # Your WhatsApp number
)

print(message.sid)
