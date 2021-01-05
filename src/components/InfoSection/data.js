import img1 from '../../images/intro-svg.svg'
import code from '../../images/code-svg.svg'
import data from '../../images/data-svg.svg'
import data_files from '../../images/data-files-svg.svg'
import citation from '../../images/publication.svg'

export const HomeObjOverview = {
  id: 'overview',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: '',
  headline: 'Overview',
  description:
    '<p>The National Center for Atmospheric Research (<a href="https://ncar.ucar.edu/">NCAR</a>) Community Earth System Model Large Ensemble (<a href="http://www.cesm.ucar.edu/projects/community-projects/LENS/">CESM LENS</a>) dataset includes a 40-member ensemble of climate simulations for the period 1920-2100. All model runs were subject to the same radiative forcing scenario: historical up to 2005, and RCP8.5 thereafter. (RCP8.5 - Representative Concentration Pathway 8.5 - refers to the worst-case scenario considered in the <a href="https://www.ipcc.ch/report/ar5/wg1/">Fifth Assessment Report</a> of the Intergovernmental Panel on Climate Change - IPCC). Each of the 40 runs begins from a slightly different initial atmospheric state (created by randomly perturbing temperatures at the level of round-off error). The data comprise both surface (2D) and volumetric (3D) variables in the atmosphere, ocean, land, and ice domains.</p><p>The total LENS data volume is ~500 TB, and is traditionally accessible through the NCAR Climate Data Gateway (<a href="https://www.earthsystemgrid.org/dataset/ucar.cgd.ccsm4.CESM_CAM5_BGC_LE.html">CDG</a>) for download or via web services. A subset (currently ~70 TB compressed) including the most useful variables is now <a href="https://registry.opendata.aws/ncar-cesm-lens/">freely available on S3</a> thanks to the <a href="https://aws.amazon.com/opendata/public-datasets/">AWS Public Dataset Program</a>.</p><p>Slides from an informational briefing about this dataset are available at <a href="20200212.CESM_LENS.AWStelecon.pdf">20200212.CESM_LENS.AWStelecon.pdf</a></p>',
  buttonLabel: 'Learn More',
  imgStart: false,
  img: img1,
  alt: 'Overview',
  dark: false,
  primary: false,
  darkText: true,
  toURL: 'http://www.cesm.ucar.edu/projects/community-projects/LENS/',
}

export const HomeObjDataAccess = {
  id: 'data-access',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '',
  headline: 'Accessing CESM LENS on AWS',
  description:
    '<ul><li>S3 bucket name: <b>ncar-cesm-lens</b></li><li>Region: <b>us-west-2</b> region</li><li>Amazon resource name: <b>arn:aws:s3:::ncar-cesm-lens</b></li><li>Bucket contents list: <a href="https://ncar-cesm-lens.s3.amazonaws.com/">https://ncar-cesm-lens.s3.amazonaws.com/</a></li></ul><br><p>The intent is for users to compute directly on the data in AWS rather than downloading from S3 (traditional download is available from the NCAR CDG link above).</p><br><br><p>We also urge users to watch the <a href="https://github.com/NCAR/cesm-lens-aws">CESM LENS GitHub repo</a> for additions or changes to data and tools, and to notify <em>cesm-lens-aws at ucar.edu</em> if you are using these data so that we can justify continued maintenance on S3. All LENS model runs have been completed, so we do not expect to add data on an ongoing basis, but <b>may be able to include additional fields upon request</b>.</p>',
  buttonLabel: '',
  imgStart: true,
  img: data,
  alt: 'data-access',
  dark: false,
  primary: false,
  darkText: false,
  toURL: '',
}

export const HomeObjNotebooks = {
  id: 'notebooks',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: '',
  headline: 'Notebooks',
  description:
    '<p>A Jupyter Notebook illustrating how to read the LENS data on AWS, and reproducing Figures 2 and 4 from Kay et al. (2015), has been developed. This Notebook and other resources on GitHub will be gradually improved and augmented.</p><br><ul><li><a href="http://gallery.pangeo.io/repos/NCAR/cesm-lens-aws/notebooks/kay-et-al-2015.v3.html">Rendered (static) version of the Notebook</a></li><li><a href="https://github.com/NCAR/cesm-lens-aws">Reusable Notebook on GitHub</a></li></ul>',
  buttonLabel: 'GitHub Repository',
  imgStart: true,
  img: code,
  alt: 'data',
  dark: true,
  primary: true,
  darkText: false,
  toURL: 'https://github.com/NCAR/cesm-lens-aws',
}

export const HomeObjData = {
  id: 'data',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: '',
  headline: 'Data',
  description:
    '<p>Zarr format: The LENS data on AWS are structured according to the <a href="https://zarr.readthedocs.io/en/stable/">Zarr</a> storage format. There are independent Zarr stores for each component, frequency, experiment, and variable. The naming convention is:<br/> <code>{component}/{frequency}/cesmLE-{experiment}-{variable}.zarr</code><br/> where:</p><ul><li>component = atm (atmosphere), lnd (land), ocn (ocean), ice_nh or ice_sh (ice, northern and southern hemispheres)</li><li>frequency = monthly, daily, or hourly6-startYear-endYear (6-hourly data are available for distinct periods)</li><li>experiment = 20C (20th century runs), RCP85 (RCP 8.5 runs), HIST (historical run), CTRL (fully-coupled control run), CTRL_AMIP (atmosphere-only control run), CTRL_SLAB (slab-ocean control run)</li><li>variable = one of the variable names listed in the tables below</li></ul><br><p>The table below shows the available Zarr stores, including the experiments, variables, time ranges, and 2D or 3D nature (3D means multiple atmosphere levels or ocean depths are present). See also <a href="https://ncar-cesm-lens.s3-us-west-2.amazonaws.com/catalogs/aws-cesm1-le.json">Collection Description</a> and <a href="https://ncar-cesm-lens.s3-us-west-2.amazonaws.com/catalogs/aws-cesm1-le.csv">Catalog File</a> used by <a href="https://intake-esm.readthedocs.io/">Intake-esm</a>.</p><br><p>⚠️⚠️ <b>Data Errata</b> ⚠️⚠️: users should consult the list of <a href="http://www.cesm.ucar.edu/projects/community-projects/LENS/known-issues.html">known issues in the CESM LENS dataset</a>.',
  buttonLabel: 'Intake-ESM Docs',
  imgStart: false,
  img: data_files,
  alt: 'data',
  dark: false,
  primary: false,
  darkText: true,
  toURL: 'https://intake-esm.readthedocs.io/en/stable/',
}

export const HomeObjCitation = {
  id: 'data-citation',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: '',
  headline: 'Data Citation',
  description:
    '<p>Data are freely available and reusable under the terms of the CC-BY-4.0 license. See <a href="https://www.ucar.edu/terms-of-use/data">Terms of Use</a>. If you use these data, we request that you provide attribution in any derived products. The original, complete LENS dataset and the AWS-hosted subset have different DOIs (Digital Object Identifiers) to reflect their differing scope and format, so please cite whichever version of the dataset used, as well as the Kay et al. (2015) paper:</p><ul><li>AWS-hosted subset: <a href="https://doi.org/10.26024/wt24-5j82">doi:10.26024/wt24-5j82</a><br/>de La Beaujardière, J., Banihirwe, A., Shih, C.-F., Paul, K., and Hamman, J., (2019), "NCAR CESM LENS Cloud-Optimized Subset," UCAR/NCAR Computational and Informations Systems Lab</li><li>Original dataset: <a href="https://doi.org/10.5065/d6j101d1">doi:10.5065/d6j101d1</a><br/>Kay, J. and Deser, C. (2016). "The Community Earth System Model (CESM) Large Ensemble Project" UCAR/NCAR Climate Data Gateway.</li><li>Kay et al. (2015) paper: <a href="https://doi.org/10.5065/d6j101d1">doi:10.5065/d6j101d1</a><br/>Kay, J. E., Deser, C., Phillips, A., Mai, A., Hannay, C., Strand, G., Arblaster, J., Bates, S., Danabasoglu, G., Edwards, J., Holland, M. Kushner, P., Lamarque, J.-F., Lawrence, D., Lindsay, K., Middleton, A., Munoz, E., Neale, R., Oleson, K., Polvani, L., and M. Vertenstein (2015), "The Community Earth System Model (CESM) Large Ensemble Project: A Community Resource for Studying Climate Change in the Presence of Internal Climate Variability," <it>Bulletin of the American Meteorological Society,</it> <b>96,</b> 1333-1349</li></ul>',
  buttonLabel: 'Terms of Use',
  imgStart: false,
  img: citation,
  alt: 'citation',
  dark: false,
  primary: false,
  darkText: true,
  toURL: 'https://www.ucar.edu/terms-of-use/data',
}
