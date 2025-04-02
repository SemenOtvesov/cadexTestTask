from flask import Flask, request

import os
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


@app.route('/service/message', methods=['POST'])
def start():
	data = json.loads(request.data)
	sendObj = {'status': 'ok', 'serverMessage': f'Thank you for your interest, {data['name']}'}
	return sendObj

if __name__ == '__main__':
	os.environ.setdefault('FLASK_ENV', 'development')
	app.run(debug=True, port=443, host='0.0.0.0')

	# A very simple Flask Hello World app for you to get started with...

	from flask import Flask, request
	from flask_cors import CORS
	import json

	app = Flask(__name__)
	CORS(app)
