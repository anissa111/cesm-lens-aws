import img1 from '../../images/svg-1.svg'

export const HomeObjOne = {
  id: 'overview',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Test',
  headline: 'Overview',
  description:
    'The National Center for Atmospheric Research (NCAR) Community Earth System Model Large Ensemble (CESM LENS) dataset includes a 40-member ensemble of climate simulations for the period 1920-2100. All model runs were subject to the same radiative forcing scenario: historical up to 2005, and RCP8.5 thereafter. (RCP8.5 - Representative Concentration Pathway 8.5 - refers to the worst-case scenario considered in the Fifth Assessment Report of the Intergovernmental Panel on Climate Change - IPCC). Each of the 40 runs begins from a slightly different initial atmospheric state (created by randomly perturbing temperatures at the level of round-off error). The data comprise both surface (2D) and volumetric (3D) variables in the atmosphere, ocean, land, and ice domains. The total LENS data volume is ~500 TB, and is traditionally accessible through the NCAR Climate Data Gateway (CDG) for download or via web services. A subset (currently ~70 TB compressed) including the most useful variables is now freely available on S3 thanks to the AWS Public Dataset Program. Slides from an informational briefing about this dataset are available at 20200212.CESM_LENS.AWStelecon.pdf.',
  buttonLabel: 'Learn More',
  imgStart: false,
  img: img1,
  alt: 'Overview',
  dark: true,
  primary: true,
  darkText: false,
}
