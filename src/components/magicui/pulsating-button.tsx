import React from "react";
import {cn} from "../../lib/utils";

interface PulsatingButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    pulseColor?: string;
    duration?: string;
}

export const PulsatingButton = React.forwardRef<
    HTMLButtonElement,
    PulsatingButtonProps
>(
    (
        {
            className,
            children,
            pulseColor = "#808080",
            duration = "2s",
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative flex cursor-pointer items-center justify-center rounded-lg px-12 py-3 text-white" +
                    " text-sm font-medium",
                    className
                )}
                style={
                    {
                        "--pulse-color": pulseColor,
                        "--duration": duration,
                        backgroundColor: pulseColor,
                    } as React.CSSProperties
                }
                {...props}
            >
                <span className="relative z-10">{children}</span>
                {/* Вставляем обводку, а не вторую кнопку */}
                <span className="absolute inset-0 rounded-lg border border-transparent animate-pulseCustom"/>
            </button>
        );
    }
);
