import flask, flask_login
from flask import Flask, Response, flash, redirect, render_template, request, session, abort, jsonify, json
import config
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)
app.config['TESTING'] = False
app.config

def send_mail(name, subj, user_email, body):
    msg = MIMEMultipart()
    msg['Subject'] = subj
    msg['From'] = 'Gmail server'
    msg['CC'] = name
    msg['To'] = 'Yuri Yerastov'
    msg.attach(MIMEText(body, 'plain'))
    server = smtplib.SMTP('smtp.gmail.com:587')
    server.set_debuglevel(1)
    server.ehlo()
    server.starttls()
    server.login(config.email_username, config.email_password)
    server.sendmail(config.email_username, user_email, msg.as_string())
    server.quit()
    return

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    print('I am here')
    email = flask.request.form['email']
    name = flask.request.form['name']
    subject = flask.request.form['subject']
    message = flask.request.form['message']
    send_mail(name, subject, email, message)
    return 'Your message has been sent. I will get back to you shortly. Thank you'

if __name__ == "__main__":
    app.run(port=8000)
