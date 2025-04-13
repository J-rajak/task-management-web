// src/components/Dashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/tasks",
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Container className="mt-5">
      <h3 className="text-center mb-4">Task Manager</h3>

      <Form onSubmit={addTask}>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Col>
          <Col md={5}>
            <Form.Control
              type="text"
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Col>
          <Col md={3}>
            <Button type="submit" variant="primary" className="w-100">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>

      <Row>
        {tasks.length === 0 ? (
          <Col>
            <p className="text-muted">No tasks yet.</p>
          </Col>
        ) : (
          tasks.map((task) => (
            <Col md={6} key={task.id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{task.title}</Card.Title>
                  <Card.Text>{task.description}</Card.Text>
                  <Button variant="danger" onClick={() => deleteTask(task.id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Dashboard;
