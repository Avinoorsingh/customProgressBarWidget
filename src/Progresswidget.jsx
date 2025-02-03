import { createElement } from "react";
import ProgressBar from "./components/ProgressBar";
import "./ui/Progresswidget.css";
 
export default function Progress({
    type,
    staticCurrentValue,
    dynamicCurrentValue,
    expressionCurrentValue,
    staticMinValue,
    dynamicMinValue,
    expressionMinValue,
    staticMaxValue,
    dynamicMaxValue,
    expressionMaxValue,
    showLabel,
    labelType,
    labelText,
    customLabel,
    onClick,
}) {
   
    const currentValue =
    type === "static"
        ? staticCurrentValue
        : type === "dynamic"
        ? dynamicCurrentValue.value !== null && dynamicCurrentValue.value !== undefined
            ? Number(dynamicCurrentValue.value)
            : 0
        : expressionCurrentValue.value ?? 0;
 
    const minValue =
        type === "static"
            ? staticMinValue
            : type === "dynamic"
            ? dynamicMinValue.value !== null && dynamicMinValue.value !== undefined
            ? Number(dynamicMinValue.value)
            : 0
                : expressionMinValue.value;
 
    var maxValue =
        type === "static"
            ? staticMaxValue
            : type === "dynamic"
            ? dynamicMaxValue.value !== null && dynamicMaxValue.value !== undefined
            ? Number(dynamicMaxValue.value)
            : 0
                : expressionMaxValue.value;
 
    var percentage =
        currentValue !== undefined &&
            minValue !== undefined &&
            maxValue !== undefined
            ? ((currentValue - minValue) / (maxValue - minValue)) * 100
            : 0;
 
    const handleClick = () => {
        console.log({
            type,
            currentValue,
            minValue,
            maxValue,
            percentage,
            showLabel,
            labelType,
            labelText,
            customLabel,
        });
        if (onClick) {
            onClick();
        }
    };
 
    return (
 
        console.log({ currentValue, minValue, maxValue }),
        <div key='uniqueKey' className="progress-widget" onClick={handleClick}>
            <ProgressBar percentage={percentage} />
            {showLabel && labelType === "text" && <div>{labelText}</div>}
            {showLabel && labelType === "percentage" && (
                <div key='uniqueKey'>{percentage.toFixed(2)}%</div>
            )}
            {showLabel && labelType === "custom" && customLabel}
        </div>
    );
}