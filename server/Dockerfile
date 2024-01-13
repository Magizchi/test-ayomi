FROM python:3.8

WORKDIR /app

RUN python -m pip install --upgrade pip
COPY server/requirements.txt .
RUN pip install -r requirements.txt

COPY server/ .
EXPOSE 8000
CMD ["uvicorn", "api.routes.main:app", "--host", "0.0.0.0", "--port", "80"]

