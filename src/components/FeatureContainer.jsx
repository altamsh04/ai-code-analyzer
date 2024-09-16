import Features from "./Features";

function FeatureContainer() {
    // Array of feature objects
    const features = [
        {
            title: "AI-Powered Code Explanation",
            description: "AI simplifies complex code into easy terms.",
        },
        {
            title: "Unit Test Suggestions",
            description: "Automatically generate comprehensive unit tests to validate your code.",
        },
        {
            title: "Code Style Enforcement",
            description: "Maintain uniform code style across your project by applying predefined style guidelines.",
        },
        {
            title: "Performance Optimization",
            description: "Identify and fix performance bottlenecks.",
        },
        {
            title: "Code Documentation Generation",
            description: "Auto-generate comments and docs.",
        },
        {
            title: "Security Vulnerability Detection",
            description: "Detect potential security risks.",
        },
        {
            title: "Syntax Checking and Error Detection",
            description: "Spot and fix syntax errors.",
        },
        {
            title: "Code Quality and Best Practices",
            description: "Improve code quality with best practices.",
        }
    ];
    

    // Helper function to truncate the description
    // const truncateDescription = (text, maxWords) => {
    //     const words = text.split(" ");
    //     if (words.length > maxWords) {
    //         return words.slice(0, maxWords).join(" ") + "...";
    //     }
    //     return text;
    // };

    return (
        <div className="flex flex-wrap justify-center items-center py-8"> {/* Center alignment */}
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
