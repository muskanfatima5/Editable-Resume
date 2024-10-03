const resumeForm = document.getElementById('resumeForm') as HTMLInputElement|null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement|null;

function generateResume(data:{
    name:string,
    email:string,
    phone:string,
    education:string,
    experience:string,
    skills:string,
 }) {
    return `
     <h1> Resume </h1>
     <p><strong>Name:</strong> ${data.name} </p>
     <p><strong>Email:</strong> ${data.email} </p>
     <p><strong>Phone:</strong> ${data.phone} </p>
     <p><strong>Education:</strong> ${data.education} </p>
     <p><strong>Experience:</strong> ${data.experience} </p>
     <p><strong>Skills:</strong> ${data.skills}</p>
     <button id="editResume">Edit Resume</button>
    `;
 }
if (resumeForm && resumeOutput){
     resumeForm.addEventListener('submit',(event)=>{
     event.preventDefault();

     const name=(document.getElementById('name')as HTMLInputElement).value;
     const email=(document.getElementById('email')as HTMLInputElement).value;
     const phone=(document.getElementById('phone')as HTMLInputElement).value;
     const education=(document.getElementById('education')as HTMLInputElement).value;
     const experience=(document.getElementById('experience')as HTMLInputElement).value;
     const skills=(document.getElementById('skills')as HTMLInputElement).value;

//   Generate and display the resume in the output div  //
resumeOutput.innerHTML = generateResume({name, email, phone, education, experience, skills});

//   Add listener to the "Edit Resume" button   //
const editButton = document.getElementById('editResume') as HTMLButtonElement;
if(editButton) {
    editButton.addEventListener('click', () => {
        (document.getElementById('name')as HTMLInputElement).value = name;
        (document.getElementById('email')as HTMLInputElement).value = email;
        (document.getElementById('phone')as HTMLInputElement).value = phone;
        (document.getElementById('education')as HTMLInputElement).value = education;
        (document.getElementById('experience')as HTMLInputElement).value = experience;
        (document.getElementById('skills')as HTMLInputElement).value = skills;   

        window.scroll({ top: 0, behavior: 'smooth'})
    })
    }
    });
    }else {
     console.error('Form or output div not found in the DOM');
     };

    //  const resumeHTML =`
    //  h1> Resume </h1>
    //  <p><strong>Name:</strong> ${name} </p>
    //  <p><strong>Email:</strong> ${email} </p>
    //  <p><strong>Phone:</strong> ${phone} </p>
    //  <p><strong>Education:</strong> ${education} </p>
    //  <p><strong>Experience:</strong> ${experience} </p>
    //  <p><strong>Skills:</strong> ${skills}</p>
    //  `

    //  resumeOutput.innerHTML=resumeHTML
    