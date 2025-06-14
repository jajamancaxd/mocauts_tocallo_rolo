        document.addEventListener("DOMContentLoaded", () => {
        const selectButtons = document.querySelectorAll(".select-btn");
        const submitButton = document.querySelector(".submit-btn");

        // Función para alternar selección
        selectButtons.forEach(button => {
            button.addEventListener("click", () => {
            button.classList.toggle("selected");
            checkSelections();
            });
        });

        // Validar que haya mínimo 3 en cada grupo
        function checkSelections() {
            const sections = document.querySelectorAll(".form-section");
            let allValid = false;

            sections.forEach(section => {
            const selected = section.querySelectorAll(".select-btn.selected");
            if (selected.length < 3) {
                allValid = true;
            }else {
                allValid = false;}
            });

            submitButton.disabled = allValid;
        }

        // Acción al hacer clic en "Aceptar"
        submitButton.addEventListener("click", () => {
            if (!submitButton.disabled) {
            alert("¡Formulario enviado con éxito!");
            // Aquí puedes enviar datos al servidor, guardar en localStorage, etc.
            }
        });
        });
