export interface SectionPlateProps
  extends React.HTMLAttributes<HTMLDivElement> {
  bgColor?: string;
  bgImage?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}
