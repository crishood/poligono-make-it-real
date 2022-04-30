const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
  ]
  
const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
  ]
  
const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
  ]


for(let j = 0; j<courses.length; j++){

  const {_id:_cid ,title} = courses[j]
  console.log(`- ${ title }`)

  for(let i = 0; i<enrollments.length; i++){

    const {course_id, student_id} = enrollments[i]

    for(let k = 0; k<students.length; k++){
      
      const { _id, name } = students[k]

      if(student_id === _id && course_id === _cid){

        console.log(` * ${name}`)

      }
    }
  }
}


for(let j = 0; j<students.length; j++){

  const {_id:_nid ,name} = students[j]
  console.log(`- ${ name }`)

  for(let i = 0; i<enrollments.length; i++){

    const {course_id, student_id} = enrollments[i]

    for(let k = 0; k<courses.length; k++){
      
      const { _id, title } = courses[k]

      if(student_id === _id && course_id === _nid){

        console.log(` * ${title}`)

      }
    }
  }
}




