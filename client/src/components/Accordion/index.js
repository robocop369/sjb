import React from "react";
import Card from "../../components/Card";

const panels = [
    "Alerts",
    "Projects",
    "Organizations",
];

export default () => (
    <div className="app-container">
        <div className="accordion-container">
            {panels.map(title => (
                <Card key={title} title={title} />
            ))}
        </div>
    </div>
);
