/* ALEXANDER TRUONG -- StudentController.js
 *
 * This controller file of the MVC framework encompasses all the functions that handle
 * on-screen events that change the view based on the information in the model. When
 * an event occurs, this controller manipulates the view by passing information from
 * the model's functions and displays the information accordingly to the view, acting
 * as a middleman between the view and the model.
 * 
 */

// EVENT HANDLER ONCLICK FOR SEARCH BUTTON TO LOOK FOR STUDENTS WITH SPECIFIED NAME
document.getElementById('searchBtn').onclick = function() {
    console.log("\"Search Button\" clicked: event raised")
    var last_name = document.getElementById('textbox').value;
    var students_list = new Array();

    if (get_students_list(last_name.toUpperCase()) == "") {
        no_student_found();
    } else {
        students_list = get_students_list(last_name.toUpperCase());
        if (check_students_list_exists()) {
            clear_students();
        }
        list_students(students_list, students_list.length);
    }
}

// LIST STUDENTS IF NAME EXISTS
function list_students(students_list, length) {
    console.log("--> \"Students Found and List Students\" function raised");
    document.getElementById('notFound').innerHTML = "";

    var student_cell = document.getElementById('studentCell');
    var student_name_ul = document.createElement('ul');

    for (i = 0; i < length; i++) {  // Create new list DOM elements
        var student = "student" + (i + 1).toString();
        var student_name_li = document.createElement('li');
        student_name_text = document.createTextNode(students_list[i]);
        student_name_li.appendChild(student_name_text);
        student_name_li.setAttribute("id", student);
        student_name_li.addEventListener("click", link_student_ids, true); // Dynamic onclick event linking
        student_name_li.style="margin-top:20px;";
        student_name_ul.appendChild(student_name_li);
    }
    student_cell.appendChild(student_name_ul);
    student_name_ul.setAttribute("id", "students");
    student_name_ul.style="list-style-type:none;margin-top:20px;";
}

// LINK STUDENTS TO ONCLICK EVENTS VIA ID DYNAMICALLY
function link_student_ids() {
    var full_name = document.getElementById(this.id).innerHTML;
    console.log("\"" + full_name + " (" + this.id + ")\" clicked: event raised");

    document.getElementById('studentName').innerHTML = full_name;
    var student_info = get_student_info(full_name);

    if (check_grade_table_exists()) {
        delete_grade_table();
    }
    create_grade_table(Object.keys(student_info).length / 2);

    list_course_gpa(student_info, Object.keys(student_info).length / 2);
}
