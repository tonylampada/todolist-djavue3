from todolistdjv3.accounts.models import User
from todolistdjv3.accounts.tests import fixtures
from todolistdjv3.todo.models import Task


def test_criar_task_sem_login(client):
    resp = client.post("/api/tasks/add", {"new_task": "walk the dog"})
    assert resp.status_code == 401


def test_criar_task_com_login(client, db):
    fixtures.user_jon()
    client.force_login(User.objects.get(username="jon"))
    resp = client.post("/api/tasks/add", {"new_task": "walk the dog"})
    assert resp.status_code == 200


def test_criar_task_com_login(client, db):
    fixtures.user_jon()
    Task.objects.create(description="walk the dog")

    client.force_login(User.objects.get(username="jon"))
    resp = client.get("/api/tasks/list")
    data = resp.json()

    assert resp.status_code == 200
    assert data == {"tasks": [{"description": "walk the dog", "done": False, "id": 1}]}
