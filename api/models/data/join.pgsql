-- getting all cousres for a department 

-- need to add where clasue using params

SELECT * FROM department JOIN course ON course.department_id = department.department_id;

-- getting all courses and course instances from a department 

--need to add where clause using params
SELECT * FROM department JOIN course ON course.department_id = department.department_id
JOIN course_instance ON course_instance.course_instance_id = course.course_id;

-- get all student courses 

-- need to add where clause using params



SELECT * FROM students JOIN student_courses ON student_courses.student_id = students.student_id
JOIN course_instance ON course_instance.course_instance_id = student_courses.course_instance_id
JOIN course ON course.course_id = course_instance.course_instance_id
JOIN teachers ON teachers.teacher_id = course_instance.teacher_id WHERE students.student_id = 1 AND student_courses.student_id = 1;

-- get every student in a class

-- need to add where clasue to take in param for what class

   SELECT * FROM students JOIN student_courses ON student_courses.student_id = students.student_id JOIN course_instance ON course_instance.course_instance_id = student_courses.course_instance_id JOIN course ON course.course_id = course_instance.course_id JOIN department ON department.department_id = course.department_id
   WHERE course_instance.course_instance_id = 1;














-- get all assignments from a student


   SELECT * FROM students JOIN student_courses ON student_courses.student_id = students.student_id 
   JOIN course_instance ON course_instance.course_instance_id = student_courses.course_instance_id JOIN course ON course.course_id = course_instance.course_id 
   JOIN assignment ON assignment.course_instance_id = course_instance.course_instance_id
   JOIN assignment__instance ON assignment__instance.assignment_id = assignment.assignment_id
   WHERE students.student_id = 4
   AND assignment__instance.student_id = 4;


-- get all assignments from a student for a specific class
 SELECT * FROM students JOIN student_courses ON student_courses.student_id = students.student_id JOIN course_instance ON course_instance.course_instance_id = student_courses.course_instance_id JOIN course ON course.course_id = course_instance.course_id JOIN department ON department.department_id = course.department_id
   WHERE course_instance.course_instance_id = 1;


   SELECT * FROM assignment;



SELECT * FROM students;