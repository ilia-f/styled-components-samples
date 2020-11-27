export const themes = {

    themeFst: {
        name: 'First',
        foreground: '#202c39',
        foregroundEf: '#283845',
        background: '#D8D3C0',
        backgroundEf: '#C0B99B',
        primary: '#F6B78E',
        primaryEf: '#f3a068',
        radiusS: '3px',
        radiusL: '6px',
        borderWidth: '1px'
    },
    themeSec: {
      name: 'Second',
      foreground: '#040278',
      foregroundEf: '#0704B4',
      background: '#E5D9F2',
      backgroundEf: '#F5EFFF',
      primary: '#CDC1FF',
      primaryEf: '#A594F9',
      radiusS: '0',
      radiusL: '0',
      borderWidth: '1px'
    },
};

export const invertTheme = ({ foreground, foregroundEf, background, backgroundEf }) => ({
    
      foreground: backgroundEf,
      foregroundEf: background,
      background: foregroundEf,
      backgroundEf: foreground,
  
  });
  