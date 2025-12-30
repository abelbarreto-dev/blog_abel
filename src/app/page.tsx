import { Header } from "@/components/Header";
import { SpinLoader } from "@/components/SpinLoader";

export default function HomePage() {
    return (
        <div>
            <SpinLoader containerClasses="min-h-[500] bg-amber-500" />
            <Header />
        </div>
    );
}
