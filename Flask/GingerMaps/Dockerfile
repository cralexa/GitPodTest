FROM python:3.7.3-alpine3.9
ENV FLASK_APP main.py
ENV FLASK_RUN_HOST 0.0.0.0
COPY . /app
WORKDIR /app
RUN pip install -r ./documentation/requirements.txt

CMD ["python","./src/web/main.py"]
