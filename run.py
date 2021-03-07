from flaskblog import create_app
import os

app = create_app()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file('index.html')

@app.errorhandler(404)   
def not_found(e):   
  return app.send_static_file('index.html')

#check and run
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))

