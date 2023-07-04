declare module '@heroicons/react/outline' {
  import { ReactNode } from 'react';

  export interface IconProps {
    className?: string;
    style?: React.CSSProperties;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }

  export interface IconComponentProps extends IconProps {
    children: ReactNode;
  }

  export const LightningBoltIcon: React.FC<IconComponentProps>;
  export const BeakerIcon: React.FC<IconComponentProps>;
  export const DatabaseIcon: React.FC<IconComponentProps>;
  export const GlobeIcon: React.FC<IconComponentProps>;
  export const CollectionIcon: React.FC<IconComponentProps>;
  export const PackageIcon: React.FC<IconComponentProps>;
}
