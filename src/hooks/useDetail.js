import { useState } from "react";

export function useSendEmail() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async ({ leadId, email, message }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(
        "https://vocaltech-api-gateway-production.up.railway.app/api/leads/findAll",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ leadId, email, message }), // Formato correcto
        }
      );

      const data = await response.json();
      console.log(data);
      
      if (data.success) {
        setSuccess(true);
      } else {
        throw new Error(data.message || "Error al enviar el correo");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, error, success };
}
