import './mylabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';

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
  /*
   * Basic label colors
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /*
   * Font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor 
}: MyLabelProps) => {
  return (
    <span className={`label ${ size } text-${color}`} style={{color: fontColor}}>
        {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
