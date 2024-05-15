"""
TODO:
- Add some better authentication for the api (asymmetric)
- Whitelist specific urls to be flag eligible
- Change methods
"""

import sys
import json
import uuid
from flask import Flask, jsonify
from flask_cors import CORS

#### Setup ####

app = Flask(__name__)
cors = CORS(app)


FLAG_URL = "flagurl"

#### Routing ####


@app.route("/api/qr/generate/<string:qr_url>", methods=["GET"])
def create_code_url(qr_url):
    try:
        with open("./qrs.json", "r") as f:
            try:
                json_data = json.load(f)
            except json.decoder.JSONDecodeError:
                json_data = []

            new_data = {
                "url": qr_url,
                "id": str(uuid.uuid4()),
                "wl": qr_url == FLAG_URL,
            }

            json_data.append(new_data)

        with open("./qrs.json", "w") as f:
            json.dump(json_data, f, indent=4)

        return {"id": new_data["id"]}, 200
    except:
        return "Server Error", 300


@app.route("/api/qr/<string:id>", methods=["GET"])
def get_code_url(id):
    try:
        with open("./qrs.json", "r") as f:
            json_data = json.load(f)
            sqr = None
            sqr = [qr for qr in json_data if qr["id"] == id]

        if sqr:
            return {
                "flag": "CYBERTM{w3lc0m3_70_0ur_5y573m}"
                if sqr[0]["wl"] == True
                else "CTF{7ry_h4r63r}",
                "url": sqr[0]["url"],
            }, 200
        else:
            return {"flag": "Flag Not Found"}
    except:
        return "Server Error", 300


if __name__ == "__main__":
    app.run(debug=True)
