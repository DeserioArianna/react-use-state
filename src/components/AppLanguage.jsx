import { useState } from "react";
import languages from "../data/languages";
import AppCard from "./AppCard";

const AppLanguage = () => {
    const [activeLanguage, setLanguage] = useState(null);

    return (
        <div>
            {languages.map((curLanguage, index) => {
                return (
                    <button onClick={() => setLanguage(curLanguage)} key={index} className="btn btn-primary mx-4">{curLanguage.title}</button>
                )
            })}
            {activeLanguage && (
                <AppCard
                    language={activeLanguage} />
            )}
        </div>
    )
};

export default AppLanguage;