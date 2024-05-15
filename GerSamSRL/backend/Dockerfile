FROM python:3.8-slim-buster AS builder

WORKDIR /backend

COPY requirements.txt /backend

RUN pip3 install -r requirements.txt

COPY . /backend

EXPOSE 5000

ENV FLASK_APP=app.py

CMD ["flask","run","--host=192.168.122.35"]


