"use strict";
const form = document.querySelector("form");
const modal = document.querySelector(".modal");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailInput = document.querySelector("#email-input");
        const passwordInput = document.querySelector("#password-input");
        const showError = (message, field) => {
            const previousCreatedSpan = document.querySelector(`#${field}-error`);
            const fieldContainer = document.querySelector(`#${field}-container`);
            if (fieldContainer && !previousCreatedSpan) {
                const span = document.createElement("span");
                fieldContainer.appendChild(span);
                span.setAttribute("id", `${field.toLowerCase()}-error`);
                span.classList.add("text-danger");
                span.textContent = message;
            }
        };
        const removeError = (field) => {
            const previousCreatedSpan = document.querySelector(`#${field}-error`);
            const fieldContainer = document.querySelector(`#${field.toLowerCase()}-container`);
            if (fieldContainer && previousCreatedSpan)
                fieldContainer.removeChild(previousCreatedSpan);
        };
        if (emailInput) {
            removeError("email");
            if (emailInput.value.trim().length === 0) {
                showError("Email empty", "email");
                return;
            }
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
                showError("Email invalid", "email");
                return;
            }
        }
        if (passwordInput) {
            removeError("password");
            const passwordValue = passwordInput.value.trim().length;
            if (passwordValue === 0) {
                showError("Password empty", "password");
                return;
            }
            if (passwordValue < 8) {
                showError("Password must be at least 8 characters", "password");
                return;
            }
        }
        form.reset();
        alert("Sent successfully");
    });
}
;
