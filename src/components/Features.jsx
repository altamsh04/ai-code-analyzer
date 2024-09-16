import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Features({ title, description }) {
    return (
        <Card className="w-80 m-4 shadow-lg"> {/* Fixed width for the card */}
            <CardHeader>
                <label className="text-xl font-bold">{title}</label>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
        </Card>
    );
}

export default Features;
