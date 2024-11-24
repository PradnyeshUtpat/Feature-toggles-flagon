import logging
import json
from flask import Flask, jsonify, request
from flask_cors import CORS
from flagon.backends.jsonfile import JSONFileBackend
from flagon.feature import Feature

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS

# Set up logger for Flagon
logger = logging.getLogger('flagon')
handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter('%(name)s - %(levelname)s - %(message)s'))
logger.addHandler(handler)
logger.setLevel(logging.DEBUG)

# Initialize Flagon backend and feature manager
backend = JSONFileBackend('config.json')
feature = Feature(backend, logger)


@app.route('/features', methods=['GET'])
def get_features():
    """Fetch all features and their statuses."""
    try:
        # Load data directly from the JSON file
        with open('config.json', 'r') as file:
            features = json.load(file)
        return jsonify(features), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/features/<feature_name>', methods=['PUT'])
def toggle_feature(feature_name):
    """Enable or disable a feature dynamically."""
    data = request.json
    status = data.get("status", None)

    if status is None:
        return jsonify({"error": "Status not provided"}), 400

    try:
        # Load the current data
        with open('config.json', 'r') as file:
            features = json.load(file)

        # Check if the feature exists
        if feature_name not in features:
            return jsonify({"error": f"Feature '{feature_name}' does not exist"}), 404

        # Update the feature's active status
        features[feature_name]['active'] = status

        # Write the updated data back to the file
        with open('config.json', 'w') as file:
            json.dump(features, file, indent=4)

        return jsonify({"message": f"Feature '{feature_name}' set to {status}"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
