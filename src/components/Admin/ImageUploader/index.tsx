"use client";

import { Button } from "@/components/Button";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants/constants";
import { ImageUpIcon } from "lucide-react";
import { useId, useRef } from "react";
import { toast } from "react-toastify";

export function ImageUplodader () {
    const id = useId();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChooseFile = () => {
        if (!fileInputRef.current) return;

        fileInputRef.current.click();
    };

    const handleChange = () => {
        if (!fileInputRef.current) return;

        const fileInput = fileInputRef.current;

        const file = fileInput?.files?.[0];

        if (!file) return;

        if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
            const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024;

            toast.error("Imagem muito grande. Máx.:" + readableMaxSize + "KB.");

            fileInput.value = "";
            return;
        }

        const formData = new FormData();

        formData.append("file", file);

        // TODO: create action to upload image file
        console.log(formData.get("file"));

        fileInput.value = "";
    };

    return (
        <div className="flex flex-col gap-2 py-4">
            <Button variant="danger" size="md" type="button" className="self-start" onClick={handleChooseFile}>
                <ImageUpIcon />
                Enviar uma Imagem
            </Button>
            <input ref={fileInputRef} className="hidden" accept="iamge/*" type="file" name="file" id={id} onChange={handleChange}/>
        </div>
    );
}
