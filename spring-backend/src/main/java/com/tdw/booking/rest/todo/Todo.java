package com.tdw.booking.rest.todo;

import java.sql.Date;

public class Todo {
	private long id;
	private String username;
	private String description;
	private Date targetDate;
	private boolean isCompleted;

	public long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public String getDescription() {
		return description;
	}

	public Date getTargetDate() {
		return targetDate;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

}
