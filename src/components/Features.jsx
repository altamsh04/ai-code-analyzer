import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Features({ title, description }) {
    return (
        <Card className="w-80 h-48 m-4 shadow-lg flex flex-col">
            <CardHeader className="flex-shrink-0">
                <label className="text-xl font-bold">{title}</label>
            </CardHeader>
            <CardContent className="flex-grow overflow-auto">
                <p>{description}</p>
            </CardContent>
        </Card>
    );
}

export default Features;
