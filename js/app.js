// Smooth scroll animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Scroll reveal effect
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".feature-card");
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
// SIGNUP VALIDATION

const form = document.getElementById("signupForm");

if(form){
form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let valid = true;

    if(name.value.length < 3){
        showError(name, "Name must be at least 3 characters");
        valid = false;
    } else {
        clearError(name);
    }

    if(!email.value.includes("@")){
        showError(email, "Enter valid email");
        valid = false;
    } else {
        clearError(email);
    }

    if(password.value.length < 6){
        showError(password, "Password must be at least 6 characters");
        valid = false;
    } else {
        clearError(password);
    }

    if(valid){
        alert("Registration Successful! (Backend Placeholder)");
        window.location.href = "dashboard.html";
    }
});
}

// Error functions
function showError(input, message){
    const small = input.parentElement.querySelector(".error");
    small.innerText = message;
}

function clearError(input){
    const small = input.parentElement.querySelector(".error");
    small.innerText = "";
}

// Password Strength
const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");

if(passwordInput){
passwordInput.addEventListener("input", function(){
    let val = passwordInput.value;
    let strength = 0;

    if(val.length > 5) strength += 1;
    if(val.match(/[A-Z]/)) strength += 1;
    if(val.match(/[0-9]/)) strength += 1;
    if(val.match(/[@$!%*?&]/)) strength += 1;

    switch(strength){
        case 1:
            strengthBar.style.width = "25%";
            strengthBar.style.background = "red";
            break;
        case 2:
            strengthBar.style.width = "50%";
            strengthBar.style.background = "orange";
            break;
        case 3:
            strengthBar.style.width = "75%";
            strengthBar.style.background = "yellow";
            break;
        case 4:
            strengthBar.style.width = "100%";
            strengthBar.style.background = "green";
            break;
        default:
            strengthBar.style.width = "0%";
    }
});
}
// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
// ANALYTICS CHARTS

if(document.getElementById("lineChart")){

    // Line Chart - Score Progress
    new Chart(document.getElementById("lineChart"), {
        type: "line",
        data: {
            labels: ["Interview 1", "Interview 2", "Interview 3", "Interview 4", "Interview 5"],
            datasets: [{
                label: "Score %",
                data: [65, 70, 75, 78, 85],
                borderColor: "#6C63FF",
                backgroundColor: "rgba(108,99,255,0.2)",
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500
            }
        }
    });

    // Bar Chart - Technical vs HR
    new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
            labels: ["Technical", "HR"],
            datasets: [{
                label: "Average Score %",
                data: [80, 72],
                backgroundColor: ["#6C63FF", "#ff6584"]
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500
            }
        }
    });

    // Radar Chart - Skill Breakdown
    new Chart(document.getElementById("radarChart"), {
        type: "radar",
        data: {
            labels: [
                "Technical Knowledge",
                "Communication",
                "Confidence",
                "Problem Solving",
                "Time Management"
            ],
            datasets: [{
                label: "Skill Level",
                data: [80, 75, 70, 85, 65],
                backgroundColor: "rgba(108,99,255,0.2)",
                borderColor: "#6C63FF"
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            },
            animation: {
                duration: 1500
            }
        }
    });

}
// PROFILE IMAGE PREVIEW

const imageUpload = document.getElementById("imageUpload");
const profilePreview = document.getElementById("profilePreview");

if(imageUpload){
    imageUpload.addEventListener("change", function(){
        const file = this.files[0];

        if(file){
            const reader = new FileReader();

            reader.addEventListener("load", function(){
                profilePreview.setAttribute("src", this.result);
            });

            reader.readAsDataURL(file);
        }
    });
}

// PROFILE SAVE

const profileForm = document.getElementById("profileForm");

if(profileForm){
    profileForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Profile Updated Successfully! (Backend Placeholder)");
    });
}
document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        });
    }

});
<script>

function startInterview(){

    let type = document.getElementById("interviewType").value;
    let edu = document.getElementById("education").value;
    let duration = document.getElementById("duration").value;
    let questions = document.getElementById("questions").value;

    if(!type || !edu || !duration || !questions){
        alert("Please select all fields!");
        return;
    }

    // Save to localStorage (Placeholder for backend)
    let interviewConfig = {
        type,
        edu,
        duration,
        questions
    };

    localStorage.setItem("interviewConfig", JSON.stringify(interviewConfig));

    alert("Interview Session Created Successfully!");

    // Redirect (Placeholder page)
    window.location.href = "interview.html";

}

</script>