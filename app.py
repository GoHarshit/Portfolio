from flask import Flask, jsonify, request,make_response
from flask_cors import CORS,cross_origin
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_DBNAME"]="Flask_React"
app.config["MONGO_URI"] = "mongodb://localhost:27017/Users"
mongo = PyMongo(app)
CORS(app,supports_credentials=True)


@app.route("/")
@cross_origin()
def start():
    return "<p>Hello from backend</p>"


@app.route("/send", methods=['POST', 'OPTIONS'])
@cross_origin(origins=['http://localhost:3000'])
def register():
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers['Access-Control-Allow-Methods'] = 'POST'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response

    if request.method == 'POST':
        if not request.is_json:
            return jsonify({"error": "Request data must be in JSON format"}), 400

        data = request.get_json()
        mongo.db.users.insert_one({
            'Name': data['Name'],
            'email': data['email'],
            'mobile': data['mobile'],
            'message': data['message'],
        })
        return jsonify({"message": "Sended successfully"}), 200
    else:
        return jsonify({"error": "Method not allowed"}), 405
   
if __name__ == "__main__":
    app.run(debug=True)
