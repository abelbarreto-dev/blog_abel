"use client";

import { ErrorMessage } from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorProps = {
    error: Error;
    reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorProps) {
    useEffect(() => {}, [error]);

    return (
        <ErrorMessage
            pageTitle="Internal Server Error"
            contentTitle="501"
            content="Ocorreu um erro do qual nossa aplicação não conseguiu se recuperar. Tente novamente mais tarde."
        />
    );
}
