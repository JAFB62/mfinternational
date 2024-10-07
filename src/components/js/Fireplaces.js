const fireplaces = [
  {
    id: 12,
    name: 'Adatto55',
    glb: 'img/models/fireplaces/adatto_55_emb.glb',
    usdz: 'img/models/fireplaces/adatto_55_emb.usdz',
    poster: 'img/figures/webp/adatto_55_emb.webp',
    place: 'wall',
    categ: 'Embutida'
  },
  {
    id: 13,
    name: 'Adatto55M',
    glb: 'img/models/fireplaces/adatto_55_4mold.glb',
    usdz: 'img/models/fireplaces/adatto_55_4mold.usdz',
    poster: 'img/figures/webp/adatto_55_4mold.webp',
    place: 'wall',
    categ: 'Embutida'
  },
  {
    id: 15,
    name: 'Adatto55E',
    glb: 'img/models/fireplaces/adatto_55_exposta.glb',
    usdz: 'img/models/fireplaces/adatto_55_exposta.usdz',
    poster: 'img/figures/webp/adatto_55_exposta.webp',
    place: 'floor',
    categ: 'Central'
  },
  {
    id: 16,
    name: 'Adatto55_3F',
    glb: 'img/models/fireplaces/adatto_55_3F.glb',
    usdz: 'img/models/fireplaces/adatto_55_3F.usdz',
    poster: 'img/figures/webp/adatto_55_3Fmold.webp',
    place: 'wall',
    categ: 'Embutida'
  },
  {
    id: 17,
    name: 'Adatto55_3FM',
    glb: 'img/models/fireplaces/adatto_55_3Fmold.glb',
    usdz: 'img/models/fireplaces/adatto_55_3Fmold.usdz',
    poster: 'img/figures/webp/adatto_55_3Fmold.webp',
    place: 'wall',
    categ: 'Embutida'
  },
  {
    id: 18,
    name: 'Adatto55_2FE',
    glb: 'img/models/fireplaces/adatto_55_2FE.glb',
    usdz: 'img/models/fireplaces/adatto_55_2FE.usdz',
    poster: 'img/figures/webp/adatto_55_2FE.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 22,
    name: 'Adatto70',
    glb: 'img/models/fireplaces/adatto_70_exposta.glb',
    usdz: 'img/models/fireplaces/adatto_70_exposta.usdz',
    poster: 'img/figures/webp/adatto_70_exposta.webp',
    place: '',
    categ: 'Exposta'
  },
  {
    id: 23,
    name: 'Adatto70M',
    glb: 'img/models/fireplaces/adatto_70_4mold.glb',
    usdz: 'img/models/fireplaces/adatto_70_4mold.usdz',
    poster: 'img/figures/webp/adatto_70_4mold.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 24,
    name: 'Adatto70_3F',
    glb: 'img/models/fireplaces/adatto_70_3F.glb',
    usdz: 'img/models/fireplaces/adatto_70_3F.usdz',
    poster: 'img/figures/webp/adatto_55_3Fmold.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 25,
    name: 'Adatto70M_3F',
    glb: 'img/models/fireplaces/adatto_70_3FMold.glb',
    usdz: 'img/models/fireplaces/adatto_70_3FMold.usdz',
    poster: 'img/figures/webp/adatto_55_3Fmold.webp',
    place: '',
    categ: 'Central'
  },
  {
    id: 29,
    name: 'Adatto90_3F',
    glb: 'img/models/fireplaces/adatto_90_3F.glb',
    usdz: 'img/models/fireplaces/adatto_90_3F.usdz',
    poster: 'img/figures/webp/adatto_55_3Fmold.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 26,
    name: 'Adatto90',
    glb: 'img/models/fireplaces/adatto_90.glb',
    usdz: 'img/models/fireplaces/adatto_90.usdz',
    poster: 'img/figures/webp/adatto_90.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 28,
    name: 'Adatto90E',
    glb: 'img/models/fireplaces/adatto_90_Exposta.glb',
    usdz: 'img/models/fireplaces/adatto_90_Exposta.usdz',
    poster: 'img/figures/webp/adatto_90_Exposta.webp',
    place: '',
    categ: 'Exposta'
  },
  {
    id: 27,
    name: 'Adatto90M',
    glb: 'img/models/fireplaces/adatto_90_Mold.glb',
    usdz: 'img/models/fireplaces/adatto_90_Mold.usdz',
    poster: 'img/figures/webp/adatto_70_4mold.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 6,
    name: 'Adatto110',
    glb: 'img/models/fireplaces/adatto_110_embutida.glb',
    usdz: 'img/models/fireplaces/adatto_110_embutida.usdz',
    poster: 'img/figures/webp/adatto_110_embutida.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 7,
    name: 'Adatto110M',
    glb: 'img/models/fireplaces/adatto_110_moldura_embutida.glb',
    usdz: 'img/models/fireplaces/adatto_110_moldura_embutida.usdz',
    poster: 'img/figures/webp/adatto_110_moldura_embutida.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 8,
    name: 'Adatto110E',
    glb: 'img/models/fireplaces/adatto_110_exposta.glb',
    usdz: 'img/models/fireplaces/adatto_110_exposta.usdz',
    poster: 'img/figures/webp/adatto_110_exposta.webp',
    place: 'floor',
    categ: 'Central'
  },
  {
    id: 14,
    name: 'Altezza',
    glb: 'img/models/fireplaces/altezza_moldura_embutida.glb',
    usdz: 'img/models/fireplaces/altezza_moldura_embutida.usdz',
    poster: 'img/figures/webp/altezza_moldura_embutida.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 40,
    name: 'Delicatta',
    glb: 'img/models/fireplaces/delicatta.glb',
    usdz: 'img/models/fireplaces/delicatta.usdz',
    poster: 'img/figures/webp/delicatta.webp',
    place: 'floor',
    categ: 'Central'
  },
  {
    id: 1,
    name: 'Delicatta C',
    glb: 'img/models/fireplaces/delicatta_canto.glb',
    usdz: 'img/models/fireplaces/delicatta_canto.usdz',
    poster: 'img/figures/webp/delicatta_canto.webp',
    place: 'floor',
    categ: 'Canto'
  },
  {
    id: 3,
    name: 'Duo',
    glb: 'img/models/fireplaces/duo_central.glb',
    usdz: 'img/models/fireplaces/duo_central.usdz',
    poster: 'img/figures/webp/duo_central.webp',
    place: '',
    categ: 'Central'
  },
  {
    id: 4,
    name: 'Duo Base',
    glb: 'img/models/fireplaces/duo_base_central.glb',
    usdz: 'img/models/fireplaces/duo_base_central.usdz',
    poster: 'img/figures/webp/duo_base_central.webp',
    place: 'floor',
    categ: 'Central'
  },
  {
    id: 19,
    name: 'Duo M',
    glb: 'img/models/fireplaces/duo_central_mold.glb',
    usdz: 'img/models/fireplaces/duo_central_mold.usdz',
    poster: 'img/figures/webp/duo_central_mold.webp',
    place: 'floor',
    categ: 'Central'
  },

  {
    id: 20,
    name: 'Efficienza',
    glb: 'img/models/fireplaces/efficienza.glb',
    usdz: 'img/models/fireplaces/efficienza.usdz',
    poster: 'img/figures/webp/efficienza.webp',
    place: 'floor',
    categ: 'Exposta'
  },
  {
    id: 45,
    name: 'Fire Pro',
    glb: 'img/models/fireplaces/firepro.glb',
    usdz: 'img/models/fireplaces/firepro.usdz',
    poster: 'img/figures/webp/firepro.webp',
    place: 'floor',
    categ: 'Exposta'
  },
  {
    id: 44,
    name: 'Fogo Pro',
    glb: 'img/models/fireplaces/fogopro.glb',
    usdz: 'img/models/fireplaces/fogopro.usdz',
    poster: 'img/figures/webp/fogopro.webp',
    place: 'floor',
    categ: 'Exposta'
  },
  {
    id: 2,
    name: 'Forza',
    glb: 'img/models/fireplaces/forza_canto.glb',
    usdz: 'img/models/fireplaces/forza_canto.usdz',
    poster: 'img/figures/webp/forza_di_canto.webp',
    place: 'floor',
    categ: 'Canto'
  },
  {
    id: 5,
    name: 'MF 1200',
    glb: 'img/models/fireplaces/1200_embutida.glb',
    usdz: 'img/models/fireplaces/1200_embutida.usdz',
    poster: 'img/figures/webp/1200_embutida.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 21,
    name: 'MF1200 Base',
    glb: 'img/models/fireplaces/1200_exposta.glb',
    usdz: 'img/models/fireplaces/1200_exposta.usdz',
    poster: 'img/figures/webp/1200_exposta.webp',
    place: 'floor',
    categ: 'Central'
  },
  {
    id: 10,
    name: 'MF1400',
    glb: 'img/models/fireplaces/1400_embutida.glb',
    usdz: 'img/models/fireplaces/1400_embutida.usdz',
    poster: 'img/figures/webp/1200_embutida.webp',
    place: '',
    categ: 'Embutida'
  },
  {
    id: 11,
    name: 'MF1400 Base',
    glb: 'img/models/fireplaces/1400_exposta.glb',
    usdz: 'img/models/fireplaces/1400_exposta.usdz',
    poster: 'img/figures/webp/1200_exposta.webp',
    place: 'floor',
    categ: 'Central'
  },
  {
    id: 33,
    name: 'MF150',
    glb: 'img/models/fireplaces/mf150.glb',
    usdz: 'img/models/fireplaces/mf150.usdz',
    poster: 'img/figures/webp/mf150.webp',
    place: 'floor',
    categ: 'Exposta'
  },
  {
    id: 32,
    name: 'MF250',
    glb: 'img/models/fireplaces/mf250.glb',
    usdz: 'img/models/fireplaces/mf250.usdz',
    poster: 'img/figures/webp/mf250.webp',
    place: 'floor',
    categ: 'Exposta'
  },
  {
    id: 34,
    name: 'MF350',
    glb: 'img/models/fireplaces/mf350.glb',
    usdz: 'img/models/fireplaces/mf350.usdz',
    poster: 'img/figures/webp/mf350.webp',
    place: 'floor',
    categ: 'Exposta'
  },
  {
    id: 46,
    name: 'MF360',
    glb: 'img/models/fireplaces/mf360.glb',
    usdz: 'img/models/fireplaces/mf360.usdz',
    poster: 'img/figures/webp/mf360.webp',
    place: 'floor',
    categ: 'Suspensa'
  },

  {
    id: 9,
    name: 'Ottanta 360',
    glb: 'img/models/fireplaces/ottanta_360_central.glb',
    usdz: 'img/models/fireplaces/ottanta_360_central.usdz',
    poster: 'img/figures/webp/ottanta_360_central.webp',
    place: '',
    categ: 'Suspensa'
  },
  {
    id: 30,
    name: 'Prime 80',
    glb: 'img/models/fireplaces/prime80.glb',
    usdz: 'img/models/fireplaces/prime80.usdz',
    poster: 'img/figures/webp/prime80.webp',
    place: 'wall',
    categ: 'Embutida'
  },
  {
    id: 31,
    name: 'Prime 100',
    glb: 'img/models/fireplaces/prime100.glb',
    usdz: 'img/models/fireplaces/prime100.usdz',
    poster: 'img/figures/webp/prime100.webp',
    place: 'wall',
    categ: 'Embutida'
  },
  {
    id: 42,
    name: 'Prime Duo',
    glb: 'img/models/fireplaces/primeduo.glb',
    usdz: 'img/models/fireplaces/primeduo.usdz',
    poster: 'img/figures/webp/primeduo.webp',
    place: 'wall',
    categ: 'Central'
  },

  {
    id: 43,
    name: 'Prime Duo M',
    glb: 'img/models/fireplaces/primeduoM.glb',
    usdz: 'img/models/fireplaces/primeduoM.usdz',
    poster: 'img/figures/webp/primeduo.webp',
    place: 'floor',
    categ: 'Central'
  },
  {
    id: 41,
    name: 'Vision',
    glb: 'img/models/fireplaces/vision.glb',
    usdz: 'img/models/fireplaces/vision.usdz',
    poster: 'img/figures/webp/vision.webp',
    place: 'floor',
    categ: 'Exposta'
  },
  {
    id: 39,
    name: 'VitroLD',
    glb: 'img/models/fireplaces/vitroLD.glb',
    usdz: 'img/models/fireplaces/vitroLD.usdz',
    poster: 'img/figures/webp/vitroLD.webp',
    place: 'floor',
    categ: 'Exposta'
  },

  {
    id: 35,
    name: 'Wide120',
    glb: 'img/models/fireplaces/wide120.glb',
    usdz: 'img/models/fireplaces/wide120.usdz',
    poster: 'img/figures/webp/wide120.webp',
    place: 'wall',
    categ: 'Embutida'
  },
  {
    id: 36,
    name: 'Wide120Duo',
    glb: 'img/models/fireplaces/wide120duo.glb',
    usdz: 'img/models/fireplaces/wide120duo.usdz',
    poster: 'img/figures/webp/wide120duo.webp',
    place: 'wall',
    categ: 'Embutida'
  },
  {
    id: 37,
    name: 'Wide120DuoM',
    glb: 'img/models/fireplaces/wide120duoM.glb',
    usdz: 'img/models/fireplaces/wide120duoM.usdz',
    poster: 'img/figures/webp/wide120duo.webp',
    place: 'wall',
    categ: 'Embutida'
  },
  {
    id: 38,
    name: 'Wide120M',
    glb: 'img/models/fireplaces/wide120M.glb',
    usdz: 'img/models/fireplaces/wide120M.usdz',
    poster: 'img/figures/webp/wide120M.webp',
    place: 'wall',
    categ: 'Embutida'
  }
]

export default fireplaces
