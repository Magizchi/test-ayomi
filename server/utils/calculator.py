import re

def Calculator(data:list):
    newOperation = []
    number = re.compile(r'[0-9]')

    # Format 1: Oprérande et opérateur non mélanger dans la list
    for item in data:
        if (number.match(item)):
            newOperation.append(item)
        if (not number.match(item)):
            if (item == '+'):
                number1 = newOperation.pop()
                number2 = newOperation.pop()
                result = int(number1) + int(number2)
                newOperation.append(result)
            if (item == '*'):
                number1 = newOperation.pop()
                number2 = newOperation.pop()
                result = int(number1) * int(number2)
                newOperation.append(result)
            if (item == '-'):
                number1 = newOperation.pop()
                number2 = newOperation.pop()
                result = int(number1) - int(number2)
                newOperation.append(result)
            if (item == '/'):
                number1 = newOperation.pop()
                number2 = newOperation.pop()
                result = int(number1) - int(number2)
                newOperation.append(result)
    
    return newOperation