export const sendRecoveryEmail = async (email: string) => {
  const response = await fetch("/api/auth/recovery", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Произошла ошибка");
  }

  return await response.json();
};

export const confirmRecovery = async (token: string, password: string) => {
  const response = await fetch("/api/auth/recovery/confirm", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Произошла ошибка");
  }

  return await response.json();
};