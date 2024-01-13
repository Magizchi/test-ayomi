from sqlalchemy.orm import Session

from . import models, schemas


def get_all_operations(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.OperationsModel).offset(skip).limit(limit).all()

def create_operations(db: Session, operation: schemas.OperationsBaseSchema):
    db_oprations = models.OperationsModel(operation=operation['calc'], result=operation['result'])
    db.add(db_oprations)
    db.commit()
    db.refresh(db_oprations)
    return db_oprations