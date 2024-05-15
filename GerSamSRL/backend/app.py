import json
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
#### Controllers ####
def getCardData():
    try:
        carDataToBeServed = []
        with open("./masini.json", 'r') as carFile:
            carData = json.load(carFile)
            for car in carData:
                carDataToBeServed.append({
                    "id":car['id'],
                    "photo":car['photo'],
                    "title":car['title'],
                    "newStatus":car['newStatus'],
                    "description":car['description'],
                    "kilometers":car['kilometers'],
                    "color":car['color'],
                })
        return carDataToBeServed
    except FileNotFoundError:
        print("Error: JSON file not found. ")
        return None
    except json.JSONDecodeError:
        print("Error: JSON file is not valid JSON.")
        return None
    except KeyError:
        print("Error: JSON file does not contain the expected structure.")
        return None
    
def vulnerableGetAllData(carId):
    try:
        with open("./masini.json", 'r') as carFile:
            carData = json.load(carFile)
            specificCar = [car for car in carData if car['id'] == carId]
            if specificCar:
                return specificCar
            else:
                return None
                
    except FileNotFoundError:
        print("Error: JSON file not found. ")
        return None
    except json.JSONDecodeError:
        print("Error: JSON file is not valid JSON.")
        return None
    except KeyError:
        print("Error: JSON file does not contain the expected structure.")
        return None
        

@app.route('/api/carddata', methods=['GET'])
def cardGet():
    data = getCardData()
    if data != None:
        return jsonify(data)

@app.route('/api/cardata/<string:id>', methods=['GET'])
def carGet(id):
    data = vulnerableGetAllData(id)
    if data != None:
        return jsonify(data[0])
    



if __name__ == '__main__':
    getCardData()
    app.run()



