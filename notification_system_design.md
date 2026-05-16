# Notification System Design

## Stage 1

GET /notifications

POST /notifications

PUT /notifications/:id

DELETE /notifications/:id

---

## Stage 2

PostgreSQL can be used to store notification data.

Tables:
- students
- notifications

---

## Stage 3

Indexes can improve query performance.

Example:
CREATE INDEX idx_notifications ON notifications(studentId);

---

## Stage 4

Redis caching can improve performance.

Pagination can reduce load.

---

## Stage 5

Queues can help process notifications asynchronously.

Workers can send emails in the background.

---

## Stage 6

Notifications can be ranked using:
- type
- timestamp
- priority