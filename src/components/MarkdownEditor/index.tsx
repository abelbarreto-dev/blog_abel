"use client";

import MDEditor from "@uiw/react-md-editor";
import { useId } from "react";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

const dynamic = "force-dynamic";

type MarkdownEditorProps = {
    labelText?: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    textAreaName: string;
    disabled: boolean;
}

export function MarkdownEditor ({
    labelText = "",
    value,
    setValue,
    textAreaName,
    disabled = false,
}: MarkdownEditorProps) {
    const id = useId();

    return (
        <div className="flex flex-col gap-2">
            {labelText && (
                <label htmlFor={id} className="text-sm">
                    {labelText}
                </label>
            )}

            <MDEditor
            className="whitespace-pre-wrap"
            value={value}
            onChange={value => {
                if (value === undefined) return;
                setValue(value);
            }}
            height={400}
            extraCommands={[]}
            preview="edit"
            hideToolbar={disabled}
            textareaProps={{
                id,
                name: textAreaName,
                disabled: disabled
            }}
            previewOptions={{
                rehypePlugins: [[rehypeSanitize]],
                remarkPlugins: [[remarkGfm]]
            }}
            />
        </div>
    );
}