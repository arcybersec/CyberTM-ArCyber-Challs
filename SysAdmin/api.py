import subprocess
from flask import Flask, jsonify, request
from flask_cors import CORS
import shlex

app = Flask(__name__)
CORS(app)

AUTH_TOKEN = "g3JQR0Yle8MTuHEnsl83Tyljf1FEckdh"

@app.route('/', methods=['GET'])
def getInfo():
    try:
        result = subprocess.run("cat info.txt", shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
        output = result.stdout.strip()
        if result.stderr:
            error = result.stderr.strip()
            return jsonify({"error": error}), 500
        return jsonify({"info": output})
    except subprocess.CalledProcessError as e:
        return jsonify({"error": str(e)}), 500

@app.route('/send-command', methods=['POST'])
def executeCommandPost():
    data = request.get_json()
    if "token" not in data or data["token"] != AUTH_TOKEN:
        return jsonify({"error": "Unauthorized"}), 401
    if "command" not in data:
        return jsonify({"error": "Command not provided"}), 400

    command = data["command"]
    try:
        result = subprocess.run(command, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
        output = result.stdout.strip()
        if result.stderr:
            error = result.stderr.strip()
            return jsonify({"error": error}), 500
        return jsonify({"output": output})
    except subprocess.CalledProcessError as e:
        return jsonify({"error": str(e)}), 500

# The same thing but with cool emojis 🧐
@app.route('/send-command', methods=['PUT'])
def executeCommandPut():
    data = request.get_json()

    allowed_commands = ['ls', 'cat', 'echo', 'pwd', 'exiftool']

    command = data["command"]

    tokens = shlex.split(command)
    if tokens[0] not in allowed_commands:
        return jsonify({"output": "Command not allowed"})
    try:
        print(command)
        result = subprocess.run(command, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
        output = result.stdout.strip()
        
        if result.stderr:
            error = result.stderr.strip()
            return jsonify({"error": error}), 500
        return jsonify({"output": output})
    except subprocess.CalledProcessError as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run()
