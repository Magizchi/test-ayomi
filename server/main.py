from fastapi import FastAPI, Response, status, Depends
from fastapi.responses import JSONResponse, FileResponse
from utils.calculator import Calculator
from sqlalchemy.orm import Session
from utils.csvConverter import convert_db_to_csv
from orm import crud, models, schemas
from orm.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)
# PAS LA BONNE METHODE
from fastapi.middleware.cors import CORSMiddleware


# PAS LA BONNE METHODE
origins = [
    "http://localhost",
    "http://localhost:5173",
]

app = FastAPI()

# PAS LA BONNE METHODE
app.add_middleware(
    CORSMiddleware,
    allow_origins='*',
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items")
def read_item(q: str, db: Session = Depends(get_db)):
    # Si q est vide retourner 405
    if not q:
        return JSONResponse(status_code=405, content={"message": "Manque l'opération"})
    
    # Vérifier si q est correctement construit 

    # Transformer q en tableau
    operation = q.replace(' ', '+')
    stack = operation.split(',')

    # afficher le resultat
    result = Calculator(stack)

    #sauvegarder dans la bdd
    newOperation = {
        'calc': operation,
        'result': result,
    }
    return crud.create_operations(db=db, operation=newOperation)

@app.get("/all-operations")
async def get_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    operation = crud.get_all_operations(db)
    return {"operation": operation}

@app.get("/csv")
async def get_operation_csv(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    operations = crud.get_all_operations(db)
    csvFile = convert_db_to_csv(operations, "csv.file")
    print(csvFile)
    return FileResponse(csvFile)

