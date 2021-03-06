import React, { Fragment, useEffect, useState } from "react";
import githubColours from './githubColours'

const ProjectLine = ({
    label,
    backgroundColor = "#e5e5e5",
    // expected format for visual parts
    visualParts = [
        {
            percentage: "0%",
            color: "white"
        }
    ]
}) => {
    // Starting values needed for the animation
    // Mapped by "visualParts" so it can work with multiple values dynamically
    // It's an array of percentage widths
    const [widths, setWidths] = useState([]);
    useEffect(() => {
        setWidths(
            visualParts.map(() => {
                return 0;
            }))
        setTimeout(() => {
            requestAnimationFrame(() => {
                setWidths(
                    visualParts.map((item) => {
                        return item.percentage
                    })
                )
            })
        }, 10)
    }, [visualParts])

    return (
        <>
            <div
                className="projectVisualFull"
                // to change the background color dynamically
                style={{
                    backgroundColor
                }}
                key={`${label}-bar`}
            >
                {visualParts.map((item, index) => {
                    // map each part into separate div and each will be animated
                    // because of the "transition: width 2s;" css in class "ProjectVisualPart"
                    // and because of the new width ("widths[index]", previous one was 0)
                    return (
                        <div
                            // There won't be additional changes in the array so the index can be used
                            /* eslint-disable-next-line react/no-array-index-key */
                            key={`${label}-${item.language}`}
                            style={{
                                width: `${widths[index]}%`,
                                // setting the actual color of bar part
                                backgroundColor: githubColours(item.language)
                            }}
                            className="projectVisualPart"
                        />
                    );
                })}
            </div>
            <div key={`${label}-key`} className={'key'}>
                {visualParts.map((item) => {
                    let color = githubColours(item.language)
                    // Generate key for bar with type of code and colour.
                    return (
                        <Fragment key={`${label}-key-${item.language}`}>
                            <span className='line-language'><span style={{ color }}>● </span>{item.language} <span className='line-language__percent'>{item.percentage.toFixed(2)}%</span></span>
                        </ Fragment>
                    )
                })}
            </div>
        </>
    );
};

export default ProjectLine;
