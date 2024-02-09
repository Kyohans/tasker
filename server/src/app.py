from flask import Flask, request, jsonify
from mysql.connector import connect

from dotenv import load_dotenv
import os

app = Flask(__name__)

def connect_db():
    return connect(
        host = os.environ['TASKER_DB_URI'],
        user = os.environ['TASKER_DB_USER'],
        password = os.environ['TASKER_DB_PW'],
        database = os.environ['TASKER_DB_NAME']
    )

def serialize_users(data: list[tuple]) -> dict:
    return {
        user[0]: {
            'user_id': user[0],
            'user_name': user[1],
            'user_email': user[2]
        }
        for user in data
    } if data else {}

def serialize_projects(data: list[tuple]) -> dict:
    return {
        project[0]: {
            'project_id': project[0],
            'managed_by': project[1],
            'project_name': project[2],
            'project_description': project[3]
        }
        for project in data
    } if data else {}

def serialize_tasks(data: list[tuple]) -> dict:
    return {
        task[0]: {
            'task_id': task[0],
            'project_id': task[1],
            'task_name': task[2],
            'task_description': task[3],

        }
        for task in data
    } if data else {}

@app.route("/users", methods = ['GET'])
def get_all_users():
    db = connect_db()
    cursor = db.cursor()

    query = 'select * from User'
    cursor.execute(query)

    response = cursor.fetchall()
    cursor.close()
    db.close()

    return jsonify(serialize_users(response))

@app.route("/users/<int:user_id>", methods = ['GET'])
def get_user_by_id(user_id: int):
    db = connect_db()
    cursor = db.cursor()

    query = 'select * from User where user_id = %s'
    cursor.execute(query, (user_id,))

    response = cursor.fetchall()
    cursor.close()
    db.close()

    return jsonify(serialize_users(response))

@app.route("/users", methods = ['POST'])
def post_user():
    db = connect_db()
    cursor = db.cursor()

    data = request.json
    query = 'insert into User (user_name, user_email) values (%s, %s)'
    cursor.execute(query, (data['user_name'], data['user_email']))

    db.commit()
    cursor.close()
    db.close()

    return jsonify({'message': 'user added successfully'})

@app.route("/projects", methods = ['GET'])
def get_all_projects():
    db = connect_db()
    cursor = db.cursor()

    query = 'select * from Project'
    cursor.execute(query)

    response = cursor.fetchall()
    cursor.close()
    db.close()

    return jsonify(serialize_projects(response))

@app.route("/projects/<int:project_id>", methods = ['GET'])
def get_project_by_id(project_id: int):
    db = connect_db()
    cursor = db.cursor()

    query = 'select * from Project where project_id = %s'
    cursor.execute(query, (project_id,))

    response = cursor.fetchall()
    cursor.close()
    db.close()

    return jsonify(serialize_projects(response))

@app.route("/projects", methods = ['POST'])
def post_project():
    db = connect_db()
    cursor = db.cursor()

    data = request.json
    query = 'insert into Project (user_id, project_name, project_description) values (%s, %s, %s)'
    cursor.execute(query, (data['user_id'], data['project_name'], data['project_description']))

    db.commit()
    cursor.close()
    db.close()

    return jsonify({'message': 'project added successfully'})

@app.route("/projects/<int:project_id>/tasks", methods = ['GET'])
def get_all_tasks_by_project_id(project_id: int):
    db = connect_db()
    cursor = db.cursor()

    query = 'select * from Task where project_id = %s'
    cursor.execute(query, (project_id,))

    response = cursor.fetchall()
    cursor.close()
    db.close()

    return jsonify(serialize_tasks(response))

@app.route("/projects/<int:project_id>/tasks/<int:task_id>", methods = ['GET'])
def get_task_by_id(project_id: int, task_id: int):
    db = connect_db()
    cursor = db.cursor()

    query = 'select * from Task where project_id = %s and task_id = %s'
    cursor.execute(query, (project_id, task_id))

    response = cursor.fetchall()
    cursor.close()
    db.close()

    return jsonify(serialize_tasks(response))

@app.route("/projects/<int:project_id>", methods = ['POST'])
def post_task(project_id: int):
    db = connect_db()
    cursor = db.cursor()

    data = request.json
    query = 'insert into Task (project_id, task_name, task_description) values (%s, %s, %s)'
    cursor.execute(query, (project_id, data['task_name'], data['task_description']))

    db.commit()
    cursor.close()
    db.close()

    return jsonify({'message': 'task added successfully'})

if __name__ == '__main__':
    load_dotenv()
