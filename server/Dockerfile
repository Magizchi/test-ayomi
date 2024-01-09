FROM python:3.8

WORKDIR /app

RUN python -m pip install --upgrade pip
RUN pip install fastapi
RUN pip install "uvicorn[standard]"
RUN pip install sqlalchemy pymysql
RUN pip install pandas

COPY server/ .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]

