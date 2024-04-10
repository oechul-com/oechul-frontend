import React, { memo } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

const InstagramIcon = memo<IconProps>(props => (
  <Icon type="fill" {...props}>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.17651 17.7402C5.25025 17.6999 4.74732 17.546 4.41216 17.4172C3.96831 17.2462 3.65215 17.0395 3.31812 16.7087C2.9841 16.3779 2.7789 16.0606 2.60562 15.6177C2.47547 15.2825 2.31871 14.7802 2.27539 13.8539C2.22827 12.8528 2.21839 12.5522 2.21288 10.0159C2.20737 7.47954 2.21706 7.17934 2.26095 6.17784C2.30047 5.25234 2.45533 4.74883 2.58396 4.41386C2.75496 3.96944 2.96092 3.65385 3.29247 3.32002C3.62403 2.98618 3.94038 2.7806 4.38365 2.60732C4.71844 2.4766 5.2208 2.32118 6.14668 2.2771C7.14856 2.2296 7.44877 2.2201 9.98472 2.21459C12.5207 2.20908 12.8216 2.21858 13.8239 2.26266C14.7494 2.30294 15.2531 2.45627 15.5877 2.58566C16.0317 2.75666 16.3477 2.96205 16.6815 3.29418C17.0154 3.6263 17.2211 3.94151 17.3944 4.38574C17.5253 4.71957 17.6807 5.22175 17.7245 6.1482C17.7721 7.15008 17.783 7.45047 17.7875 9.98624C17.7921 12.522 17.7832 12.8232 17.7393 13.8243C17.6988 14.7505 17.5453 15.2537 17.4163 15.5892C17.2453 16.0329 17.0391 16.3492 16.7074 16.6829C16.3756 17.0165 16.0597 17.2221 15.6162 17.3954C15.2818 17.5259 14.7789 17.6817 13.8537 17.7258C12.8519 17.7729 12.5516 17.7828 10.0147 17.7883C7.47784 17.7938 7.17839 17.7835 6.17651 17.7402ZM14.1144 5.55557C13.9888 5.3683 13.9216 5.14798 13.9212 4.92249C13.9207 4.62021 14.0403 4.3301 14.2536 4.11596C14.467 3.90182 14.7566 3.78119 15.0589 3.78058C15.2844 3.78013 15.505 3.84656 15.6927 3.97147C15.8804 4.09638 16.0269 4.27415 16.1136 4.48231C16.2003 4.69047 16.2233 4.91966 16.1797 5.1409C16.1361 5.36214 16.0279 5.56549 15.8688 5.72522C15.7096 5.88496 15.5067 5.99391 15.2856 6.0383C15.0645 6.08268 14.8352 6.06051 14.6268 5.97459C14.4183 5.88866 14.24 5.74284 14.1144 5.55557ZM10.0092 14.8776C7.31558 14.8828 5.12751 12.7036 5.12219 10.0094C5.11706 7.31557 7.29658 5.12713 9.99061 5.12181C12.6846 5.11649 14.8733 7.29619 14.8784 9.99042C14.8835 12.6846 12.7029 14.8725 10.0092 14.8776Z"
        fill={props.fill}
      />
      <path
        d="M6.83335 10.006C6.83211 9.37967 7.01663 8.76704 7.36356 8.24559C7.7105 7.72413 8.20428 7.31726 8.78245 7.07643C9.36063 6.8356 9.99723 6.77163 10.6118 6.8926C11.2263 7.01358 11.7912 7.31406 12.2349 7.75606C12.6787 8.19807 12.9814 8.76173 13.1048 9.37578C13.2282 9.98983 13.1667 10.6267 12.9282 11.2058C12.6897 11.7849 12.2848 12.2803 11.7647 12.6293C11.2446 12.9783 10.6327 13.1652 10.0064 13.1665C9.5905 13.1674 9.17853 13.0863 8.79398 12.9279C8.40943 12.7696 8.05985 12.537 7.76519 12.2435C7.47054 11.95 7.23659 11.6014 7.0767 11.2174C6.91681 10.8335 6.83412 10.4219 6.83335 10.006Z"
        fill={props.fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.06555 0.566319C5.05474 0.61401 4.36446 0.775322 3.76102 1.01244C3.13648 1.25584 2.60714 1.58245 2.08045 2.11104C1.55377 2.63962 1.22943 3.16935 0.98775 3.79483C0.753858 4.39961 0.595396 5.09046 0.550746 6.10184C0.506095 7.11322 0.496215 7.43831 0.501155 10.0182C0.506095 12.598 0.517496 12.9214 0.566516 13.9349C0.614777 14.9455 0.775518 15.6356 1.01264 16.2392C1.25641 16.8637 1.58265 17.3929 2.11142 17.9198C2.6402 18.4466 3.16954 18.7702 3.79655 19.0123C4.40076 19.2458 5.09179 19.405 6.10298 19.4493C7.11417 19.4936 7.43965 19.5038 10.0187 19.4989C12.5978 19.4939 12.9225 19.4825 13.9358 19.4345C14.9491 19.3864 15.6356 19.2245 16.2394 18.9885C16.8639 18.7442 17.3935 18.4185 17.92 17.8896C18.4465 17.3606 18.7706 16.8305 19.0121 16.2046C19.2462 15.6004 19.4052 14.9094 19.4491 13.8989C19.4934 12.8849 19.5038 12.5611 19.4989 9.98168C19.4939 7.40221 19.4823 7.07883 19.4343 6.06574C19.3862 5.05265 19.2253 4.36465 18.9883 3.76063C18.7442 3.1361 18.4183 2.60732 17.8898 2.08006C17.3612 1.55281 16.8307 1.22886 16.205 0.987934C15.6004 0.754041 14.9098 0.59463 13.8986 0.550929C12.8874 0.507229 12.5619 0.496019 9.98187 0.500959C7.40184 0.505899 7.07883 0.516919 6.06555 0.566319ZM6.17651 17.7402C5.25025 17.6999 4.74732 17.546 4.41216 17.4172C3.96831 17.2462 3.65215 17.0395 3.31812 16.7087C2.9841 16.3779 2.7789 16.0606 2.60562 15.6177C2.47547 15.2825 2.31871 14.7802 2.27539 13.8539C2.22827 12.8528 2.21839 12.5522 2.21288 10.0159C2.20737 7.47954 2.21706 7.17934 2.26095 6.17784C2.30047 5.25234 2.45533 4.74883 2.58396 4.41386C2.75496 3.96944 2.96092 3.65385 3.29247 3.32002C3.62403 2.98618 3.94038 2.7806 4.38365 2.60732C4.71844 2.4766 5.2208 2.32118 6.14668 2.2771C7.14856 2.2296 7.44877 2.2201 9.98472 2.21459C12.5207 2.20908 12.8216 2.21858 13.8239 2.26266C14.7494 2.30294 15.2531 2.45627 15.5877 2.58566C16.0317 2.75666 16.3477 2.96205 16.6815 3.29418C17.0154 3.6263 17.2211 3.94151 17.3944 4.38574C17.5253 4.71957 17.6807 5.22175 17.7245 6.1482C17.7721 7.15008 17.783 7.45047 17.7875 9.98624C17.7921 12.522 17.7832 12.8232 17.7393 13.8243C17.6988 14.7505 17.5453 15.2537 17.4163 15.5892C17.2453 16.0329 17.0391 16.3492 16.7074 16.6829C16.3756 17.0165 16.0597 17.2221 15.6162 17.3954C15.2818 17.5259 14.7789 17.6817 13.8537 17.7258C12.8519 17.7729 12.5516 17.7828 10.0147 17.7883C7.47784 17.7938 7.17839 17.7835 6.17651 17.7402Z"
        fill={props.fill}
      />
    </svg>
  </Icon>
));

InstagramIcon.displayName = 'InstagramIcon';

export default InstagramIcon;
