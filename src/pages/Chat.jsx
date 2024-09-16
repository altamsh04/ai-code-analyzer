import Head from "@/components/Head";
import ParentForm from "@/components/ParentForm";

export default function Chat() {
    return (
        <div className="flex flex-col min-h-screen p-4">
            <Head />
            <div className="flex-grow flex items-center justify-center">
                <ParentForm />
            </div>
        </div>
    );
}
