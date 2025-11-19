"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { confirmRecovery } from "@/services/recovery";
import { getRecoveryToken, deleteRecoveryToken } from "@/utils/recoveryToken";
import styles from "../Recovery.module.css";

interface RecoveryChangeProps {
  recoveryToken: string;
}

const RecoveryChange = ({ recoveryToken }: RecoveryChangeProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const token = getRecoveryToken() || recoveryToken;
      if (!token) {
        setServerError("Токен восстановления не найден");
        return;
      }

      await confirmRecovery(token, data.password);

      // Очищаем токен после успешного восстановления
      deleteRecoveryToken();

      // Редирект на страницу входа
      router.push("/auth/login");
    } catch (error: any) {
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.title}>Сменить пароль</div>

          <form className={styles.form}>
            <div className={styles.input}>
              <label>Придумай пароль</label>
              <input
                className={errors.password?.message && styles["input-error"]}
                {...register("password", {
                  required: "Введите пароль",
                  minLength: {
                    value: 8,
                    message: "Пароль не меньше 8-ми символов",
                  },
                  pattern: {
                    value: /^(?!.*[!@#$%^&*(),.?":{}|<>]).*$/,
                    message:
                      'Пароль не должен содержать [!@#$%^&*(),.?":{}|<>]',
                  },
                })}
                type="password"
                placeholder="Пароль"
                disabled={isSubmitting}
              />
              {errors.password?.message && (
                <p className={styles.errorMessage}>
                  {errors.password?.message}
                </p>
              )}

              <input
                className={
                  errors.repeatPassword?.message && styles["input-error"]
                }
                {...register("repeatPassword", {
                  required: "Повторите пароль",
                  validate: (value) =>
                    value === getValues("password") || "Пароли не совпадают",
                })}
                type="password"
                placeholder="Повтори пароль"
                disabled={isSubmitting}
              />
              {errors.repeatPassword?.message && (
                <p className={styles.errorMessage}>
                  {errors.repeatPassword?.message}
                </p>
              )}

              {serverError && (
                <p className={styles.errorMessage}>{serverError}</p>
              )}
            </div>
          </form>
        </div>
      </div>

      <footer className={styles.footer}>
        <button
          type="submit"
          className={styles.recoveryButton}
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit(onSubmit)}
        >
          {isSubmitting ? "Сохранение..." : "Сохранить"}
        </button>
      </footer>
    </>
  );
};

export default RecoveryChange;
