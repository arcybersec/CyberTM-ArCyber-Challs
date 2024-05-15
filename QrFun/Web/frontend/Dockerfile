FROM python:3.8-slim-buster AS builder

COPY index.html /

EXPOSE 8080

CMD ["python","-m", "http.server", "8080"]



