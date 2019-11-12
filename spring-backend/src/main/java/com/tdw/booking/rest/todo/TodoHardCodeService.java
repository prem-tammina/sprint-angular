package com.tdw.booking.rest.todo;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodeService {
	private static Map<Long, Todo> todosList = new HashMap<Long, Todo>();
	private static Long idCounter = 0L;

	static {
		++idCounter;
		todosList.put(idCounter, new Todo(idCounter, "premtammina", "Let work on angular", new Date(), false));
		++idCounter;
		todosList.put(idCounter, new Todo(idCounter, "premtammina", "Let work on spring", new Date(), false));
		++idCounter;
		todosList.put(idCounter, new Todo(idCounter, "premtammina", "Let work on node js", new Date(), false));
	}

	public List<Todo> getAllTodos() {
		Collection<Todo> collectionItems = todosList.values();
		List<Todo> todosList = new ArrayList<Todo>(collectionItems);
		return todosList;
	}

	public Todo deleteTodoById(Long id) {
		Todo todo = todosList.get(id);
		if (todo != null) {
			todosList.remove(id);
		}
		return todo;
	}

	public Todo findTodoById(Long id) {
		Todo todo = todosList.get(id);
		return todo;
	}

	public Todo saveTodo(Todo todo) {
		Todo localTodo = null;
		if (todo != null) {
			Long todoId = todo.getId();
			if (todoId == 0) {
				todoId = ++idCounter;
			}

			localTodo = todosList.put(todoId, todo);
		}

		return localTodo;
	}
}
