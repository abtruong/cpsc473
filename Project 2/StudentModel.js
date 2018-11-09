/* ALEXANDER TRUONG -- StudentModel.js
 *
 * This model file of the MVC framework encompasses all functions that handle only data
 * within the application. The functions here do not affect the view nor does any
 * interaction done on the view affect this directly. Thee functions are only invoked
 * when the event handlers located in the controller file call upon these functions.
 * 
 */

// DISPLAY COURSE AND GRADES FOR SELECTED STUDENT
function list_course_gpa(student_info, length) {
    console.log("--> \"List Course and GPA\" function raised");
    for (i = 0; i < length; i++) {
        var course = "course" + (i + 1).toString();
        var gpa = "gpa" + (i + 1).toString();
        document.getElementById(course).innerHTML = student_info[course];
        document.getElementById(gpa).innerHTML = student_info[gpa];
    }
}

// CHECK IF GRADE TABLE EXISTS
function check_grade_table_exists() {
    if (document.getElementById("gradeTable")) {
        console.log("--> \"Check Grade Table\" function raised, table already exists")
        return true;
    } else {
        console.log("--> \"Check Grade Table\" function raised, table does not exist")
        return false;
    }
}

// CREATE GRADE TABLE 
function create_grade_table(length) {
    console.log("-----> \"Create Grade Table\" function raised");
    var cell = document.getElementById('tableCell');
    var grades_table = document.createElement('table');
    var header_row = document.createElement('tr');
    var th_cell_1 = document.createElement('th');
    var th_cell_1_text = document.createTextNode('Course');
    var th_cell_2 = document.createElement('th');
    var th_cell_2_text = document.createTextNode('GPA');
    
    th_cell_1.appendChild(th_cell_1_text);
    th_cell_2.appendChild(th_cell_2_text);
    header_row.appendChild(th_cell_1);
    header_row.appendChild(th_cell_2);
    grades_table.appendChild(header_row);

    for (i = 0; i < length; i++) {
        var course = "course" + (i + 1).toString();
        var gpa = "gpa" + (i + 1).toString();
    
        var row = document.createElement('tr');
        var cell_data_1 = document.createElement('td');
        var cell_data_2 = document.createElement('td');

        var cell_data_1_text = document.createTextNode("");
        var cell_data_2_text = document.createTextNode("");

        cell_data_1.appendChild(cell_data_1_text);
        cell_data_2.appendChild(cell_data_2_text);

        cell_data_1.setAttribute("id", course);
        cell_data_2.setAttribute("id", gpa);

        row.appendChild(cell_data_1);
        row.appendChild(cell_data_2);

        grades_table.appendChild(row);
    }

    cell.appendChild(grades_table);
    grades_table.setAttribute("id", "gradeTable");
    grades_table.style = 'table-layout: fixed;text-align: center;margin: auto;margin-top: 20px;border: 1px solid #000000;padding: 10px;width: 75%;height: 200px;border-collapse: collapse;';
}

// REMOVE GRADE TABLE BEFORE INITIALIZING NEW TABLE
function delete_grade_table() {
    console.log("-----> \"Delete Grade Table\" function raised");
    document.getElementById("gradeTable").remove();
}

// STUDENT DOES NOT EXIST DISPLAY MESSAGE
function no_student_found() {
    console.log("--> \"No Students Found\" function raised");
    document.getElementById('notFound').innerHTML = "Last name not found";
}

// CHECK IF STUDENTS LIST EXISTS
function check_students_list_exists() {
    if (document.getElementById("students")) {
        console.log("--> \"Check Students List\" function raised, list already exist")
        return true;
    } else {
        console.log("--> \"Check Students List\" function raised, list does not exist")
        return false;
    }
}

// REMOVE STUDENT LIST BEFORE INITIALIZING NEW LIST
function clear_students() {
    console.log("-----> \"Clear Students\" function raised");
    document.getElementById("students").remove();
}

// ASSIGN STUDENT LIST ARRAY 
function get_students_list(last_name) {
    console.log("--> \"List Student List with Specified Last Name\" function raised");
    switch(last_name) {
        case 'TRUONG':
            var students_list = new Array("Alex Truong", "Brian Truong", "John Truong", "Cookie Truong");
            break;
        case 'TRAN':
            var students_list = new Array("Vivian Tran", "Tony Tran", "Patricia Tran");
            break;
        case 'ORTIZ':
            var students_list = new Array("Jonnathan Ortiz", "Kyle Ortiz", "Bob Ortiz", "Alice Ortiz");
            break;
        case 'NGUYEN':
            var students_list = new Array("Jackie Nguyen", "Kelly Nguyen", "Veronica Nguyen", "Vannak Nguyen");
            break;
        case 'SANCHEZ':
            var students_list = new Array("Noel Sanchez", "Chris Sanchez", "Danny Sanchez", "Tim Sanchez", "Jorge Sanchez");
            break;
        default:
            return "";
    }
    return students_list;
}

// GET STUDENT INFORMATION
function get_student_info(full_name) {
    console.log("--> \"List Student's Courses and GPA\" function raised");
    switch(full_name) {
        case 'Alex Truong':
            return {
                course1: "CPSC471", gpa1: 4.0.toFixed(1),
                course2: "CPSC473", gpa2: 4.0.toFixed(1),
                course3: "CPSC476", gpa3: 4.0.toFixed(1)
            };
        case 'Brian Truong':
            return {
                course1: "CMJC550", gpa1: 3.0.toFixed(1),
                course2: "CMJC433", gpa2: 3.0.toFixed(1)
            };
        case 'John Truong':
            return {
                course1: "MDAC100", gpa1: 1.0.toFixed(1),
                course2: "MDAC109", gpa2: 1.0.toFixed(1),
                course3: "MDAC110", gpa3: 1.0.toFixed(1),
                course4: "MDAC202", gpa4: 2.0.toFixed(1)
            };
        case 'Cookie Truong':
            return {
                course1: "DOGO500", gpa1: 5.0.toFixed(1),
                course2: "DOGO473", gpa2: 5.0.toFixed(1),
                course3: "DOGO301", gpa3: 5.0.toFixed(1),
                course4: "DOGO249", gpa4: 5.0.toFixed(1),
                course5: "DOGO331", gpa5: 5.0.toFixed(1)
            };
        case 'Vivian Tran':
            return {
                course1: "APRN105", gpa1: 5.0.toFixed(1),
                course2: "APRN130", gpa2: 4.0.toFixed(1),
                course3: "APRN165", gpa3: 5.0.toFixed(1)
            };
        case 'Tony Tran':
            return {
                course1: "BMEG301", gpa1: 4.0.toFixed(1),
                course2: "ENGL101", gpa2: 1.0.toFixed(1)
            };
        case 'Patricia Tran':
            return {
                course1: "FBPU101", gpa1: 4.0.toFixed(1),
                course2: "FBPU201", gpa2: 4.0.toFixed(1),
                course3: "FBPU471", gpa3: 4.0.toFixed(1)
            };
        case 'Jonnathan Ortiz':
            return {
                course1: "MATH270A", gpa1: 2.0.toFixed(1)
            };
        case 'Kyle Ortiz':
            return {
                course1: "MGMT331", gpa1: 3.0.toFixed(1),
                course2: "BUSI109", gpa2: 2.0.toFixed(1),
                course3: "MATH250", gpa3: 3.0.toFixed(1)
            };
        case 'Bob Ortiz':
            return {
                course1: "KNSE101", gpa1: 1.0.toFixed(1),
                course2: "KNSE109", gpa2: 2.0.toFixed(1),
                course3: "KNSE201", gpa3: 2.0.toFixed(1),
                course4: "KNSE130", gpa4: 1.0.toFixed(1)
            };
        case 'Alice Ortiz':
            return {
                course1: "CPSC223", gpa1: 4.0.toFixed(1),
                course2: "CPSC109", gpa2: 3.0.toFixed(1)
            };
        case 'Jackie Nguyen':
            return {
                course1: "KNSE203", gpa1: 3.0.toFixed(1),
                course2: "KNSE221", gpa2: 4.0.toFixed(1),
                course3: "KNSE301", gpa3: 3.0.toFixed(1)
            };
        case 'Kelly Nguyen':
            return {
                course1: "DCTR501", gpa1: 4.0.toFixed(1),
                course2: "DCTR430", gpa2: 4.0.toFixed(1),
                course3: "DCTR599", gpa3: 4.0.toFixed(1),
                course4: "DCTR565", gpa4: 4.0.toFixed(1)
            };
        case 'Veronica Nguyen':
            return {
                course1: "EGCE109", gpa1: 2.0.toFixed(1),
                course2: "EGCE110", gpa2: 2.0.toFixed(1),
                course3: "HIST101", gpa3: 3.0.toFixed(1),
                course4: "GEOL201", gpa4: 3.0.toFixed(1)
            };
        case 'Vannak Nguyen':
            return {
                course1: "ENGL130", gpa1: 4.0.toFixed(1)
            };
        case 'Noel Sanchez':
            return {
                course1: "EGEE401", gpa1: 4.0.toFixed(1),
                course2: "EGEE499", gpa2: 4.0.toFixed(1),
                course3: "PHYS303", gpa3: 4.0.toFixed(1)
            };
        case 'Chris Sanchez':
            return {
                course1: "KNSE101", gpa1: 3.0.toFixed(1),
                course2: "KNSE102", gpa2: 3.0.toFixed(1)
            };
        case 'Danny Sanchez':
            return {
                course1: "CPSC223", gpa1: 4.0.toFixed(1),
                course2: "CPSC240", gpa2: 4.0.toFixed(1),
                course3: "CPSC254", gpa3: 4.0.toFixed(1),
                course4: "CPSC301", gpa4: 4.0.toFixed(1)
            };
        case 'Tim Sanchez':
            return {
                course1: "MUSI101", gpa1: 2.0.toFixed(1),
                course2: "MUSI109", gpa2: 3.0.toFixed(1),
                course3: "MUSI110", gpa3: 2.0.toFixed(1),
                course4: "MUSI203", gpa4: 3.0.toFixed(1)
            };
        case 'Jorge Sanchez':
            return {
                course1: "CSCO101", gpa1: 3.0.toFixed(1),
                course2: "CSC0201", gpa2: 3.0.toFixed(1),
                course3: "KNSE101", gpa3: 1.0.toFixed(1),
                course4: "KNSE109", gpa4: 2.0.toFixed(1),
                course5: "KNSE201", gpa5: 2.0.toFixed(1)
            }
    }
}
