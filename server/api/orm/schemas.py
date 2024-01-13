from pydantic import BaseModel

class OperationsBaseSchema(BaseModel):
    operation: str
    result: str