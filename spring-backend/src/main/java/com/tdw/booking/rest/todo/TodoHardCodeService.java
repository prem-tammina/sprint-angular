package com.tdw.booking.rest.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodeService {
	private static List<Todo> todosList = new ArrayList<Todo>();
	private static int idCounter = 1;

	static {
		todosList.add(new Todo(++idCounter, "premtammina",
				"Let work on angular", new Date(), false));
		todosList.add(new Todo(++idCounter, "premtammina",
				"Let work on spring", new Date(), false));
		todosList.add(new Todo(++idCounter, "premtammina",
				"Let work on node js", new Date(), false));
	}

	public List<Todo> getAllTodos() {
		return todosList;
	}

	public List<Todo> getTodosByUsename(String username) {
		return null;
	}
}
