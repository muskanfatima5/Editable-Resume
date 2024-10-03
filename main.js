var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
function generateResume(data) {
    return "\n     <h1> Resume </h1>\n     <p><strong>Name:</strong> ".concat(data.name, " </p>\n     <p><strong>Email:</strong> ").concat(data.email, " </p>\n     <p><strong>Phone:</strong> ").concat(data.phone, " </p>\n     <p><strong>Education:</strong> ").concat(data.education, " </p>\n     <p><strong>Experience:</strong> ").concat(data.experience, " </p>\n     <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n     <button id=\"editResume\">Edit Resume</button>\n    ");
}
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        //   Generate and display the resume in the output div  //
        resumeOutput.innerHTML = generateResume({ name: name, email: email, phone: phone, education: education, experience: experience, skills: skills });
        //   Add listener to the "Edit Resume" button   //
        var editButton = document.getElementById('editResume');
        if (editButton) {
            editButton.addEventListener('click', function () {
                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                document.getElementById('phone').value = phone;
                document.getElementById('education').value = education;
                document.getElementById('experience').value = experience;
                document.getElementById('skills').value = skills;
                window.scroll({ top: 0, behavior: 'smooth' });
            });
        }
    });
}
else {
    console.error('Form or output div not found in the DOM');
}
;

