export interface TrackProps {
  artist?: string;
  album?: string;
  cover: string;
  id: string;
  path: string;
  title: string;
}

export interface Theme {
  name: string;
  dark: boolean;
  roundness: number;
  border: number;
  colors: {
    accent: string;
    background: string;
    primary: string;
    secondary: string;
    text: string;
    surface: string;
  };
}
