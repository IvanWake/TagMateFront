"use client";

import Recovery from "@/components/Recovery/Recovery";
import NonAuthRoute from "@/components/Auth/NonAuthRoute";

const RecoveryPage = () => {
  return (
        <NonAuthRoute>
            <Recovery />
        </NonAuthRoute>
    );
};

export default RecoveryPage;
