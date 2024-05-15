from flask import Flask, request, jsonify

app = Flask(__name__)

# Dummy database to simulate user authentication
users = {
    "elliot": "skater1",
}

@app.route('/dashboard', methods=['GET'])
def login():
    username = request.args.get('username')
    password = request.args.get('password')

    if username is None or password is None:
        return jsonify({"error": "Username and password parameters are required"}), 400

    if username in users and users[username] == password:
        return jsonify({"message": "Login successful FLAG: CYBERTM{bru73f0rc34bl3_p455w0rd5_4r3_345y_74r6375}"}), 200
    else:
        return jsonify({"error": "Invalid username or password"}), 401

if __name__ == '__main__':
    app.run(debug=True)
