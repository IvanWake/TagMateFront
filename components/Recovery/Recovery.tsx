"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendRecoveryEmail } from "@/services/recovery";
import styles from "./Recovery.module.css";

const Recovery = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    setServerError(null);

    try {
      await sendRecoveryEmail(data.email);
      // Сохраняем email для последующего использования
      if (typeof window !== "undefined") {
        localStorage.setItem("recoveryEmail", data.email);
      }

      // Показываем alert вместо редиректа
      alert(
        "Письмо с инструкциями по восстановлению пароля отправлено на вашу почту!"
      );

      // Опционально: редирект на страницу входа после alert
      router.push("/auth/login");
    } catch (error: any) {
      setServerError(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.title}>
            Восстановление <br />
            пароля
          </div>

          <form className={styles.form}>
            <div className={styles.input}>
              <input
                className={errors.email?.message && styles["input-error"]}
                {...register("email", {
                  required: "Заполните E-mail",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Неверный формат email",
                  },
                })}
                type="email"
                placeholder="Email"
                disabled={isLoading}
              />
              {errors.email?.message && (
                <p className={styles.errorMessage}>{errors.email?.message}</p>
              )}
              {serverError && (
                <p className={styles.errorMessage}>{serverError}</p>
              )}
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.buttonGroup}>
          <div className={styles.loginLink}>
            <span>
              Вспомнил пароль?{" "}
              <Link href="/auth/login" className={styles.link}>
                Войти
              </Link>
            </span>
          </div>
          <button
            type="submit"
            className={styles.recoveryButton}
            disabled={!isValid || isLoading}
            onClick={handleSubmit(onSubmit)}
          >
            {isLoading ? "Отправка..." : "Восстановить"}
          </button>
        </div>
      </footer>
    </>
  );
};

export default Recovery;
