from fastapi import FastAPI, Response, status
from fastapi.responses import JSONResponse
from utils.calculator import Calculator

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



@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items")
def read_item(q: str):
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

    return JSONResponse(status_code=200, content={"resultat": result})