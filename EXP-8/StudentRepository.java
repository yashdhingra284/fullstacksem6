package com.AML_3B.Rest_API.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.AML_3B.Rest_API.Model.Student;

public interface StudentRepository extends JpaRepository<Student,Integer>{
}