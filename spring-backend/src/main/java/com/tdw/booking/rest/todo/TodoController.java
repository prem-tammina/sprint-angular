package com.tdw.booking.rest.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TodoController {

	@Autowired
	private TodoHardCodeService todoService;

	@GetMapping(path = "{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.getAllTodos();
	}

	@GetMapping(path = "{username}/todo/{id}")
	public Todo getTodoById(@PathVariable String username, @PathVariable Long id) {
		return todoService.findTodoById(id);
	}

	@PostMapping(path = "{username}/todo")
	public ResponseEntity<Todo> saveTodo(@PathVariable String username, @RequestBody Todo todo) {
		Todo result = todoService.saveTodo(todo);
		if (result != null) {
			return new ResponseEntity<Todo>(result, HttpStatus.OK);
		} else {
			return ResponseEntity.badRequest().build();
		}
	}

	@PutMapping(path = "{username}/todo")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @RequestBody Todo todo) {
		Todo result = todoService.saveTodo(todo);
		if (result != null) {
			return new ResponseEntity<Todo>(result, HttpStatus.OK);
		} else {
			return ResponseEntity.badRequest().build();
		}

	}

	@DeleteMapping(path = "{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable Long id) {
		Todo todo = todoService.deleteTodoById(id);
		if (todo != null) {
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
