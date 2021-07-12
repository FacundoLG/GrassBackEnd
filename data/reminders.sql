CREATE TABLE reminders (
  remind_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  user_id INT NOT NULL DEFAULT 1,
  date TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  active BIT NOT NULL DEFAULT 1
);