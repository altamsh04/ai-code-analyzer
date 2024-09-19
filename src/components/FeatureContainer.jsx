import { features } from "@/data/features";
import Features from "./Features";
function FeatureContainer() {
    return (
        <div className="flex flex-wrap justify-center items-center py-8">
            {features.map((feature, index) => (
                <Features 
                    key={index} 
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    );
}

export default FeatureContainer;
