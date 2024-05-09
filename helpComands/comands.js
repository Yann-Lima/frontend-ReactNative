/* Comandos para auxiliar na construção */

// Função de validação de e-mail
export function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}