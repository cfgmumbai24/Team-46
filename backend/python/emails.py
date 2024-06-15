import smtplib
from email.mime.text import MIMEText

def send_email(body, recipients):
    msg = MIMEText(body)
    msg['Subject'] = "Analyis Report"
    msg['From'] = "surabhiwaingankar@gmail.com"
    msg['To'] = ', '.join(recipients)
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
       smtp_server.login("surabhiwaingankar@gmail.com", "tcjo fbvb dwlb dyzi")
       smtp_server.sendmail("surabhiwaingankar@gmail.com", recipients, msg.as_string())
    print("Message sent!")

