"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setRecoveryToken, getRecoveryToken } from "@/utils/recoveryToken";
import RecoveryChange from "@/components/Recovery/RecoveryChange/RecoveryChange";
import Loading from "@/components/Layout/Loading";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";

type Props = {
  params: {
    recoveryToken: string;
  };
};

const RecoveryChangePage = ({ params }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { recoveryToken } = params;
  const router = useRouter();

  useEffect(() => {
    const initRecovery = async () => {
      // Сохраняем токен в куки
      setRecoveryToken(recoveryToken);

      // Проверяем валидность токена
      const currentToken = getRecoveryToken();
      if (!currentToken) {
        router.push("/auth/recovery");
        return;
      }

      setIsLoading(false);
    };

    initRecovery();
  }, [recoveryToken, router]);

  if (isLoading) return <Loading w={"5"} h={"5"} />;

  return (
      <NonAuthRoute>
        <RecoveryChange recoveryToken={recoveryToken} />
      </NonAuthRoute>
  )
};

export default RecoveryChangePage;
