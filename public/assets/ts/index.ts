const form: HTMLFormElement | null = document.querySelector("form");
const modal: Element | null = document.querySelector(".modal");

if (form) {

    form.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault();

        const emailInput = document.querySelector(
            "#email-input"
        ) as HTMLInputElement | null;
        const passwordInput = document.querySelector("#password-input") as HTMLInputElement | null;
        
        const showError = (message: string, field: string): void => {
            
            const previousCreatedSpan: Element | null =
            document.querySelector(`#${field}-error`); 

            const fieldContainer: Element | null =
            document.querySelector(`#${field}-container`);

            if (fieldContainer && !previousCreatedSpan) {
                const span: HTMLSpanElement = document.createElement("span");
                fieldContainer.appendChild(span);
                span.setAttribute("id", `${field.toLowerCase()}-error`);
                span.classList.add("text-danger");
                span.textContent = message;
            }
        };

        const removeError = (field: string): void => {

            const previousCreatedSpan: Element | null =
            document.querySelector(`#${field}-error`); 

            const fieldContainer: Element | null =
            document.querySelector(`#${field.toLowerCase()}-container`);

            if (fieldContainer && previousCreatedSpan) fieldContainer.removeChild(previousCreatedSpan);
        }

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

        if(passwordInput) {

            removeError("password");

            const passwordValue = passwordInput.value.trim().length;

            if(passwordValue === 0) {
                showError("Password empty", "password");
                return;
            }

            if(passwordValue < 8) {
                showError("Password must be at least 8 characters", "password");
                return;
            }
        }

        form.reset();
        alert("Sent successfully");
    });
};