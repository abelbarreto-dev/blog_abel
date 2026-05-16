import { Button } from "@/components/Button";
import { HeartIcon } from "lucide-react";

export default async function AdminAddPostPage() {
    return (
        <div>
            <div className="py-16 text-6xl flex flex-wrap items-center gap-4">AdminAddPostPage
                <Button variant="default" size="sm"><HeartIcon />Mire</Button>
                <Button variant="ghost" size="md"><HeartIcon />Mire</Button>
                <Button variant="danger" size="lg"><HeartIcon />Mire</Button>
            </div>

            <div className="py-16 text-6xl flex flex-wrap items-center gap-4">
                <Button variant="default" size="sm" disabled><HeartIcon />Mire</Button>
                <Button variant="ghost" size="md" disabled><HeartIcon />Mire</Button>
                <Button variant="danger" size="lg" disabled><HeartIcon />Mire</Button>
            </div>
        </div>
    );
}
