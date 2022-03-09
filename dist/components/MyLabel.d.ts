/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Label Content
     */
    label: string;
    /**
     * How large should the label be?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Should all label content be captalize?
     */
    allCaps?: boolean;
    color?: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
