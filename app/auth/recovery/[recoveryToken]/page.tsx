"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setRecoveryToken, getRecoveryToken } from "@/utils/recoveryToken";
import RecoveryChange from "@/components/Recovery/RecoveryChange/RecoveryChange";
import Loading from "@/components/Layout/Loading";

type Props = {
  params: {
    recoverytoken: string;
  };
};

const RecoveryChangePage = ({ params }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { recoverytoken } = params;
  const router = useRouter();

  useEffect(() => {
    const initRecovery = async () => {
      // Сохраняем токен в куки
      setRecoveryToken(recoverytoken);

      // Проверяем валидность токена
      const currentToken = getRecoveryToken();
      if (!currentToken) {
        router.push("/auth/recovery");
        return;
      }

      setIsLoading(false);
    };

    initRecovery();
  }, [recoverytoken, router]);

  if (isLoading) return <Loading w={"5"} h={"5"} />;

  return <RecoveryChange recoveryToken={recoverytoken} />;
};

export default RecoveryChangePage;
