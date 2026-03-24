package com.AML_3B.Rest_API.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AML_3B.Rest_API.Model.Student;
import com.AML_3B.Rest_API.Repository.StudentRepository;

//@Service
//public class StudentService {
//
//	@Autowired
//    private StudentRepository repository;
//
//    public List<Student> getAllStudents() {
//        return repository.findAll();
//    }
//
//    public Student saveStudent(Student student) {
//        return repository.save(student);
//    }
//    
//    @SuppressWarnings("deprecation")
//	public Student getStudentById(int id) {
//    	return repository.getById(id);
//    }
//}


@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student getStudentById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }


	public void deleteById(int id) {
		repository.deleteById(id);
		
	}
}