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
}

export const MyLabel = ({
  label = 'No Label', 
  size = 'normal'
}: MyLabelProps) => {
  return (
    <span className={`${ size }`}>
        {label}
    </span>
  )
}
