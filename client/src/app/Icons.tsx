// should be able to be treated as a text element
import React from 'react';
import styled from 'styled-components';
import dfstyles from '../styles/dfstyles';
import { UpgradeBranch } from '../_types/global/GlobalTypes';

const SVGWrapper = styled.span`
  width: 1em;
  height: 1em;
  display: inline-block;
  position: relative;

  & svg {
    width: 100%;
    height: 100%;
    & path {
      fill: ${dfstyles.colors.text};
    }
  }
`;

const DefaultSVG = ({ children }: { children: React.ReactNode }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='512'
      height='512'
      viewBox='0 0 512 512'
    >
      {children}
    </svg>
  );
};

const SilverGrowthSVG = () => (
  <svg
    version='1.1'
    id='Layer_1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    viewBox='0 0 512 512'
    // style="enable-background:new 0 0 512 512;"
  >
    <path
      d='M-0.5,166.3v305.1h512V166.3H-0.5z M95.8,441.7h-64v-64h32v32h32V441.7z M95.8,226.6h-32v32h-32v-64h64V226.6z M237.2,371.3
	c8.3,0,15,6.7,15,15s-6.7,15-15,15H120c-5.9,0-11.2-3.4-13.6-8.7c-2.4-5.3-1.6-11.6,2.2-16l96-112.3H120c-8.3,0-15-6.7-15-15
	s6.7-15,15-15h117.2c5.9,0,11.2,3.4,13.6,8.7c2.4,5.3,1.6,11.6-2.2,16l-96,112.3H237.2z M400.7,397.8c-2.8,2.4-6.3,3.6-9.7,3.6
	c-4.2,0-8.5-1.8-11.4-5.3l-44.5-52.3l-41.3,51.9c-2.9,3.7-7.3,5.7-11.7,5.7c-1.7,0-3.3-0.3-4.9-0.8c-6-2.1-10.1-7.8-10.1-14.2v-137
	c0-8.3,6.7-15,15-15s15,6.7,15,15v94l25.8-32.4c0,0,0,0,0.1-0.1l56.3-70.9c5.2-6.5,14.6-7.6,21.1-2.4c6.5,5.2,7.6,14.6,2.4,21.1
	l-48.6,61.1l48.3,56.8C407.7,382.9,407,392.4,400.7,397.8z M486.8,441.7h-64v-32h32v-32h32V441.7z M486.8,258.6h-32v-32h-32v-32h64
	V258.6z M35.8,102.9h439.5V150H35.8V102.9z M73.2,39.6h364.7v47.1H73.2V39.6z'
    />
  </svg>
);

const SilverSVG = () => (
  <svg
    version='1.1'
    id='Layer_1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    viewBox='0 0 512 512'
    // style="enable-background:new 0 0 512 512;"
  >
    <g id='icomoon-ignore'></g>
    <path
      d='M-1,102.9v305.1h512V102.9H-1z M95.3,378.4h-64v-64h32v32h32V378.4z M95.3,163.3h-32v32h-32v-64h64V163.3z M236.7,308
	c8.3,0,15,6.7,15,15s-6.7,15-15,15H119.5c-5.9,0-11.2-3.4-13.6-8.7c-2.4-5.3-1.6-11.6,2.2-16l96-112.3h-84.6c-8.3,0-15-6.7-15-15
	s6.7-15,15-15h117.2c5.9,0,11.2,3.4,13.6,8.7c2.4,5.3,1.6,11.6-2.2,16l-96,112.3H236.7z M400.2,334.4c-2.8,2.4-6.3,3.6-9.7,3.6
	c-4.2,0-8.5-1.8-11.4-5.3l-44.5-52.3l-41.3,51.9c-2.9,3.7-7.3,5.7-11.7,5.7c-1.7,0-3.3-0.3-4.9-0.8c-6-2.1-10.1-7.8-10.1-14.2V186
	c0-8.3,6.7-15,15-15s15,6.7,15,15v94l25.8-32.4c0,0,0,0,0.1-0.1l56.3-70.9c5.2-6.5,14.6-7.6,21.1-2.4c6.5,5.2,7.6,14.6,2.4,21.1
	l-48.6,61.1l48.3,56.8C407.2,319.6,406.5,329.1,400.2,334.4z M486.3,378.4h-64v-32h32v-32h32V378.4z M486.3,195.3h-32v-32h-32v-32
	h64V195.3z'
    />
  </svg>
);

export const SilverIcon = () => (
  <SVGWrapper>
    <SilverSVG />
  </SVGWrapper>
);

export const SilverGrowthIcon = () => (
  <SVGWrapper>
    <SilverGrowthSVG />
  </SVGWrapper>
);

const PopulationGrowthSVG = () => (
  <DefaultSVG>
    <path d='M384 385.306v-26.39c35.249-19.864 64-69.386 64-118.916 0-79.529 0-144-96-144s-96 64.471-96 144c0 49.53 28.751 99.052 64 118.916v26.39c-108.551 8.874-192 62.21-192 126.694h448c0-64.484-83.449-117.82-192-126.694z'></path>
    <path d='M163.598 397.664c27.655-18.075 62.040-31.818 99.894-40.207-7.527-8.892-14.354-18.811-20.246-29.51-15.207-27.617-23.246-58.029-23.246-87.947 0-43.021 0-83.655 15.3-116.881 14.853-32.252 41.564-52.248 79.611-59.744-8.457-38.24-30.97-63.375-90.911-63.375-96 0-96 64.471-96 144 0 49.53 28.751 99.052 64 118.916v26.39c-108.551 8.874-192 62.21-192 126.694h139.503c7.259-6.455 15.298-12.586 24.095-18.336z'></path>
  </DefaultSVG>
);

export const PopulationGrowthIcon = () => (
  <SVGWrapper>
    <PopulationGrowthSVG />
  </SVGWrapper>
);

const PopulationSVG = () => (
  <DefaultSVG>
    <path d='M288 353.306v-26.39c35.249-19.864 64-69.386 64-118.916 0-79.529 0-144-96-144s-96 64.471-96 144c0 49.53 28.751 99.052 64 118.916v26.39c-108.551 8.874-192 62.21-192 126.694h448c0-64.484-83.449-117.82-192-126.694z'></path>
  </DefaultSVG>
);

export const PopulationIcon = () => (
  <SVGWrapper>
    <PopulationSVG />
  </SVGWrapper>
);

const RangeSVG = () => (
  <DefaultSVG>
    <path d='M118.627 438.627l265.373-265.372v114.745c0 17.673 14.327 32 32 32s32-14.327 32-32v-192c0-12.942-7.797-24.611-19.754-29.563-3.962-1.642-8.121-2.42-12.246-2.419v-0.018h-192c-17.673 0-32 14.327-32 32 0 17.674 14.327 32 32 32h114.745l-265.372 265.373c-6.249 6.248-9.373 14.438-9.373 22.627s3.124 16.379 9.373 22.627c12.496 12.497 32.758 12.497 45.254 0z'></path>
  </DefaultSVG>
);

export const RangeIcon = () => (
  <SVGWrapper>
    <RangeSVG />
  </SVGWrapper>
);

const TargetSVG = () => (
  <DefaultSVG>
    <path d='M512 224h-50.462c-13.82-89.12-84.418-159.718-173.538-173.538v-50.462h-64v50.462c-89.12 13.82-159.718 84.418-173.538 173.538h-50.462v64h50.462c13.82 89.12 84.418 159.718 173.538 173.538v50.462h64v-50.462c89.12-13.82 159.718-84.418 173.538-173.538h50.462v-64zM396.411 224h-49.881c-9.642-27.275-31.255-48.889-58.53-58.53v-49.881c53.757 12.245 96.166 54.655 108.411 108.411zM256 288c-17.673 0-32-14.327-32-32s14.327-32 32-32c17.673 0 32 14.327 32 32s-14.327 32-32 32zM224 115.589v49.881c-27.275 9.641-48.889 31.255-58.53 58.53h-49.881c12.245-53.756 54.655-96.166 108.411-108.411zM115.589 288h49.881c9.641 27.275 31.255 48.889 58.53 58.53v49.881c-53.756-12.245-96.166-54.654-108.411-108.411zM288 396.411v-49.881c27.275-9.642 48.889-31.255 58.53-58.53h49.881c-12.245 53.757-54.654 96.166-108.411 108.411z'></path>
  </DefaultSVG>
);

export const TargetIcon = () => (
  <SVGWrapper>
    <TargetSVG />
  </SVGWrapper>
);

const PlaySVG = () => (
  <DefaultSVG>
    <path d='M96 64l320 192-320 192z'></path>
  </DefaultSVG>
);

export const PlayIcon = () => (
  <SVGWrapper>
    <PlaySVG />
  </SVGWrapper>
);

const PauseSVG = () => (
  <DefaultSVG>
    <path d='M64 64h160v384h-160zM288 64h160v384h-160z'></path>
  </DefaultSVG>
);

export const PauseIcon = () => (
  <SVGWrapper>
    <PauseSVG />
  </SVGWrapper>
);

const UpgradeSVG = () => (
  <DefaultSVG>
    <path d='M256 16l-240 240h144v256h192v-256h144z'></path>
  </DefaultSVG>
);

export const UpgradeIcon = () => (
  <SVGWrapper>
    <UpgradeSVG />
  </SVGWrapper>
);

const HelpSVG = () => (
  <DefaultSVG>
    <path
      fill='#000'
      d='M192 416h96v96h-96zM400 32c26.51 0 48 21.49 48 48v144l-160 96v64h-96v-96l160-96v-64h-256v-96h304z'
    ></path>
  </DefaultSVG>
);

export const HelpIcon = () => (
  <SVGWrapper>
    <HelpSVG />
  </SVGWrapper>
);

const PlanetSVG = () => (
  <DefaultSVG>
    <path
      fill='#000'
      d='M504.915 112.289c-9.989-17.302-30.188-26.075-60.038-26.075-21.509 0-48.026 4.685-77.585 13.34-31.393-22.378-69.8-35.554-111.292-35.554-106.039 0-192 85.961-192 192 0 6.077 0.298 12.084 0.851 18.017-5.425 5.179-10.576 10.335-15.42 15.45-19.103 20.172-32.751 38.94-40.567 55.784-6.807 14.671-12.677 36.049-1.98 54.576 9.989 17.302 30.189 26.075 60.039 26.075 21.571 0 48.18-4.713 77.841-13.416 31.384 22.353 69.769 35.514 111.236 35.514 106.039 0 192-85.961 192-192 0-6.1-0.304-12.126-0.863-18.080 5.356-5.119 10.442-10.215 15.231-15.272 19.103-20.172 32.752-38.941 40.567-55.785 6.807-14.67 12.678-36.047 1.98-54.574zM435.503 197.208c-35.258 37.232-88.122 77.047-148.854 112.111-83.735 48.346-169.983 79.584-219.727 79.584-17.417 0-25.882-3.913-27.996-7.575-3.799-6.579 2.576-28.943 35.093-63.98 3.943 11.697 8.979 22.893 14.992 33.461 40.608-6.736 105.629-29.936 179.638-72.666 57.807-33.375 107.78-70.909 140.714-105.688 4.749-5.015 8.769-9.613 12.164-13.773-6.206-10.533-13.393-20.42-21.427-29.541 16.88-3.863 32.032-5.926 44.776-5.926 17.416 0 25.881 3.913 27.995 7.575 3.888 6.731-2.857 29.974-37.368 66.418z'
    ></path>
  </DefaultSVG>
);

export const PlanetIcon = () => (
  <SVGWrapper>
    <PlanetSVG />
  </SVGWrapper>
);

const LeaderboardSVG = () => (
  <DefaultSVG>
    <path d='M416 96v-64h-320v64h-96v64c0 53.019 42.979 96 96 96 10.038 0 19.715-1.543 28.81-4.401 23.087 33.004 58.304 56.898 99.19 65.198v99.203h-32c-35.347 0-64 28.653-64 64h256c0-35.347-28.653-64-64-64h-32v-99.203c40.886-8.3 76.103-32.193 99.19-65.198 9.095 2.858 18.772 4.401 28.81 4.401 53.021 0 96-42.981 96-96v-64h-96zM96 218c-31.981 0-58-26.019-58-58v-32h58v32c0 20.093 3.715 39.316 10.477 57.034-3.401 0.623-6.899 0.966-10.477 0.966zM474 160c0 31.981-26.019 58-58 58-3.578 0-7.076-0.343-10.477-0.966 6.762-17.718 10.477-36.941 10.477-57.034v-32h58v32z'></path>
  </DefaultSVG>
);

export const LeaderboardIcon = () => (
  <SVGWrapper>
    <LeaderboardSVG />
  </SVGWrapper>
);

const PlanetdexSVG = () => (
  <DefaultSVG>
    <path
      fill='#000'
      d='M448 64v416h-336c-26.513 0-48-21.49-48-48s21.487-48 48-48h304v-384h-320c-35.199 0-64 28.8-64 64v384c0 35.2 28.801 64 64 64h384v-448h-32zM160 16h160v224l-80-80-80 80v-224z'
    ></path>
    <path
      fill='#000'
      d='M112.028 416v0c-0.009 0.001-0.019 0-0.028 0-8.836 0-16 7.163-16 16s7.164 16 16 16c0.009 0 0.019-0.001 0.028-0.001v0.001h303.945v-32h-303.945z'
    ></path>
  </DefaultSVG>
);

export const PlanetdexIcon = () => (
  <SVGWrapper>
    <PlanetdexSVG />
  </SVGWrapper>
);

const RightarrowSVG = () => (
  <DefaultSVG>
    <path d='M310.627 438.627l160-160c12.497-12.496 12.497-32.758 0-45.255l-160-160c-12.497-12.496-32.758-12.496-45.255 0s-12.497 32.758 0 45.255l105.373 105.373h-306.745c-17.673 0-32 14.327-32 32s14.327 32 32 32h306.745l-105.373 105.373c-6.248 6.248-9.372 14.438-9.372 22.627s3.124 16.379 9.372 22.627c12.497 12.497 32.758 12.497 45.255 0z'></path>
  </DefaultSVG>
);

export const RightarrowIcon = () => (
  <SVGWrapper>
    <RightarrowSVG />
  </SVGWrapper>
);

const TwitterSVG = () => (
  <DefaultSVG>
    <path d='M512 113.2c-18.8 8.4-39.1 14-60.3 16.5 21.7-13 38.3-33.6 46.2-58.1-20.3 12-42.8 20.8-66.7 25.5-19.2-20.4-46.5-33.1-76.7-33.1-58 0-105 47-105 105 0 8.2 0.9 16.2 2.7 23.9-87.3-4.4-164.7-46.2-216.5-109.8-9 15.5-14.2 33.6-14.2 52.8 0 36.4 18.5 68.6 46.7 87.4-17.2-0.5-33.4-5.3-47.6-13.1 0 0.4 0 0.9 0 1.3 0 50.9 36.2 93.4 84.3 103-8.8 2.4-18.1 3.7-27.7 3.7-6.8 0-13.3-0.7-19.8-1.9 13.4 41.7 52.2 72.1 98.1 73-36 28.2-81.2 45-130.5 45-8.5 0-16.8-0.5-25.1-1.5 46.6 29.9 101.8 47.2 161.1 47.2 193.2 0 298.9-160.1 298.9-298.9 0-4.6-0.1-9.1-0.3-13.6 20.5-14.7 38.3-33.2 52.4-54.3z'></path>
  </DefaultSVG>
);

export const TwitterIcon = () => (
  <SVGWrapper>
    <TwitterSVG />
  </SVGWrapper>
);

const BroadcastSVG = () => (
  <DefaultSVG>
    <path
      fill='#000'
      d='M504.978 457.88v0l-218.537-435.556c-8.371-14.883-19.406-22.324-30.441-22.324s-22.070 7.441-30.442 22.324l-218.537 435.556c-16.743 29.766-2.5 54.12 31.652 54.12h434.654c34.151 0 48.396-24.354 31.651-54.12zM256 448c-17.673 0-32-14.327-32-32s14.327-32 32-32c17.674 0 32 14.326 32 32s-14.326 32-32 32zM288 320c0 17.673-14.327 32-32 32s-32-14.327-32-32v-96c0-17.673 14.327-32 32-32s32 14.327 32 32v96z'
    ></path>
  </DefaultSVG>
);

export const BroadcastIcon = () => (
  <SVGWrapper>
    <BroadcastSVG />
  </SVGWrapper>
);

export const BranchIcon = ({ branch }: { branch: number }) => {
  if (branch === UpgradeBranch.Population) return <PopulationIcon />;
  else if (branch === UpgradeBranch.Silver) return <SilverIcon />;
  else return <RangeIcon />;
};