from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from .database import Base

class OperationsModel(Base):
    __tablename__ = "operations"

    id = Column(Integer, primary_key=True)
    operation = Column(String(255))
    result = Column(String(255))