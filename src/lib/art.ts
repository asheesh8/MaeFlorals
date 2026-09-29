export const art = {
  aster: { src: "/art/aster.webp", w: 640, h: 1011 },
  bouquet: { src: "/art/bouquet.webp", w: 1191, h: 1600 },
  cat: { src: "/art/cat.webp", w: 1101, h: 825 },
  cosmos: { src: "/art/cosmos.webp", w: 630, h: 996 },
  fern: { src: "/art/fern.webp", w: 574, h: 962 },
  forgetmenot: { src: "/art/forgetmenot.webp", w: 615, h: 995 },
  garland: { src: "/art/garland.webp", w: 1600, h: 677 },
  hydrangea: { src: "/art/hydrangea.webp", w: 998, h: 1007 },
  monarch: { src: "/art/monarch.webp", w: 1024, h: 1024 },
  pansy: { src: "/art/pansy.webp", w: 960, h: 998 },
  press: { src: "/art/press.webp", w: 1154, h: 871 },
  wreath: { src: "/art/wreath.webp", w: 929, h: 1023 },
} as const;

export type ArtKey = keyof typeof art;
